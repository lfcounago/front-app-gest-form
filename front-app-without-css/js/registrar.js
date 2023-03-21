function comprobar_form_login(){
	if (comprobar_form_persona_add() && comprobar_form_usuario_add() && comprobar_contrasena_repetida()){
		encriptarpassword();
		return true;
	}
	else{
		return false;
	}
	
}

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

}

//Función ajax con promesas
function registroAjaxPromesa(){

	insertacampo('id_form_registro','controlador', 'AUTH');
	insertacampo('id_form_registro','action', 'LOGIN');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_registro").serialize(),
		}).done(res => {
			if (res.code != 'LOGIN_OK') {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeFAIL(jqXHR.status);
		});
	});
}

async function registro() {
	
	var idioma = getCookie('lang');

	await registroAjaxPromesa()
		.then((res) => {
			setCookie('token', res.resource);
			setCookie('registroSistema', document.getElementById("id_registro").value);
			window.location.href = "menu.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
	    	//eliminarcampo('controlador');
	    	//eliminarcampo('action');
        	setLang(idioma);
		});
	
}

function peticionADDregistroBack(){

	alert('peticion a back add');
	document.getElementById('id_form_registro').submit();
	
}

function add_registro(){

	if (comprobar_form_registro_add()){
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


	setLang(); 

    // se muestra el formulario
	document.getElementById('id_form_registro').style.display = 'block';

}

//Función ajax con promesas
function registroADDAjaxPromesa(){

	insertacampo('id_form_registro','controlador', 'registro');
	insertacampo('id_form_registro','action', 'ADD');
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_registro").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function ADDregistroajax() {
	
	var idioma = getCookie('lang');

	await registroADDAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'add_registro_OK';
			};
			devolverregistrosajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionregistro.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_registro').reset();
		resetearformregistro();
		//document.getElementById('id_imagen_enviar_form').remove(); 
}