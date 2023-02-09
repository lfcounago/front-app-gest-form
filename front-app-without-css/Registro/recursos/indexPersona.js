import { getFromBack } from "./comun/getters.js"
import { personaAFila } from "./comun/creacionElementosHTML.js"
import { formatoApellidosCorrecto, formatoDireccionCorrecta, formatoDniCorrecto, formatoEmailCorrecto, formatoFechaCorrecta, formatoNombreCorrecto, formatoTelefonoCorrecto } from "./comun/comprobacionFormato.js"
import { manejarClickBuscarPersona, manejarClickInsertarPersona, manejarSubmitPersona } from "./comun/manejarEventosPersona.js"
import { getCookie } from "./comun/idioma.js"

const usuarioSesion = document.getElementById('usuarioSesion')

const tablaPersona = document.getElementById('tablaPersona')

const formularioPersona = document.getElementById('formularioPersona')
const dniInput = document.getElementById('dniInput')
const nombreInput = document.getElementById('nombreInput')
const apellidosInput = document.getElementById('apellidosInput')
const fechaInput = document.getElementById('fechaInput')
const direccionInput = document.getElementById('direccionInput')
const telefonoInput = document.getElementById('telefonoInput')
const emailInput = document.getElementById('emailInput')
const fotoInput = document.getElementById('fotoInput')


document.addEventListener('DOMContentLoaded', async (e) => {
    const cookieUsuario = getCookie('auth')

    if(!cookieUsuario || cookieUsuario === ''){
        alert('Falta usuario')                          /* idioma */
        window.location.href = './login.html'
    }
    usuarioSesion.textContent = `Usuario: ${cookieUsuario}` /* idioma */
    
    const dataRequest = {
        controlador: 'persona',
        action: 'SEARCH'
    }

    const {resource} = await getFromBack(dataRequest)
    
    for(let persona of resource){
        /* console.log(persona) */
        const filaPersona = personaAFila(persona)
        /* console.log(filaPersona) */
        tablaPersona.appendChild(filaPersona)
    }

})

dniInput.addEventListener('blur',(e) => {
    e.preventDefault()

    if(formatoDniCorrecto(e.target.value).esValido){
        dniInput.style.borderColor = '#00FF00'
    }else{
        dniInput.style.borderColor = '#FF0000'
    }
})

nombreInput.addEventListener('blur',(e) => {
    e.preventDefault()

    if(formatoNombreCorrecto(e.target.value).esValido){
        nombreInput.style.borderColor = '#00FF00'
    }else{
        nombreInput.style.borderColor = '#FF0000'
    }
})

apellidosInput.addEventListener('blur',(e) => {
    e.preventDefault()

    if(formatoApellidosCorrecto(e.target.value).esValido){
        apellidosInput.style.borderColor = '#00FF00'
    }else{
        apellidosInput.style.borderColor = '#FF0000'
    }
})

fechaInput.addEventListener('blur',(e) => {
    e.preventDefault()

    if(formatoFechaCorrecta(e.target.value).esValido){
        fechaInput.style.borderColor = '#00FF00'
    }else{
        fechaInput.style.borderColor = '#FF0000'
    }
})

direccionInput.addEventListener('blur',(e) => {
    e.preventDefault()

    if(formatoDireccionCorrecta(e.target.value).esValido){
        direccionInput.style.borderColor = '#00FF00'
    }else{
        direccionInput.style.borderColor = '#FF0000'
    }
})

telefonoInput.addEventListener('blur',(e) => {
    e.preventDefault()

    if(formatoTelefonoCorrecto(e.target.value).esValido){
        telefonoInput.style.borderColor = '#00FF00'
    }else{
        telefonoInput.style.borderColor = '#FF0000'
    }
})

emailInput.addEventListener('blur',(e) => {
    e.preventDefault()

    if(formatoEmailCorrecto(e.target.value).esValido){
        emailInput.style.borderColor = '#00FF00'
    }else{
        emailInput.style.borderColor = '#FF0000'
    }
})


//MANEJADORES DE EVENTOS INSERTAR Y ELIMINAR
const botonInsertar  = document.getElementById('botonInsertar')
const botonBuscar  = document.getElementById('botonBuscar')

botonInsertar.addEventListener('click', manejarClickInsertarPersona)
botonBuscar.addEventListener('click', manejarClickBuscarPersona)

formularioPersona.addEventListener('submit', manejarSubmitPersona)