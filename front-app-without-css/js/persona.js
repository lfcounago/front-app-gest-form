function comprobar_form_persona_add(){
	alert('entro en comprobar_form_persona_add');

	if (comprobar_dni() && comprobar_nombre() && comprobar_apellido() && comprobar_fecha_nacimiento() && comprobar_email() && comprobar_direccion() && comprobar_telefono()){
		return true;
	}
	else{
		return false;
	}
}

function comprobar_form_persona_search(){
	alert('entro en comprobar_form_persona_search');

	if (comprobar_dni_search() && comprobar_nombre_persona_search() && comprobar_apellido_persona_search() && comprobar_direccion_persona_search() && comprobar_telefono() && comprobar_email_search()){
		return true;
	}
	else{
		return false;
	}
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

function comprobar_nombre_persona_search() {
	
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

function comprobar_apellido_persona_search() {

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

function comprobar_email_search() {

	if (!size_maximo('email_persona', 45)) {
		mensajeKO('email_persona', 'Tamaño email demasiado largo (max 45 caracteres)');
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

function comprobar_direccion_persona_search(){

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

function comprobar_foto() {
	
	if (!size_minimo('foto_persona', 6)) {
		mensajeKO('foto_persona', 'Tamaño foto demasiado corto (min 3 caracteres)');
		return false;
	}
	if (!size_maximo('foto_persona', 40)) {
		mensajeKO('foto_persona', 'Tamaño foto demasiado largo (max 30 caracteres)');
		return false;
	}
	if(/.jpg$/.test(foto_persona) || /.png$/.test(foto_persona)){
		mensajeKO('foto_persona', 'Formato incorrecto de la imagen')
	}

	mensajeOK('foto_persona');
	return true;

}

function comprobar_foto_search() {
	
	if (!size_maximo('foto_persona', 40)) {
		mensajeKO('foto_persona', 'Tamaño foto demasiado largo (max 30 caracteres)');
		return false;
	}

	mensajeOK('foto_persona');
	return true;

}

function peticionADDpersonaBack(){

	alert('peticion a back add');
	document.getElementById('id_form_persona').submit();
	
}

function peticionEDITpersonaBack(){

	alert('peticion a back edit');
	document.getElementById('id_form_persona').submit();
	
}

function peticionDELETEpersonaBack(){

	alert('peticion a back delete');
	document.getElementById('id_form_persona').submit();
	
}

// devolverpersonas()
// funcion creada para devolver un array como el que recogeriamos de back al solicitar el contenido de la entidad persona

function devolverpersonas(){

	datospersonas = new Array();
/* 	controlrol = 0; */
	dnibase = '11111111';
	numeropersonas = 2;
	
	for (let i=0;i<numeropersonas;i++){
		
		persona = new Array();
		dnibase = String(Number(dnibase)+Number(23));
		persona['dni'] = dnibase + 'A';
		persona['nombre_persona'] = 'nombre persona'+i;
		persona['apellidos_persona'] = 'apellidos persona'+i;
		persona['fechaNacimiento_persona'] = '01/'+'01/'+String(Number(2000)+Number(i));
		persona['direccion_persona'] = 'Calle de la persona Nº '+i+' 32004 Ourense';
		persona['telefono_persona'] = 988387000+i;
		persona['email_persona'] = 'persona'+i+'@alumnos.uvigo.es';
		persona['foto_persona'] = './fotos/foto'+i+'.png';

		datospersonas[i] = persona;
	}

	return datospersonas;

}

function add_persona(){

	if (comprobar_form_persona_add()){
		peticionADDpersonaBack();
	}

}

function edit_persona(){

	if (comprobar_form_persona_add()){
		EDITpersonaajax();
	}

}

function delete_persona(){

	peticionDELETEpersonaBack();

}

function search_persona(){

	if (comprobar_form_persona_search()){
		return true;
	}
}

function resetearformpersona(){

	// eliminar el select
/* 	selectviejorol = document.getElementById('id_id_rol');
	if (!(selectviejorol === null)){
		document.getElementById('caja_select_rol').removeChild(selectviejorol);
	} */

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

	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_persona").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	$("#controlador").remove();
	$("#action").remove();

	// se pone invisible el formulario
	$("#id_caja_formulario_persona").attr('style', 'display: none');

	setLang();

}

function crearformADDpersona(){

	// resetear el formulario
	resetearformpersona();

	// se rellena el action del formulario
	document.getElementById('id_form_persona').action = 'javascript:ADDpersonaajax()';
	document.getElementById('id_form_persona').onblur = add_persona;
	
	// se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_dni').onblur = comprobar_dni;
	document.getElementById('id_dni').value = '';

	// se coloca el onblur del usuario y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
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

	document.getElementById('id_foto_persona').onblur = comprobar_foto;
	document.getElementById('id_foto_persona').value = '';

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_persona").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_persona";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/add4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 

	// se muestra el formulario
	document.getElementById('id_caja_formulario_persona').style.display = 'block';

}

function personaADDAjaxPromesa(){

	insertacampo('id_form_persona','controlador', 'persona');
	insertacampo('id_form_persona','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_persona").serialize(),
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

async function ADDpersonaajax() {
	
	var idioma = getCookie('lang');

	await personaADDAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'add_persona_OK';
			};
			devolverpersonasajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformpersona();
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformEDITpersona(dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona,telefono_persona, email_persona, foto_persona){

	// resetear al formulario
	resetearformpersona();
	
	// se crea el action del formulario 
	$("#id_form_persona").attr('action','javascript:EDITpersonaajax()');
	$("#id_form_persona").on('submit', edit_persona);
	
	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_dni").attr('readonly',true);
	$("#id_dni").blur(comprobar_dni);
	$("#id_dni").val(dni);

	$("#id_nombre_persona").on('blur',comprobar_nombre);
	$("#id_nombre_persona").val(nombre_persona);

	$("#id_apellido_persona").on('blur',comprobar_apellido);
	$("#id_apellido_persona").val(apellidos_persona);

	$("#id_fechaNacimiento_persona").on('blur',comprobar_fecha_nacimiento);
	$("#id_fechaNacimiento_persona").val(fechaNacimiento_persona);

	$("#id_direccion_persona").on('blur',comprobar_direccion);
	$("#id_direccion_persona").val(direccion_persona);

	$("#id_telefono_persona").on('blur',comprobar_telefono);
	$("#id_telefono_persona").val(telefono_persona);

	$("#id_email_persona").on('blur',comprobar_email);
	$("#id_email_persona").val(email_persona);

	$("#id_foto_persona").on('blur',comprobar_foto);
	$("#id_foto_persona").val(foto_persona);


	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_persona").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_persona";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/edit4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 

	// se muestra el formulario
	$("#id_caja_formulario_persona").attr('style', 'display: block');
}

function personaEDITAjaxPromesa(){

	insertacampo('id_form_persona','controlador', 'persona');
	insertacampo('id_form_persona','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_persona").serialize(),
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

async function EDITpersonaajax() {
	
	var idioma = getCookie('lang');

	await personaEDITAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'edit_persona_OK';
			};
			devolverpersonasajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformpersona();
		document.getElementById('controlador')
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformDELETEpersona(dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona,telefono_persona, email_persona, foto_persona){

	resetearformpersona();
	
	$("#id_form_persona").attr('action','javascript:DELETEpersonaajax()');
	
	$("#id_dni").attr('readonly','true')
	$("#id_dni").val(dni);

	$("#id_nombre_persona").attr('readonly','true')
	$("#id_nombre_persona").val(nombre_persona);

	$("#id_apellido_persona").attr('readonly','true')
	$("#id_apellido_persona").val(apellidos_persona);

	$("#id_fechaNacimiento_persona").attr('readonly','true')
	$("#id_fechaNacimiento_persona").val(fechaNacimiento_persona);

	$("#id_direccion_persona").attr('readonly','true')
	$("#id_direccion_persona").val(direccion_persona);

	$("#id_telefono_persona").attr('readonly','true')
	$("#id_telefono_persona").val(telefono_persona);

	$("#id_email_persona").attr('readonly','true')
	$("#id_email_persona").val(email_persona);

	$("#id_foto_persona").attr('readonly','true')
	$("#id_foto_persona").val(foto_persona);

/* 	pintarselectrolesAjax(true, false, rol); */

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_persona").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_persona";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/delete4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 
	
	
	$("#id_caja_formulario_persona").attr('style', 'display: block');
}

function personaDELETEAjaxPromesa(){

	insertacampo('id_form_persona','controlador', 'persona');
	insertacampo('id_form_persona','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_persona").serialize(),
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

async function DELETEpersonaajax() {
	
	var idioma = getCookie('lang');

	await personaDELETEAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'delete_persona_OK';
			}
			mensajeactionOK(res.code);
			devolverpersonasajax();
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformpersona();
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformSEARCHpersona(){

	// reseteo el formulario
	resetearformpersona();
	
	// creo la accion para el formulario y el onsubmit
	$("#id_form_persona").attr('action','javascript:SEARCHpersonaAjax()');
	$("#id_form_persona").on('submit', search_persona);
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_dni").attr('readonly', false);
	$("#id_dni").blur(comprobar_dni_search);

	// pongo el campo de usuario editable y le asocio la funcion para el aadd
	$("#id_nombre_persona").attr('readonly',false)
	$("#id_nombre_persona").blur(comprobar_nombre_persona_search);

	$("#id_apellido_persona").attr('readonly',false)
	$("#id_apellido_persona").blur(comprobar_apellido_persona_search);

	$("#id_fechaNacimiento_persona").attr('readonly',false)
	$("#id_fechaNacimiento_persona").blur(comprobar_fecha_nacimiento);

	$("#id_direccion_persona").attr('readonly',false)
	$("#id_direccion_persona").blur(comprobar_direccion_persona_search);

	$("#id_telefono_persona").attr('readonly',false)
	$("#id_telefono_persona").blur(comprobar_telefono);

	$("#id_email_persona").attr('readonly',false)
	$("#id_email_persona").blur(comprobar_email_search);

	$("#id_foto_persona").attr('readonly',false)
	$("#id_foto_persona").blur(comprobar_foto_search);

	//eliminamos la imagen que utilizamos en las otras acciones para poder hacer un submit con el formulario
	$("#id_imagen_enviar_form").remove();

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_persona").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_persona";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 

	// se pone visible el formulario
	$("#id_caja_formulario_persona").attr('style', 'display: block');
}

//Función ajax con promesas
function personaSEARCHAjaxPromesa(){

	insertacampo('id_form_persona','controlador', 'persona');
	insertacampo('id_form_persona','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_persona").serialize(),
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

async function SEARCHpersonaAjax() {
	
	var idioma = getCookie('lang');

	await personaSEARCHAjaxPromesa()
		.then((res) => {
			getListPersonas(res.resource);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformpersona();
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformSHOWCURRENTpersona(dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona){

	// reseteo el formulario
	resetearformpersona();
	
	$("#id_form_persona").attr('action','javascript:cerrarSHOWCURRENT()');

	$("#id_dni").attr('readonly','true')
	$("#id_dni").val(dni);

	$("#id_nombre_persona").attr('readonly','true')
	$("#id_nombre_persona").val(nombre_persona);

	$("#id_apellido_persona").attr('readonly','true')
	$("#id_apellido_persona").val(apellidos_persona);

	$("#id_fechaNacimiento_persona").attr('readonly','true')
	$("#id_fechaNacimiento_persona").val(fechaNacimiento_persona);

	$("#id_direccion_persona").attr('readonly','true')
	$("#id_direccion_persona").val(direccion_persona);

	$("#id_telefono_persona").attr('readonly','true')
	$("#id_telefono_persona").val(telefono_persona);

	$("#id_email_persona").attr('readonly','true')
	$("#id_email_persona").val(email_persona);

	$("#id_foto_persona").attr('readonly','true')
	$("#id_foto_persona").val(foto_persona);

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_persona").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_persona";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/detail4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 

	$("#id_caja_formulario_persona").attr('style', 'display: block');
	
	
}

function cerrarSHOWCURRENT(){
	$("#id_caja_formulario_persona").attr('style', 'display: none');
	$("#id_imagen_enviar_form").attr('style', 'display: none');
}

//Función ajax con promesas
function devolverpersonasAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'persona');
	insertacampo('form_generico','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#form_generico").serialize(),
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

async function devolverpersonasajax() {
	
	var idioma = getCookie('lang');

	await devolverpersonasAjaxPromesa()
		.then((res) => {
			
			getListPersonas(res.resource);
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}

function getListPersonas(listapersonas){

	$("#id_datospersonas").html('');

	for (let persona of listapersonas){

		datosfila = "'"+persona.dni+"',"
		+"'"+persona.nombre_persona+"',"
		+"'"+persona.apellidos_persona+"',"
		+"'"+persona.fechaNacimiento_persona+"',"
		+"'"+persona.direccion_persona+"',"
		+"'"+persona.telefono_persona+"',"
		+"'"+persona.email_persona+"',"
		+"'"+persona.foto_persona
		+"'";

		lineatabla = '<tr><td>'+persona['dni']+'</td><td>'+persona['nombre_persona']+'</td><td>'+persona['apellidos_persona']+'</td><td>'+persona['fechaNacimiento_persona']+'</td><td>'+persona['direccion_persona']+'</td><td>'+persona['telefono_persona']+'</td><td>'+persona['email_persona']+'</td><td>'+persona['foto_persona']+"</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITpersona('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEpersona('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTpersona('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datospersonas").append(lineatabla);
	}

}