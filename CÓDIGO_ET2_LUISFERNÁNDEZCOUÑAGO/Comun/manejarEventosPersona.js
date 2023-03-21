import { comprobarFormularioPersona } from "./comprobacionFormato.js"
import { personaAFila } from "./creacionElementosHTML.js"
import { getFromBack } from "./getters.js"

const tablaPersona = document.getElementById('tablaPersona')

const contenedorFormulario = document.getElementById('contenedorFormulario')
const inputSubmitFormulario = document.getElementById('inputSubmitFormulario')

const dniInput = document.getElementById('dniInput')
const nombreInput = document.getElementById('nombreInput')
const apellidosInput = document.getElementById('apellidosInput')
const fechaInput = document.getElementById('fechaInput')
const direccionInput = document.getElementById('direccionInput')
const telefonoInput = document.getElementById('telefonoInput')
const emailInput = document.getElementById('emailInput')
const fotoInput = document.getElementById('fotoInput')

export function manejarClickInsertarPersona(e){
    e.preventDefault()
    console.log('insertar persona')
    
    contenedorFormulario.style.display = 'block'
    
    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('insertarPersona')

    dniInput.value = ''
    dniInput.readOnly = false

    nombreInput.value = ''
    nombreInput.readOnly = false

    apellidosInput.value = ''
    apellidosInput.readOnly = false

    fechaInput.value = ''
    fechaInput.readOnly = false

    direccionInput.value = ''
    direccionInput.readOnly = false

    telefonoInput.value = ''
    telefonoInput.readOnly = false

    emailInput.value = ''
    emailInput.readOnly = false

    /* fotoInput.value = arrayDatosPersona[7] //no asigno a foto el valor porque no lo va a poder editar*/
    fotoInput.readOnly = false


    inputSubmitFormulario.value = 'Insertar' /* idioma */


    //falta poner en el formulario los datos de la tabla
    //falta setear los campos que se pueden modificar y los que no
}

export function manejarClickBuscarPersona(e){
    e.preventDefault()
    console.log('buscar persona')

    contenedorFormulario.style.display = 'block'
    
    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('buscarPersona')

    dniInput.value = ''
    dniInput.readOnly = false

    nombreInput.value = ''
    nombreInput.readOnly = false

    apellidosInput.value = ''
    apellidosInput.readOnly = false

    fechaInput.value = ''
    fechaInput.readOnly = false

    direccionInput.value = ''
    direccionInput.readOnly = false

    telefonoInput.value = ''
    telefonoInput.readOnly = false

    emailInput.value = ''
    emailInput.readOnly = false

    /* fotoInput.value = arrayDatosPersona[7] //no asigno a foto el valor porque no lo va a poder editar*/
    fotoInput.readOnly = true


    inputSubmitFormulario.value = 'Buscar' /* idioma */

    //falta poner en el formulario los datos de la tabla
    //falta setear los campos que se pueden modificar y los que no
}

export function manejarClickEditarPersona(arrayDatosPersona, e){
    e.preventDefault()
    console.log('editar persona')

    contenedorFormulario.style.display = 'block'
    
    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('editarPersona')

    dniInput.value = arrayDatosPersona[0]
    dniInput.readOnly = true

    nombreInput.value = arrayDatosPersona[1]
    nombreInput.readOnly = false

    apellidosInput.value = arrayDatosPersona[2]
    apellidosInput.readOnly = false

    fechaInput.value = arrayDatosPersona[3]
    fechaInput.readOnly = false

    direccionInput.value = arrayDatosPersona[4]
    direccionInput.readOnly = false

    telefonoInput.value = Number(arrayDatosPersona[5]) || 0
    telefonoInput.readOnly = false

    emailInput.value = arrayDatosPersona[6]
    emailInput.readOnly = false

    /* fotoInput.value = arrayDatosPersona[7] //no asigno a foto el valor porque no lo va a poder editar */
    fotoInput.readOnly = true


    inputSubmitFormulario.value = 'Editar' /* idioma */
    //falta poner en el formulario los datos de la tabla    HECHOOOOOOO
    //falta setear los campos que se pueden modificar y los que no
}

export function manejarClickEliminarPersona(arrayDatosPersona, e){
    e.preventDefault()
    console.log('eliminar persona')
    
    contenedorFormulario.style.display = 'block'
    
    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('eliminarPersona')


    dniInput.value = arrayDatosPersona[0]
    dniInput.readOnly = true

    nombreInput.value = arrayDatosPersona[1]
    nombreInput.readOnly = true

    apellidosInput.value = arrayDatosPersona[2]
    apellidosInput.readOnly = true

    fechaInput.value = arrayDatosPersona[3]
    fechaInput.readOnly = true

    direccionInput.value = arrayDatosPersona[4]
    direccionInput.readOnly = true

    telefonoInput.value = Number(arrayDatosPersona[5]) || 0
    telefonoInput.readOnly = true

    emailInput.value = arrayDatosPersona[6]
    emailInput.readOnly = true

    /* fotoInput.value = arrayDatosPersona[7] //no asigno a foto el valor porque no lo va a poder editar*/
    fotoInput.readOnly = true

    inputSubmitFormulario.value = 'Eliminar' /* idioma */
}

