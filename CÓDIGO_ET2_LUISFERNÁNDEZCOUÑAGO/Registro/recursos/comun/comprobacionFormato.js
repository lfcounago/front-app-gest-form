export function formatoDniCorrecto(dni){
    //longitud
    if(dni.length !== 9){
        return {
            esValido: false,
            mensajeError: 'DNI CON LONGITUD INCORRECTA'   /* IDIOMA */
        }
    }
    
    //8 numeros y 1 letra
    const regEx = /[0-9]{8}[A-Za-z]{1}/g
    const result = dni.match(regEx)

    if(result === null){
        return {
            esValido: false,
            mensajeError: 'DNI CON MAL FORMATO. EL CORRECTO ES: NNNNNNNNL'   /* IDIOMA */
        }
    }

    //letra correcta
    if(!letraDniCorrecta(dni)){
        return {
            esValido: false,
            mensajeError: 'LETRA DEL DNI INCORRECTA'   /* IDIOMA */
        }
    }

    return {
        esValido: true,
        mensajeError: ''   /* IDIOMA */
    }
}

export function formatoNombreCorrecto(nombre){
    //tamaño
    if(nombre.length < 3 || nombre.length > 45){
        return {
            esValido: false,
            mensajeError: 'NOMBRE CON LONGITUD INCORRECTA'   /* IDIOMA */
        }
    }

    //letras con acentos, guion y espacios
    if(!soloLetrasConAcentosEspaciosGuiones(nombre)){
        return {
            esValido: false,
            mensajeError: 'NOMBRE CON CARACTERES INCORRECTOS'   /* IDIOMA */
        }
    }

    return {
        esValido: true,
        mensajeError: ''   /* IDIOMA */
    }
}

export function formatoApellidosCorrecto(apellidos){
    //tamaño
    if(apellidos.length < 5 || apellidos.length > 100){
        return {
            esValido: false,
            mensajeError: 'APELLIDOS CON LONGITUD INCORRECTA'   /* IDIOMA */
        }
    }

    //letras con acentos, guion y espacios
    if(!soloLetrasConAcentosEspaciosGuiones(apellidos)){
        return {
            esValido: false,
            mensajeError: 'APELLIDOS CON CARACTERES INCORRECTOS'   /* IDIOMA */
        }
    }

    return {
        esValido: true,
        mensajeError: ''   /* IDIOMA */
    }
}

export function formatoFechaCorrecta(fecha){
    const regEx = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g
    const result = fecha.match(regEx)
    return {
        esValido: result !== null,
        mensajeError: 'FECHA CON FORMATO INCORRECTO. EL CORRECTO ES: DD/MM/AAAA'   /* IDIOMA */
    }
}

export function formatoDireccionCorrecta(direccion){
    if(direccion.length < 10 || direccion.length > 200){
        return {
            esValido: false,
            mensajeError: 'DIRECCIÓN CON LONGITUD INCORRECTA'   /* IDIOMA */
        }
    }

    if(!comprobarCaracteresDireccion(direccion)){
        return {
            esValido: false,
            mensajeError: 'DIRECCIÓN CON CARACTERES INCORRECTOS'   /* IDIOMA */
        }
    }

    return {
        esValido: true,
        mensajeError: ''   /* IDIOMA */
    }
}

export function formatoTelefonoCorrecto(telefono){
    if(telefono.length !== 9){
        return {
            esValido: false,
            mensajeError: 'TELEFONO CON LONGITUD INCORRECTA'   /* IDIOMA */
        }
    }

    const regEx = /[6-9]{1}[0-9]{8}/g
    const result = telefono.match(regEx)

    return {
        esValido: result !== null,
        mensajeError: 'TELEFONO NO VÁLIDO. ESCRIBE UNO CON FORMATO ESPAÑOL'   /* IDIOMA */
    }
}

export function formatoEmailCorrecto(email){
    if(email.length < 8|| email.length > 45){
        return {
            esValido: false,
            mensajeError: 'EMAIL CON LONGITUD INCORRECTA'   /* IDIOMA */
        }
    }

    const regEx = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/g
    const result = email.match(regEx)

    return {
        esValido: result !== null,
        mensajeError: 'EMAIL NO VÁLIDO. EL FORMATO CORRECTO ES: nombre@email.com'   /* IDIOMA */
    }
}

function letraDniCorrecta(dni){
    const numero = Number(dni.slice(0,-1))
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    const letraArray = letras[numero % 23]
    const letraDni = dni.slice(-1).toUpperCase()

    return letraArray === letraDni
}

function soloLetrasConAcentosEspaciosGuiones(texto){
    const regEx = /^[A-Za-záéíóú\- ]{3,45}$/g
    const result = texto.match(regEx)

    return result !== null
}

function comprobarCaracteresDireccion(direccion){
    const regEx = /^[A-Za-záéíóú0-9\-/,ºª ]{10,200}$/g
    const result = direccion.match(regEx)

    return result !== null
}

export function formatoUsuarioCorrecto(usuario){
    if(usuario.length < 3 || usuario.length > 45){
        return {
            esValido: false,
            mensajeError: 'USUARIO CON LONGITUD INCORRECTA'   /* IDIOMA */
        }
    }

    if(!soloLetrasSinAcentosNumeros(usuario)){
        return {
            esValido: false,
            mensajeError: 'USUARIO CON CARACTERES INCORRECTOS'   /* IDIOMA */
        }
    }

    return {
        esValido: true,
        mensajeError: ''   /* IDIOMA */
    }

}

function soloLetrasSinAcentosNumeros(texto){
    const regEx = /^[A-Za-z]{3,45}$/g
    const result = texto.match(regEx)

    return result !== null
}

