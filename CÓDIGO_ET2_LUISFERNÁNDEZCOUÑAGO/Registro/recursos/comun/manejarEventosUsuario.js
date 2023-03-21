import { comprobarFormularioUsuario } from "./comprobacionFormato.js"
import { usuarioAFila } from "./creacionElementosHTML.js"
import { getFromBack } from "./getters.js"
import { encriptarpassword } from "./md5.js"

const tablaUsuario = document.getElementById('tablaUsuario')
const contenedorFormulario = document.getElementById('contenedorFormulario')
const inputSubmitFormulario = document.getElementById('inputSubmitFormulario')

const dniInput = document.getElementById('dniInput')
const usuarioInput = document.getElementById('usuarioInput')
const contrasenaInput = document.getElementById('contrasenaInput')
const rolInput = document.getElementById('rolInput')

export function manejarClickInsertarUsuario(e){
    console.log('insertar usuario')
    contenedorFormulario.style.display = 'block'

    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('insertarUsuario')

    dniInput.value = ''
    dniInput.readOnly = false
    usuarioInput.value = ''
    usuarioInput.readOnly = false
    contrasenaInput.value = ''
    contrasenaInput.readOnly = false
    rolInput.disabled = false

    inputSubmitFormulario.value = 'Insertar'
}
export function manejarClickBuscarUsuario(e){
    console.log('buscar usuario')
    contenedorFormulario.style.display = 'block'

    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('buscarUsuario')

    dniInput.value = ''
    dniInput.readOnly = false
    usuarioInput.value = ''
    usuarioInput.readOnly = false
    contrasenaInput.value = ''
    contrasenaInput.readOnly = true
    rolInput.disabled = false

    inputSubmitFormulario.value = 'Buscar'
}
export function manejarClickEditarUsuario(arrayDatosUsuario, e){
    console.log('editar usuario')
    console.log(arrayDatosUsuario)

    contenedorFormulario.style.display = 'block'

    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('editarUsuario')

    dniInput.value = arrayDatosUsuario[0]
    dniInput.readOnly = true
    usuarioInput.value = arrayDatosUsuario[1]
    usuarioInput.readOnly = false
    contrasenaInput.value = arrayDatosUsuario[2]
    contrasenaInput.readOnly = true
    rolInput.value = arrayDatosUsuario[3].nombre_rol
    rolInput.disabled = false

    inputSubmitFormulario.value = 'Editar'
}

export function manejarClickEliminarUsuario(arrayDatosUsuario, e){
    console.log('eliminar usuario')
    console.log(arrayDatosUsuario)

    contenedorFormulario.style.display = 'block'

    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('eliminarUsuario')

    dniInput.value = arrayDatosUsuario[0]
    dniInput.readOnly = true
    usuarioInput.value = arrayDatosUsuario[1]
    usuarioInput.readOnly = true
    contrasenaInput.value = arrayDatosUsuario[2]
    contrasenaInput.readOnly = true
    rolInput.value = arrayDatosUsuario[3].nombre_rol
    rolInput.disabled = true

    inputSubmitFormulario.value = 'Eliminar'
}

export function manejarClickDetalleUsuario(arrayDatosUsuario, e){
    console.log('detalle usuario')
    console.log(arrayDatosUsuario)

    contenedorFormulario.style.display = 'block'

    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('detalleUsuario')

    dniInput.value = arrayDatosUsuario[0]
    dniInput.readOnly = true
    usuarioInput.value = arrayDatosUsuario[1]
    usuarioInput.readOnly = true
    contrasenaInput.value = arrayDatosUsuario[2]
    contrasenaInput.readOnly = true
    rolInput.value = arrayDatosUsuario[3].nombre_rol
    rolInput.disabled = true

    inputSubmitFormulario.value = 'Cerrar'
}

export async function manejarSubmitUsuario(e){
    e.preventDefault()
    console.log('submit usuario')
    const datosUsuario = Object.fromEntries(new FormData(e.target))
    const claseFormulario = e.target.inputSubmitFormulario.classList.value

    if(claseFormulario === 'detalleUsuario'){
        contenedorFormulario.style.display = 'none'
    }else{
        const {esValido, mensajeError} = comprobarFormularioUsuario(datosUsuario, claseFormulario)
        console.log(esValido, mensajeError)

        if(claseFormulario !== 'buscarUsuario' && !esValido){
            //mostrar mensaje error
            console.log(mensajeError)
        }else{
            let dataRequest = {
                controlador : 'usuario'
            }
    
            switch(claseFormulario){
                case 'insertarUsuario':
                    dataRequest.action = 'ADD'
                    break
                case 'buscarUsuario':
                    dataRequest.action = 'SEARCH'
                    break
                case 'editarUsuario':
                    dataRequest.action = 'EDIT'
                    break
                case 'eliminarUsuario':
                    dataRequest.action = 'DELETE'
                    break
                default:
                    console.log('excepcion en funcion manejarSubmitUsuario')
            }
    
            const classNameOptionSelected = Array.from(e.target.rolInput.children).filter(elem => elem.selected)[0].className
            console.log(classNameOptionSelected)
    
            dataRequest.dni = datosUsuario.dniInput
            dataRequest.usuario = datosUsuario.usuarioInput
            dataRequest.contrasena = encriptarpassword(datosUsuario.contrasenaInput)
            dataRequest.id_rol = classNameOptionSelected
    
            const response = await getFromBack(dataRequest)
    
            if(response.code === 'SQL_OK'){
                window.location.reload()
            }else{
                if(response.code === 'RECORDSET_DATOS'){
                    const cabeceraTablaUsuario = tablaUsuario.querySelector('tbody')
                    console.log(cabeceraTablaUsuario)
                    tablaUsuario.innerHTML = ''
                    tablaUsuario.appendChild(cabeceraTablaUsuario)
                    for(let usuario of response.resource){
                        
                        const filaUsuario = usuarioAFila(usuario)
                       
                        tablaUsuario.appendChild(filaUsuario)
                    }
                }else{
                    //mostrar error
                }
            }
        }
    }
}