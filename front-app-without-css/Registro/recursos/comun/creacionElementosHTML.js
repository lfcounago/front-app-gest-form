import { manejarClickDetallePersona, manejarClickEditarPersona, manejarClickEliminarPersona } from "../comun/manejarEventosPersona.js"
import { manejarClickDetalleRol, manejarClickEditarRol, manejarClickEliminarRol } from "../comun/manejarEventosRol.js"
import { manejarClickDetalleUsuario, manejarClickEditarUsuario, manejarClickEliminarUsuario } from "../comun/manejarEventosUsuario.js"

export function personaAFila({dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona}){
    const columnaDni = crearColumna(dni, 'dniPersona')
    const columnaNombre = crearColumna(nombre_persona, 'nombrePersona')
    const columnaApellidos = crearColumna(apellidos_persona, 'apellidosPersona')
    const columnaFecha = crearColumna(fechaNacimiento_persona, 'fechaNacPersona')
    const columnaDireccion = crearColumna(direccion_persona, 'direccionPersona')
    const columnaTelefono = crearColumna(telefono_persona, 'telefonoPersona')
    const columnaEmail = crearColumna(email_persona, 'emailPersona')
    const columnaFoto = crearColumna(foto_persona, 'fotoPersona')

    //le paso los parametros de los manejadores así, para poder mostrarlos en el formualario sin tener que sacarlos del html
    const botonEditar = crearBoton('editar', manejarClickEditarPersona.bind(this, [dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona]))
    const botonEliminar = crearBoton('eliminar', manejarClickEliminarPersona.bind(this, [dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona]))
    const botonDetalle = crearBoton('detalle', manejarClickDetallePersona.bind(this, [dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona]))

    const filaPersona = document.createElement('tr')
    añadirHijos(filaPersona, columnaDni, columnaNombre, columnaApellidos, columnaFecha, columnaDireccion,columnaTelefono, columnaEmail, columnaFoto, botonEditar, botonEliminar, botonDetalle)

    return filaPersona
}

function crearColumna(dato, classname){
    const td = document.createElement('td')
    td.classList.add(classname)
    td.textContent = dato
    return td
}

function crearBoton(tipoBoton, manejadorEventoClick){
    const imagen = document.createElement('img')

    switch(tipoBoton){
        case 'editar':
            imagen.src = '../estaticos/imagenes/fotoEditar.svg'
            //añadir manejador de evento click

            break
        case 'eliminar':
            imagen.src = '../estaticos/imagenes/fotoEliminar.svg'
            //añadir manejador de evento click
            break
        case 'detalle':
            imagen.src = '../estaticos/imagenes/fotoDetalle.svg'
            //añadir manejador de evento click
            break
        default:
            imagen.src = ''
    }

    const boton = document.createElement('button')
    boton.classList.add(tipoBoton)
    boton.addEventListener('click', manejadorEventoClick)

    const td = document.createElement('td')
    boton.appendChild(imagen)
    td.appendChild(boton)

    return td
}

function añadirHijos(raiz, ...hijos){
    for(let hijo of hijos){
        raiz.appendChild(hijo)
    }
}


export function usuarioAFila({dni, usuario, contrasena, id_rol}){
    const columnaDni = crearColumna(dni, 'dniUsuario')
    const columnaUsuario = crearColumna(usuario, 'usuarioUsuario')
    const columnaContrasena = crearColumna(contrasena, 'contrasenaUsuario')
    const columnaRol = crearColumna(id_rol.nombre_rol, 'rolUsuario')

    const botonEditar = crearBoton('editar', manejarClickEditarUsuario.bind(this, [dni, usuario, contrasena, id_rol]))
    const botonEliminar = crearBoton('eliminar', manejarClickEliminarUsuario.bind(this, [dni, usuario, contrasena, id_rol]))
    const botonDetalle = crearBoton('detalle', manejarClickDetalleUsuario.bind(this, [dni, usuario, contrasena, id_rol]))

    const filaUsuario = document.createElement('tr')
    añadirHijos(filaUsuario, columnaDni, columnaUsuario, columnaContrasena, columnaRol, botonEditar, botonEliminar, botonDetalle)

    return filaUsuario
}

export function crearOptionSelect(value, classname){
    const option = document.createElement('option')
    option.value = value
    option.textContent = value
    option.classList.add(classname)

    return option
}


export function rolAFila({id_rol, nombre_rol, descrip_rol}){
    const columnaId = crearColumna(id_rol, 'idRol')
    const columnaNombre = crearColumna(nombre_rol, 'nombreRol')
    const columnaDescripcion = crearColumna(descrip_rol, 'descripcionRol')

    const botonEditar = crearBoton('editar', manejarClickEditarRol.bind(this, [id_rol, nombre_rol, descrip_rol]))
    const botonEliminar = crearBoton('eliminar', manejarClickEliminarRol.bind(this, [id_rol, nombre_rol, descrip_rol]))
    const botonDetalle = crearBoton('detalle', manejarClickDetalleRol.bind(this, [id_rol, nombre_rol, descrip_rol]))

    const filaRol = document.createElement('tr')
    añadirHijos(filaRol, columnaId, columnaNombre, columnaDescripcion, botonEditar, botonEliminar, botonDetalle)

    return filaRol
}