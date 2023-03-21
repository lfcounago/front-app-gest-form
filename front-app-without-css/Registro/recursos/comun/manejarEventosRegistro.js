import { comprobarFormularioPersona, comprobarFormularioUsuario } from "../comun/comprobacionFormato.js"
import { getFromBack } from "../comun/getters.js"
import { encriptarpassword } from "../comun/md5.js"

export async function manejarSubmitRegistro(e){
    e.preventDefault()
    const datosRegistro = Object.fromEntries(new FormData(e.target))
    console.log(datosRegistro)

    //comprobar datos de persona y usuario
    //crear persona
    //crear usuario

    const {esValido: personaValida, mensajeError: mensajePersonaErronea} = comprobarFormularioPersona(datosRegistro, 'insertarPersona')

    if(!personaValida){
        //mostrar mensaje error persona
    }else{
        if(datosRegistro.contrasenaInput1 !== datosRegistro.contrasenaInput2){
            //mostrar mensaje error
        }else{
            datosRegistro.contrasenaInput = datosRegistro.contrasenaInput1
            const {esValido: usuarioValido, mensajeError: mensajeUsuarioErroneo} = comprobarFormularioUsuario(datosRegistro, 'insertarUsuario')

            if(!usuarioValido){
                //mostrar mensaje error usuario
            }else{
                const dataRequest = {
                    controlador: 'AUTH',
                    action: 'REGISTRAR',
                    dni: datosRegistro.dniInput,
                    nombre_persona: datosRegistro.nombreInput,
                    apellidos_persona: datosRegistro.apellidosInput,
                    fechaNacimiento_persona: datosRegistro.fechaInput,
                    direccion_persona: datosRegistro.direccionInput,
                    telefono_persona: datosRegistro.telefonoInput,
                    email_persona: datosRegistro.emailInput,
                    foto_persona: datosRegistro.fotoInput.name,
                    usuario: datosRegistro.usuarioInput,
                    contrasena: encriptarpassword(datosRegistro.contrasenaInput)
                }
                //habria que mandar el rol pero no lo va a tener el cuenta
    
                const response = await getFromBack(dataRequest)
                console.log(response)
                if(response.code === 'REGISTRAR_OK'){
                    //mostrar mensaje registro completado 
                }else{
                    //mostrar mensaje error
                }
            }

        }
    }
}


/* dni=99
nombre_persona=Nombre9
apellidos_persona=Apellidos9
fechaNacimiento_persona=09/09/9999
direccion_persona=Direccion9
telefono_persona=999999999
email_persona=99@99.99
foto_persona=Foto9.png
usuario=usuario99
contrasena=contrasena99
controlador=AUTH
action=REGISTRAR */