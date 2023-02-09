function comprobar_form_registro(){
	if(comprobar_dni()&&comprobar_nombre()&&comprobar_apellido()&&comprobar_fecha_nacimiento()&&comprobar_direccion()&&comprobar_telefono()&&
	comprobar_email()&&comprobar_usuario()&&comprobar_contrasena()){
		encriptarpassword();
		return true;
	}else{
		return false;
	}
}
/* 
function comprobar_usuario(){

	if (!size_minimo('id_usuario',3)){
		mensajeKO('id_usuario', 'usuario_corto_ko');
		return false;
	}
	if (!size_maximo('id_usuario',15)){
		mensajeKO('id_usuario', 'usuario_largo_ko');
		return false;
	}
	if (!letrassinacentoynumeros('id_usuario')){
		mensajeKO('id_usuario', 'usuario_formato_ko');
		return false;
	}

	mensajeOK('id_usuario');
	return true;

}

function comprobar_contrasena(){

	if (!size_minimo('id_contrasena',3)){
		mensajeKO('id_contrasena', 'contrasena_corto_ko');
		return false;
	}
	if (!size_maximo('id_contrasena',15)){
		mensajeKO('id_contrasena', 'contrasena_largo_ko');
		return false;
	}
	if (!letrassinacentoynumeros('id_contrasena')){
		mensajeKO('id_contrasena', 'contrasena_formato_ko');
		return false;
	}

	mensajeOK('id_contrasena');
	return true;

}

function comprobar_contrasena_repetida(){

	if (document.getElementById('id_contrasena') != document.getElementById('id_contrasena_repetida')){
		mensajeKO('id_contrasena', 'contrasena_ko');
		return false;
	}

	mensajeOK('id_contrasena');
	return true;

}

function comprobar_dni(){
	return comprobar_DNI;
}

function comprobar_dni_search(){
	if (!size_maximo('dni', 9)) {
		mensajeKO('dni', 'Tamaño DNI demasiado largo (max 9 caracteres)');
		return false;
	}else{
		return true;
	}
}

function comprobar_nombre() {
	
	if (!size_minimo('nombre_persona', 3)) {
		mensajeKO('nombre_persona', 'Tamaño nombre demasiado corto (min 3 caracteres)');
		return false;
	}
	if (!size_maximo('nombre_persona', 30)) {
		mensajeKO('nombre_persona', 'Tamaño nombre demasiado largo (max 30 caracteres)');
		return false;
	}

	mensajeOK('nombre_persona');
	return true;

}

function comprobar_apellido() {

	if (!size_minimo('apellido_persona', 4)) {
		mensajeKO('apellido_persona', 'Tamaño apellido demasiado corto (min 4 caracteres)');
		return false;
	}
	if (!size_maximo('apellido_persona', 60)) {
		mensajeKO('apellido_persona', 'Tamaño apellido demasiado largo (max 60 caracteres)');
		return false;
	}

	mensajeOK('apellido_persona');
	return true;

}

function comprobar_fecha_nacimiento() {

	if (!fecha_real('fecha_nacimiento_persona')) {
		mensajeKO('fecha_nacimiento_persona', 'La fecha no es real');
		return false;
	}
	if (!fecha_menor_hoy('fecha_nacimiento_persona')) {
		mensajeKO('fecha_nacimiento_persona', 'Fecha mayor al día actual');
		return false;
	}

}

function fecha_real(idElemento) {

	var fechaf = idElemento.split("/");
      var day = fechaf[0];
      var month = fechaf[1];
      var year = fechaf[2];
      var date = new Date(year,month,'0');
      if((day-0)>(date.getDate()-0)){
            return false;
      }
      return true;

}

function fecha_menor_hoy(idElemento) {

	var x = new Date();
	var fecha = idElemento.split("/");
	x.setFullYear(fecha[2], fecha[1] - 1, fecha[0]);
	var today = new Date();

	if (x >= today)
		return false;
	else
		return true;

}

function comprobar_email() {

	if (!size_minimo('email_persona', 6)) {
		mensajeKO('email_persona', 'Tamaño email demasiado corto (min 6 caracteres)');
		return false;
	}
	if (!size_maximo('email_persona', 45)) {
		mensajeKO('email_persona', 'Tamaño email demasiado largo (max 45 caracteres)');
		return false;
	}
	if (!formato_email_incorrecto('email_persona')) {
		mensajeKO('email_persona', 'Formato de email incorrecto (nombre@dominio.com)');
		return false;
	}

}

function formato_email_incorrecto(idElemento) {

	re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if (!re.exec(idElemento)) {
		return false;
	}
	else return true;

}

function comprobar_direccion(){

	if (!size_minimo('direccion_persona', 6)) {
		mensajeKO('direccion_persona', 'Dirección demasiado corta (min 6 caracteres)');
		return false;
	}
	if (!size_maximo('direccion_persona', 45)) {
		mensajeKO('direccion_persona', 'Dirección demasiado larga (max 90 caracteres)');
		return false;
	}

}

function comprobar_telefono(){

	if (!size_maximo('telefono_persona', 9)) {
		mensajeKO('telefono_persona', 'Teléfono demasiado largo (max 9 caracteres)');
		return false;
	}

}

function formato_telefono(idElemento) {

    var telef = new RegExp("^(\\+34|0034|34)?[6789]\\d{8}$");
    if (telef.test(idElemento)) {
        return true;
    } else {
        return false;
    }

} */

