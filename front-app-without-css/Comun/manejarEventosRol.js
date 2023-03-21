import { comprobarFormularioRol } from "./comprobacionFormato.js"
import { rolAFila } from "./creacionElementosHTML.js"

const tablaRol = document.getElementById('tablaRol')

const contenedorFormulario = document.getElementById('contenedorFormulario')
const idRolInput = document.getElementById('idRolInput')
const nombreRolInput = document.getElementById('nombreRolInput')
const descripcionRolInput = document.getElementById('descripcionRolInput')
const inputSubmitFormulario = document.getElementById('inputSubmitFormulario')

export function manejarClickInsertarRol(e){
    console.log('insertar rol')
    contenedorFormulario.style.display = 'block'

    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('insertarRol')

    idRolInput.value = ''
    idRolInput.readOnly = true
    nombreRolInput.value = ''
    nombreRolInput.readOnly = false
    descripcionRolInput.value = ''
    descripcionRolInput.readOnly = false

    inputSubmitFormulario.value = 'Insertar'
}
export function manejarClickBuscarRol(e){
    console.log('buscar rol')
    contenedorFormulario.style.display = 'block'

    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('buscarRol')

    idRolInput.value = ''
    idRolInput.readOnly = false
    nombreRolInput.value = ''
    nombreRolInput.readOnly = false
    descripcionRolInput.value = ''
    descripcionRolInput.readOnly = false

    inputSubmitFormulario.value = 'Buscar'
}
export function manejarClickEditarRol(arrayDatosRol, e){
    console.log('editar rol')
    console.log(arrayDatosRol)

    contenedorFormulario.style.display = 'block'

    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('editarRol')

    idRolInput.value = arrayDatosRol[0]
    idRolInput.readOnly = true
    nombreRolInput.value = arrayDatosRol[1]
    nombreRolInput.readOnly = false
    descripcionRolInput.value = arrayDatosRol[2]
    descripcionRolInput.readOnly = false

    inputSubmitFormulario.value = 'Editar'
}

export function manejarClickEliminarRol(arrayDatosRol, e){
    console.log('eliminar rol')
    console.log(arrayDatosRol)

    contenedorFormulario.style.display = 'block'

    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('eliminarRol')

    idRolInput.value = arrayDatosRol[0]
    idRolInput.readOnly = true
    nombreRolInput.value = arrayDatosRol[1]
    nombreRolInput.readOnly = true
    descripcionRolInput.value = arrayDatosRol[2]
    descripcionRolInput.readOnly = true

    inputSubmitFormulario.value = 'Eliminar'
}

export function manejarClickDetalleRol(arrayDatosRol, e){
    console.log('detalle rol')
    console.log(arrayDatosRol)

    contenedorFormulario.style.display = 'block'

    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('detalleRol')

    idRolInput.value = arrayDatosRol[0]
    idRolInput.readOnly = true
    nombreRolInput.value = arrayDatosRol[1]
    nombreRolInput.readOnly = true
    descripcionRolInput.value = arrayDatosRol[2]
    descripcionRolInput.readOnly = true

    inputSubmitFormulario.value = 'Cerrar'
}

export async function manejarSubmitRol(e){
    e.preventDefault()
    console.log('submit rol')

    const datosRol = Object.fromEntries(new FormData(e.target))
    const claseFormulario = e.target.inputSubmitFormulario.classList.value

    if(claseFormulario === 'detalleRol'){
        contenedorFormulario.style.display = 'none'
    }else{
        const {esValido, mensajeError} = comprobarFormularioRol(datosRol, claseFormulario)
        console.log(esValido, mensajeError)

        if(claseFormulario !== 'buscarRol' && !esValido){
            //mostrar mensaje error
            console.log(mensajeError)
        }else{
            let dataRequest = {
                controlador : 'rol'
            }
            console.log(claseFormulario)
            switch(claseFormulario){
                case 'insertarRol':
                    dataRequest.action = 'ADD'
                    break
                case 'buscarRol':
                    dataRequest.action = 'SEARCH'
                    break
                case 'editarRol':
                    dataRequest.action = 'EDIT'
                    break
                case 'eliminarRol':
                    dataRequest.action = 'DELETE'
                    break
                default:
                    console.log('excepcion en funcion manejarSubmitRol')
            }
    
            dataRequest.id = datosRol.idRolInput
            dataRequest.nombre_rol = datosRol.nombreRolInput
            dataRequest.descrip_rol = datosRol.descripcionRolInput
            
            console.log(dataRequest)
            /* const response = await getFromBack(dataRequest)
    
            if(response.code === 'SQL_OK'){
                window.location.reload()
            }else{
                if(response.code === 'RECORDSET_DATOS'){
                    const cabeceraTablaRol = tablaRol.querySelector('tbody')
                    console.log(cabeceraTablaRol)
                    tablaRol.innerHTML = ''
                    tablaRol.appendChild(cabeceraTablaRol)
                    for(let rol of response.resource){
                        
                        const filaRol = rolAFila(rol)
                       
                        tablaRol.appendChild(filaRol)
                    }
                }else{
                    //mostrar error
                }
            } */
        }
    }
}