export function manejarClickDetallePersona(arrayDatosPersona, e){
    e.preventDefault()
    console.log('detalle persona')
    
    contenedorFormulario.style.display = 'block'
    
    inputSubmitFormulario.classList = ''
    inputSubmitFormulario.classList.add('detallePersona')

    dniInput.value = arrayDatosPersona[0]
    dniInput.readOnly = true

    nombreInput.value = arrayDatosPersona[1]
    nombreInput.readOnly = true

    apellidosInput.value = arrayDatosPersona[2]
    apellidosInput.readOnly = true

    fechaInput.value = arrayDatosPersona[3]
    fechaInput.readOnly = true

    direccionInput.value = arrayDatosPersona[4]
    direccionInput.readOnly = true

    telefonoInput.value = Number(arrayDatosPersona[5]) || 0
    telefonoInput.readOnly = true

    emailInput.value = arrayDatosPersona[6]
    emailInput.readOnly = true

    /* fotoInput.value = arrayDatosPersona[7] //no asigno a foto el valor porque no lo va a poder editar*/
    fotoInput.readOnly = true

    inputSubmitFormulario.value = 'Cerrar' /* idioma */
    //falta poner en el formulario los datos de la tabla
    //falta setear los campos que se pueden modificar y los que no
}


function filaAPersona(fila){
    let datosPersona = {}
    for(let i=0; i < 8; i++){
        const datoPersona = fila.children.item(i)
        const claseDelDato = datoPersona.classList.value
        /* console.log(claseDelDato, datoPersona.textContent) */
        datosPersona[claseDelDato] = datoPersona.textContent
    }

    return datosPersona
}

export async function manejarSubmitPersona(e){
    e.preventDefault()
    
    const claseFormulario = e.target.inputSubmitFormulario.classList.value
    if(claseFormulario === 'detallePersona'){
        contenedorFormulario.style.display = 'none'
    }else{
        const datosFormulario = Object.fromEntries(new FormData(e.target))
    
        if(datosFormulario.fotoInput){
            datosFormulario.fotoInput = datosFormulario.fotoInput.name
        }
        console.log(datosFormulario)
    

        const {esValido, mensajeError} = comprobarFormularioPersona(datosFormulario, claseFormulario)
    
        if(claseFormulario !== 'buscarPersona' && !esValido){
            //mostrar mensaje de error (con idioma)
            console.log(mensajeError)
        }else{
            let dataRequest = {
                controlador: 'persona'
            }

            switch(claseFormulario){
                case 'insertarPersona':
                    dataRequest.action = 'ADD'
                    break
                case 'buscarPersona':
                    dataRequest.action = 'SEARCH'
                    break
                case 'editarPersona':
                    dataRequest.action = 'EDIT'
                    break
                case 'eliminarPersona':
                    dataRequest.action = 'DELETE'
                default:
                    console.log('excepcion en funcion manejarSubmitPersona')
            }

            dataRequest.dni = datosFormulario.dniInput
            dataRequest.nombre_persona = datosFormulario.nombreInput
            dataRequest.apellidos_persona = datosFormulario.apellidosInput
            dataRequest.fechaNacimiento_persona = datosFormulario.fechaInput
            dataRequest.direccion_persona = datosFormulario.direccionInput
            dataRequest.telefono_persona = datosFormulario.telefonoInput
            dataRequest.email_persona = datosFormulario.emailInput
            dataRequest.foto_persona = datosFormulario.fotoInput
            console.log(dataRequest)

            const respuesta = await getFromBack(dataRequest)
            console.log(respuesta)
            if(respuesta.code === 'SQL_OK'){
                window.location.reload()
            }else{
                if(respuesta.code === 'RECORDSET_DATOS'){
                    console.log(tablaPersona)
                    const cabeceraTablaPersona = tablaPersona.querySelector('tbody')
                    console.log(cabeceraTablaPersona)
                    tablaPersona.innerHTML = ''
                    tablaPersona.appendChild(cabeceraTablaPersona)
                    for(let persona of respuesta.resource){
                        
                        const filaPersona = personaAFila(persona)
                       
                        tablaPersona.appendChild(filaPersona)
                    }
                }else{
                    //mostrar error
                    console.log(respuesta.code)

                }
            }
        }
    }
}

