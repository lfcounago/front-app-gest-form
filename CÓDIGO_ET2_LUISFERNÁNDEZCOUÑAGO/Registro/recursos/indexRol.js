import { formatoDescripcionRolCorrecto, formatoNombreRolCorrecto } from "./comun/comprobacionFormato.js"
import { rolAFila } from "./comun/creacionElementosHTML.js"
import { getFromBack } from "./comun/getters.js"
import { getCookie } from "./comun/idioma.js"
import { manejarClickBuscarRol, manejarClickInsertarRol, manejarSubmitRol } from "./comun/manejarEventosRol.js"

const usuarioSesion = document.getElementById('usuarioSesion')

const tablaRol = document.getElementById('tablaRol')

const formularioRol = document.getElementById('formularioRol')
const idRolInput = document.getElementById('idRolInput')
const nombreRolInput = document.getElementById('nombreRolInput')
const descripcionRolInput = document.getElementById('descripcionRolInput')

document.addEventListener('DOMContentLoaded', async (e) => {
    const cookieUsuario = getCookie('auth')

    if(!cookieUsuario || cookieUsuario === ''){
        alert('Falta usuario')                          /* idioma */
        window.location.href = './login.html'
    }
    usuarioSesion.textContent = `Usuario: ${cookieUsuario}` /* idioma */
    
    const dataRequest = {
        controlador: 'rol',
        action: 'SEARCH'
    }

    const {resource} = await getFromBack(dataRequest)
    
    for(let rol of resource){
        const filaRol = rolAFila(rol)

        tablaRol.appendChild(filaRol)
    }
})

/* idRolInput.addEventListener('blur', (e) => {
    //de momento no añado nada porque el usuario no va a poder modificar el id
}) */

nombreRolInput.addEventListener('blur', (e) => {
    e.preventDefault()
    
    if(formatoNombreRolCorrecto(e.target.value).esValido){
        nombreRolInput.style.borderColor = '#00FF00'
    }else{
        nombreRolInput.style.borderColor = '#FF0000'
    }
})

descripcionRolInput.addEventListener('blur', (e) => {
    e.preventDefault()
    console.log('Descripcion:', e.target.value,'\nTamaño:', e.target.value.length)
    const {esValido, mensajeError} = formatoDescripcionRolCorrecto(e.target.value)
    console.log(mensajeError)
    if(esValido){
        descripcionRolInput.style.borderColor = '#00FF00'
    }else{
        descripcionRolInput.style.borderColor = '#FF0000'
    }
})


//FALTA ON BLUR DE LA DESCRIPCION


const botonInsertar  = document.getElementById('botonInsertar')
const botonBuscar  = document.getElementById('botonBuscar')

botonInsertar.addEventListener('click', manejarClickInsertarRol)
botonBuscar.addEventListener('click', manejarClickBuscarRol)

formularioRol.addEventListener('submit', manejarSubmitRol)