export function formatoContrasenaCorrecto(contrasena){
    if(contrasena.length < 3 || contrasena.length > 45){
        return {
            esValido: false,
            mensajeError: 'CONTRASEÑA CON LONGITUD INCORRECTA'   /* IDIOMA */
        }
    }

    if(!soloLetrasSinAcentosConGuiones(contrasena)){
        return {
            esValido: false,
            mensajeError: 'CONTRASEÑA CON CARACTERES INCORRECTOS'   /* IDIOMA */
        }
    }

    return {
        esValido: true,
        mensajeError: ''
    }
} 

function soloLetrasSinAcentosConGuiones(texto){
    const regEx = /^[A-Za-z\-_0-9]{3,45}$/g
    const result = texto.match(regEx)

    return result !== null
}

export function formatoNombreRolCorrecto(nombreRol){
    if(nombreRol.length < 6 || nombreRol.length > 48){
        return {
            esValido: false,
            mensajeError: 'NOMBRE ROL CON LONGITUD INCORRECTA'
        }
    }

    if(!soloLetrasSinAcentos(nombreRol)){
        return {
            esValido: false,
            mensajeError: 'NOMBRE ROL CON CARACTERES INCORRECTOS'
        }
    }

    return {
        esValido: true,
        mensajeError: ''
    }
}

function soloLetrasSinAcentos(nombreRol){
    const regEx = /^[A-Za-z]{6,48}$/g
    const result = nombreRol.match(regEx)

    return result !== null
}

export function formatoDescripcionRolCorrecto(descripcionRol){
    if(descripcionRol.length < 20 || descripcionRol.length > 200){
        return {
            esValido: false,
            mensajeError: 'DESCRIPCIÓN ROL CON LONGITUD INCORRECTA'
        }
    }

    if(caracteresExluidosDescripcion(descripcionRol)){
        return {
            esValido: false,
            mensajeError: 'DESCRIPCIÓN ROL CON CARACTERES INCORRECTOS'
        }
    }

    return {
        esValido: true,
        mensajeError: ''
    }
}

function caracteresExluidosDescripcion(descripcionRol){
    const regEx = /[<>=$#{}[]]*/g
    const result = descripcionRol.match(regEx)

    return result !== null
}

export function comprobarFormularioPersona(datosPersona, claseFormulario){
    //comprobar que todos los datos de persona son correctos
    //posibles valores para claseFormulario: insertarPersona, buscarPersona, editarPersona, eliminarPersona, detallePersona

    if(claseFormulario === 'buscarPersona'){
        
    }else if(claseFormulario === 'eliminarPersona'){
        //si compruebo los datos y no son correctos, no me dejaria borrarlo
    
    }else{
        const comprobacionDni = formatoDniCorrecto(datosPersona.dniInput)
        if(!comprobacionDni.esValido){
            return comprobacionDni
        }

        const comprobacionNombre = formatoNombreCorrecto(datosPersona.nombreInput)
        if(!comprobacionNombre.esValido){
            return comprobacionNombre
        }
        const comprobacionApellidos = formatoApellidosCorrecto(datosPersona.apellidosInput)
        if(!comprobacionApellidos.esValido){
            return comprobacionApellidos
        }

        const comprobacionfecha = formatoFechaCorrecta(datosPersona.fechaInput)
        if(!comprobacionfecha.esValido){
            return comprobacionfecha
        }

        const comprobacionDireccion = formatoDireccionCorrecta(datosPersona.direccionInput)
        if(!comprobacionDireccion.esValido){
            return comprobacionDireccion
        }

        const comprobacionTelefono = formatoTelefonoCorrecto(datosPersona.telefonoInput)
        if(!comprobacionTelefono.esValido){
            return comprobacionTelefono
        }

        const comprobacionEmail = formatoEmailCorrecto(datosPersona.emailInput)
        if(!comprobacionEmail.esValido){
            return comprobacionEmail
        }


    }
    
    return {
        esValido: true,
        mensajeError: '' //con idioma
    }
}

export function comprobarFormularioUsuario(datosUsuario, claseFormulario){
    console.log(datosUsuario, claseFormulario)
    if(claseFormulario === 'buscarUsuario'){
        
    }else if(claseFormulario === 'eliminarUsuario'){
        //si compruebo los datos y no son correctos, no me dejaria borrarlo
    
    }else{
        const comprobacionDni = formatoDniCorrecto(datosUsuario.dniInput)
        console.log(comprobacionDni)
        if(!comprobacionDni.esValido){
            return comprobacionDni
        }
        const comprobacionUsuario = formatoUsuarioCorrecto(datosUsuario.usuarioInput)
        if(!comprobacionUsuario.esValido){
            return comprobacionUsuario
        }
        const comprobacionContrasena = formatoContrasenaCorrecto(datosUsuario.contrasenaInput)
        if(!comprobacionContrasena.esValido){
            return comprobacionContrasena
        }
    }
    return {
        esValido: true,
        mensajeError: ''
    }
}

export function comprobarFormularioRol(datosRol, claseFormulario){
    console.log(datosRol, claseFormulario)
    if(claseFormulario === 'buscarRol'){
        
    }else if(claseFormulario === 'eliminarRol'){
        //si compruebo los datos y no son correctos, no me dejaria borrarlo
    
    }else{
        const comprobacionNombreRol = formatoNombreRolCorrecto(datosRol.nombreRolInput)
        console.log(comprobacionNombreRol)
        if(!comprobacionNombreRol.esValido){
            return comprobacionNombreRol
        }
        const comprobacionDescripcionRol = formatoDescripcionRolCorrecto(datosRol.descripcionRolInput)
        if(!comprobacionDescripcionRol.esValido){
            return comprobacionDescripcionRol
        }
    }
    return {
        esValido: true,
        mensajeError: ''
    }
}