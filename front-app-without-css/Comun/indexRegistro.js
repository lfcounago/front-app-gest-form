import { formatoApellidosCorrecto, formatoContrasenaCorrecto, formatoDireccionCorrecta, formatoDniCorrecto, formatoEmailCorrecto, formatoFechaCorrecta, formatoNombreCorrecto, formatoTelefonoCorrecto, formatoUsuarioCorrecto } from "./comun/comprobacionFormato.js"
import { crearOptionSelect } from "./comun/creacionElementosHTML.js"
import { getFromBack } from "./comun/getters.js"
import { manejarSubmitRegistro } from "./comun/manejarEventosRegistro.js"

const formularioRegistro = document.getElementById('formularioRegistro') 
const dniInput = document.getElementById('dniInput') 
const nombreInput = document.getElementById('nombreInput') 
const apellidosInput = document.getElementById('apellidosInput') 
const fechaInput = document.getElementById('fechaInput') 
const direccionInput = document.getElementById('direccionInput') 
const telefonoInput = document.getElementById('telefonoInput') 
const emailInput = document.getElementById('emailInput') 
const fotoInput = document.getElementById('fotoInput') 

const usuarioInput = document.getElementById('usuarioInput') 
const contrasenaInput1 = document.getElementById('contrasenaInput1') 
const contrasenaInput2 = document.getElementById('contrasenaInput2') 
const rolInput = document.getElementById('rolInput') 

document.addEventListener('DOMContentLoaded', async (e) => {    
    const dataRequest = {
        controlador: 'rol',
        action: 'SEARCH'
    }

    const roles = await getFromBack(dataRequest)
    for(let rol of roles.resource){
        if(rol.nombre_rol.length > 0){
            const optionRol = crearOptionSelect(rol.nombre_rol, rol.id_rol)
    
            rolInput.appendChild(optionRol)
        }
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

usuarioInput.addEventListener('blur', (e) => {
    e.preventDefault()

    if(formatoUsuarioCorrecto(e.target.value).esValido){
        usuarioInput.style.borderColor = '#00FF00'
    }else{
        usuarioInput.style.borderColor = '#FF0000'
    }
})

contrasenaInput1.addEventListener('blur', (e) => {
    e.preventDefault()

    if(formatoContrasenaCorrecto(e.target.value).esValido){
        contrasenaInput1.style.borderColor = '#00FF00'
    }else{
        contrasenaInput1.style.borderColor = '#FF0000'
    }
})

contrasenaInput2.addEventListener('blur', (e) => {
    e.preventDefault()

    if(formatoContrasenaCorrecto(e.target.value).esValido){
        contrasenaInput2.style.borderColor = '#00FF00'
    }else{
        contrasenaInput2.style.borderColor = '#FF0000'
    }
})

formularioRegistro.addEventListener('submit', manejarSubmitRegistro)

datosEjemplo.addEventListener('click', (e) => {
    dniInput.value = '61726273T' 
    nombreInput.value = 'anonimo' 
    apellidosInput.value = 'Gonzalez Gonzalez' 
    fechaInput.value = '2002-02-02' 
    direccionInput.value = 'y yo que se' 
    telefonoInput.value = '987654320' 
    emailInput.value = 'tampocose@uvigo.es'

    usuarioInput.value = 'anonimo' 
    contrasenaInput1.value = 'anonimo'  
    contrasenaInput2.value = 'anonimo' 
})