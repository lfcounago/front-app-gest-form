import { formatoContrasenaCorrecto, formatoDniCorrecto, formatoUsuarioCorrecto } from "./comun/comprobacionFormato.js"
import { crearOptionSelect, usuarioAFila } from "./comun/creacionElementosHTML.js"
import { getFromBack } from "./comun/getters.js"
import { getCookie } from "./comun/idioma.js"
import { manejarClickBuscarUsuario, manejarClickInsertarUsuario, manejarSubmitUsuario } from "./comun/manejarEventosUsuario.js"

const usuarioSesion = document.getElementById('usuarioSesion')

const tablaUsuario = document.getElementById('tablaUsuario')

const formularioUsuario= document.getElementById('formularioUsuario')
const dniInput = document.getElementById('dniInput')
const usuarioInput = document.getElementById('usuarioInput')
const contrasenaInput = document.getElementById('contrasenaInput')
const rolInput = document.getElementById('rolInput')

document.addEventListener('DOMContentLoaded', async (e) => {
    const cookieUsuario = getCookie('auth')

    if(!cookieUsuario || cookieUsuario === ''){
        alert('Falta usuario')                          /* idioma */
        window.location.href = './login.html'
    }
    usuarioSesion.textContent = `Usuario: ${cookieUsuario}` /* idioma */
    
    const dataRequest = {
        controlador: 'usuario',
        action: 'SEARCH'
    }

    const {resource} = await getFromBack(dataRequest)
    
    for(let usuario of resource){
        const filaUsuario = usuarioAFila(usuario)

        tablaUsuario.appendChild(filaUsuario)
    }

    dataRequest.controlador = 'rol'

    const roles = await getFromBack(dataRequest)
    for(let rol of roles.resource){
        if(rol.nombre_rol.length > 0){
            const optionRol = crearOptionSelect(rol.nombre_rol, rol.id_rol)
    
            rolInput.appendChild(optionRol)
        }
    }
})

dniInput.addEventListener('blur', (e) => {
    e.preventDefault()

    if(formatoDniCorrecto(e.target.value).esValido){
        dniInput.style.borderColor = '#00FF00'
    }else{
        dniInput.style.borderColor = '#FF0000'
    }
})

usuarioInput.addEventListener('blur', (e) => {
    e.preventDefault()

    if(formatoUsuarioCorrecto(e.target.value).esValido){
        usuarioInput.style.borderColor = '#00FF00'
    }else{
        usuarioInput.style.borderColor = '#FF0000'
    }
})

contrasenaInput.addEventListener('blur', (e) => {
    e.preventDefault()

    if(formatoContrasenaCorrecto(e.target.value).esValido){
        contrasenaInput.style.borderColor = '#00FF00'
    }else{
        contrasenaInput.style.borderColor = '#FF0000'
    }
})

//EN ROL NO PONGO EVENTO ONBLUR, DE MOMENTO


//MANEJADORES DE EVENTOS INSERTAR Y ELIMINAR
const botonInsertar  = document.getElementById('botonInsertar')
const botonBuscar  = document.getElementById('botonBuscar')

botonInsertar.addEventListener('click', manejarClickInsertarUsuario)
botonBuscar.addEventListener('click', manejarClickBuscarUsuario)

formularioUsuario.addEventListener('submit', manejarSubmitUsuario)