function peticionADDregistroBack(){

	alert('peticion a back add');
	document.getElementById('id_form_registro').submit();
	
}

function add_registro(){

	if (comprobar_form_registro()){
		peticionADDregistroBack();
	}

}

function resetearformregistro(){

	// quitar el readonly de los atributos
	$("#id_dni").attr('readonly',false);
	$("#id_dni").val('');
	$("#id_dni").on('blur',false);
	$("#id_nombre_persona").attr('readonly',false);
	$("#id_nombre_persona").val('');
	$("#id_apellido_persona").val('');
	$("#id_apellido_persona").attr('readonly',false);
	$("#id_fechaNacimiento_persona").attr('readonly',false);
	$("#id_fechaNacimiento_persona").val('');
	$("#id_direccion_persona").attr('readonly',false);
	$("#id_direccion_persona").val('');
	$("#id_telefono_persona").attr('readonly',false);
	$("#id_telefono_persona").val('');
	$("#id_email_persona").attr('readonly',false);
	$("#id_email_persona").val('');
	$("#id_foto_persona").attr('readonly',false);
	$("#id_foto_persona").val('');
	$("#id_usuario").attr('readonly',false);
    $("#id_usuario").val('');
	$("#id_contrasena").attr('readonly',false);
    $("#id_contrasena").val('');
	$("#id_contrasena_repetida").attr('readonly',false);
    $("#id_contrasena_repetida").val('');
	$("#id_rol").attr('readonly',false);
	$("#id_rol").val('');

	setLang();

}

function crearformADDregistro(){

	// resetear el formulario
	resetearformregistro();

	// se rellena el action del formulario
	document.getElementById('id_form_registro').action = 'javascript:ADDregistroajax()';
	document.getElementById('id_form_registro').onblur = add_registro;


	document.getElementById('id_dni').onblur = comprobar_dni;
	document.getElementById('id_dni').value = '';

	document.getElementById('id_nombre_persona').onblur = comprobar_nombre;
	document.getElementById('id_nombre_persona').value = '';

	document.getElementById('id_apellido_persona').onblur = comprobar_apellido;
	document.getElementById('id_apellido_persona').value = '';

	document.getElementById('id_fechaNacimiento_persona').onblur = comprobar_fecha_nacimiento;
	document.getElementById('id_fechaNacimiento_persona').value = '';

	document.getElementById('id_direccion_persona').onblur = comprobar_direccion;
	document.getElementById('id_direccion_persona').value = '';

	document.getElementById('id_telefono_persona').onblur = comprobar_telefono;
	document.getElementById('id_telefono_persona').value = '';

	document.getElementById('id_email_persona').onblur = comprobar_email;
	document.getElementById('id_email_persona').value = '';

	document.getElementById('id_foto_persona').onblur = true;
	document.getElementById('id_foto_persona').value = '';

	document.getElementById('id_usuario').onblur = comprobar_usuario;
	document.getElementById('id_usuario').value = '';

	document.getElementById('id_contrasena').onblur = comprobar_contrasena;
/* 	document.getElementById('id_contrasena').action = 'javascript:encriptarpassword()'; */
	document.getElementById('id_contrasena').value = '';

	pintarselectrolesAjax(false, false,'');

	setLang(); 

    // se muestra el formulario
	document.getElementById('id_form_registro').style.display = 'block';

}

import { formatoApellidosCorrecto, formatoContrasenaCorrecto, formatoDireccionCorrecta, formatoDniCorrecto, formatoEmailCorrecto, formatoFechaCorrecta, formatoNombreCorrecto, formatoTelefonoCorrecto, formatoUsuarioCorrecto } from "./comun/comprobacionFormato.js"
import { crearOptionSelect } from "./comun/creacionElementosHTML.js"
import { getFromBack } from "./comun/getters.js"
import { manejarSubmitRegistro } from "./comun/manejarEventosRegistro.js"

const formularioRegistro = document.getElementById('formularioRegistro') 
const dniInput = document.getElementById('id_dni') 
const nombreInput = document.getElementById('id_nombre_persona') 
const apellidosInput = document.getElementById('id_apellido_persona') 
const fechaInput = document.getElementById('id_fechaNacimiento_persona') 
const direccionInput = document.getElementById('id_direccion_persona') 
const telefonoInput = document.getElementById('id_telefono_persona') 
const emailInput = document.getElementById('id_email_persona') 
const fotoInput = document.getElementById('id_foto_persona') 

const usuarioInput = document.getElementById('id_usuario') 
const contrasenaInput1 = document.getElementById('id_contrasena') 
const contrasenaInput2 = document.getElementById('id_contrasena2') 
const rolInput = document.getElementById('id_rol') 

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
