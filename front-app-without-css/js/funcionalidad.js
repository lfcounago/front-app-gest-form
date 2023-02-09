function comprobar_form_funcionalidad_add(){
	alert('entro en comprobar_form_funcionalidad_add');

	if (comprobar_id_funcionalidad() && comprobar_nombre_funcionalidad() && comprobar_descrip_funcionalidad()){
		return true;
	}
	else{
		return false;
	}
}

function comprobar_form_funcionalidad_search(){
	alert('entro en comprobar_form_funcionalidad_search');

	if (comprobar_id_funcionalidad_search() && comprobar_nombre_funcionalidad_search() && comprobar_descrip_funcionalidad_search()){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_id_funcionalidad()
// funcion de validacion del formato de id_funcionalidad en acciones que no son search
function comprobar_id_funcionalidad(){
	if (!size_maximo('id_funcionalidad', 4)) {
		mensajeKO('id_funcionalidad', 'Tamaño id_funcionalidad demasiado largo (max 4 caracteres)');
		return false;
	}else{
		if(!id_funcionalidad.value.match([0-9])){
			return false
		}else{
			return true;
		}
	}
}

// comprobar_id_funcionalidad_search()
// funcion de validacion del formato de id_funcionalidad
function comprobar_id_funcionalidad_search(){
	return comprobar_id_funcionalidad;
}

function comprobar_nombre_funcionalidad(){

	if (!size_minimo('id_nombre_funcionalidad',6)){
		mensajeKO('id_nombre_funcionalidad', 'nombre_funcionalidad_corto_ko');
		return false;
	}
	if (!size_maximo('id_nombre_funcionalidad',48)){
		mensajeKO('id_nombre_funcionalidad', 'nombre_funcionalidad_largo_ko');
		return false;
	}
	if (!letrassinacentoynumeros('id_nombre_funcionalidad')){
		mensajeKO('id_nombre_funcionalidad', 'nombre_funcionalidad_formato_ko');
		return false;
	}

	mensajeOK('id_nombre_funcionalidad');
	return true;

}

function comprobar_nombre_funcionalidad_search(){
	if (!size_maximo('id_nombre_funcionalidad', 48)) {
		mensajeKO('nombre_funcionalidad', 'Tamaño nombre_funcionalidad demasiado largo (max 48 caracteres)');
		return false;
	}else{
		return true;
	}
}

function comprobar_descrip_funcionalidad(){

	if (!size_minimo('id_descrip_funcionalidad',20)){
		mensajeKO('id_descrip_funcionalidad', 'descrip_funcionalidad_corto_ko');
		return false;
	}
	if (!size_maximo('id_descrip_funcionalidad',200)){
		mensajeKO('id_descrip_funcionalidad', 'descrip_funcionalidad_largo_ko');
		return false;
	}
	if (!letrassinacentoynumeros('id_descrip_funcionalidad')){
		mensajeKO('id_descrip_funcionalidad', 'descrip_funcionalidad_formato_ko');
		return false;
	}

	mensajeOK('id_descrip_funcionalidad');
	return true;

}

function comprobar_descrip_funcionalidad_search(){
	if (!size_maximo('id_descrip_funcionalidad', 48)) {
		mensajeKO('descrip_funcionalidad', 'Tamaño descrip_funcionalidad demasiado largo (max 200 caracteres)');
		return false;
	}else{
		return true;
	}
}

function peticionADDfuncionalidadBack(){

	alert('peticion a back add');
	document.getElementById('id_form_funcionalidad').submit();
	
}

function peticionEDITfuncionalidadBack(){

	alert('peticion a back edit');
	document.getElementById('id_form_funcionalidad').submit();
	
}

function peticionDELETEfuncionalidadBack(){

	alert('peticion a back delete');
	document.getElementById('id_form_funcionalidad').submit();
	
}

function devolverfuncionalidad(){

	datosfuncionalidad = new Array();
	dnibase = '11111111';
	numerofuncionalidad = 3;

	for (let i=0;i<numerofuncionalidad;i++){
		
		funcionalidad = new Array();
		switch(controlfuncionalidad){
			case 0:
				rol['id_funcionalidad'] = controlfuncionalidad;
				rol['nombre_funcionalidad'] = 'admin';
				rol['descrip_funcionalidad'] = 'descripcion admin';
				controlfuncionalidad++;
				break;
			case 1:
				rol['id_funcionalidad'] = controlfuncionalidad;
				rol['nombre_funcionalidad'] = 'responsable';
				rol['descrip_funcionalidad'] = 'descripcion responsable';
				controlfuncionalidad++;
				break;
			case 2:
				rol['id_funcionalidad'] = controlfuncionalidad;
				rol['nombre_funcionalidad'] = 'coordinador';
				rol['descrip_funcionalidad'] = 'descripcion coordinador';
				controlfuncionalidad = 0;
				break;
			default:
				break;

		}

		funcionalidad = new Array();
		funcionalidad['id_funcionalidad'] = funcionalidad;
		funcionalidad['nombre_funcionalidad'] = nombre_funcionalidad;
		funcionalidad['descrip_funcionalidad'] = descrip_funcionalidad;


		datosfuncionalidad[i] = funcionalidad;
	}

	return datosfuncionalidad;

}

function add_funcionalidad(){

	if (comprobar_form_funcionalidad_add()){
		peticionADDfuncionalidadBack();
	}

}

function edit_funcionalidad(){

	if (comprobar_form_funcionalidad_add()){
		EDITfuncionalidadajax();
	}

}

function delete_funcionalidad(){

	peticionDELETEfuncionalidadBack();
}

function search_funcionalidad(){

	if (comprobar_form_funcionalidad_search()){
		return true;
	}

}

function resetearformfuncionalidad(){

	// eliminar el select
/* 	selectviejorol = document.getElementById('id_id_rol');
	if (!(selectviejorol === null)){
		document.getElementById('caja_select_rol').removeChild(selectviejorol);
	} */

	// quitar el readonly de los atributos
	$("#id_funcionalidad").attr('readonly',false);
	$("#id_funcionalidad").val('');
	$("#id_funcionalidad").on('blur',false);
	$("#id_nombre_funcionalidad").attr('readonly',false);
	$("#id_nombre_funcionalidad").val('');
	$("#id_descrip_funcionalidad").val('');
	$("#id_descrip_funcionalidad").attr('readonly',false);


	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_funcionalidad").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_funcionalidadsubmit").remove();

	$("#controlador").remove();
	$("#action").remove();

	// se pone invisible el formulario
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: none');

	setLang();

}

function crearformADDfuncionalidad(){

	// resetear el formulario
	resetearformfuncionalidad();

	// se rellena el action del formulario
	document.getElementById('id_form_funcionalidad').action = 'javascript:ADDfuncionalidadajax()';
	document.getElementById('id_form_funcionalidad').onblur = add_funcionalidad;
	
	// se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_funcionalidad').onblur = comprobar_id_funcionalidad;
	document.getElementById('id_funcionalidad').value = '';

	// se coloca el onblur del usuario y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_nombre_funcionalidad').onblur = comprobar_nombre_funcionalidad;
	document.getElementById('id_nombre_funcionalidad').value = '';

	document.getElementById('id_descrip_funcionalidad').onblur = comprobar_descrip_funcionalidad;
	document.getElementById('id_descrip_funcionalidad').value = '';

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_funcionalidadsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_funcionalidad").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_funcionalidad";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/add4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_funcionalidadsubmit").append(botonsubmit);	

	setLang(); 

	// se muestra el formulario
	document.getElementById('id_caja_formulario_funcionalidad').style.display = 'block';

}

function funcionalidadADDAjaxPromesa(){

	insertacampo('id_form_funcionalidad','controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_funcionalidad").serialize(),
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

async function ADDfuncionalidadajax() {
	
	var idioma = getCookie('lang');

	await funcionalidadADDAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'add_funcionalidad_OK';
			};
			devolverfuncionalidadajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformfuncionalidad();
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformEDITfuncionalidad(id_funcionalidad, nombre_funcionalidad, descrip_funcionalidad){

	// resetear al formulario
	resetearformfuncionalidad();
	
	// se crea el action del formulario 
	$("#id_form_funcionalidad").attr('action','javascript:EDITfuncionalidadajax()');
	$("#id_form_funcionalidad").on('submit', edit_funcionalidad);
	
	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_funcionalidad").attr('readonly',true);
	$("#id_funcionalidad").blur(comprobar_id_funcionalidad);
	$("#id_funcionalidad").val(id_funcionalidad);

	$("#id_nombre_funcionalidad").on('blur',comprobar_nombre_funcionalidad);
	$("#id_nombre_funcionalidad").val(nombre_funcionalidad);

	$("#id_descrip_funcionalidad").on('blur',comprobar_descrip_funcionalidad);
	$("#id_descrip_funcionalidad").val(descrip_funcionalidad);

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_funcionalidadsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_funcionalidad").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_funcionalidad";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/edit4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_funcionalidadsubmit").append(botonsubmit);	

	setLang(); 

	// se muestra el formulario
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
}

function funcionalidadEDITAjaxPromesa(){

	insertacampo('id_form_funcionalidad','controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_funcionalidad").serialize(),
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

async function EDITfuncionalidadajax() {
	
	var idioma = getCookie('lang');

	await funcionalidadEDITAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'edit_funcionalidad_OK';
			};
			devolverfuncionalidadsajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformfuncionalidad();
		//document.getElementById('controlador');
		window.location.reload(true);
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformDELETEfuncionalidad(id_funcionalidad, nombre_funcionalidad, descrip_funcionalidad){

	resetearformfuncionalidad();
	
	$("#id_form_funcionalidad").attr('action','javascript:DELETEfuncionalidadajax()');
	
	$("#id_funcionalidad").attr('readonly','true')
	$("#id_funcionalidad").val(id_funcionalidad);

	$("#id_nombre_funcionalidad").attr('readonly','true')
	$("#id_nombre_funcionalidad").val(nombre_funcionalidad);

	$("#id_descrip_funcionalidad").attr('readonly','true')
	$("#id_descrip_funcionalidad").val(descrip_funcionalidad);

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_funcionalidadsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_funcionalidad").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_funcionalidad";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/delete4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_funcionalidadsubmit").append(botonsubmit);	

	setLang();
	
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
}

function funcionalidadDELETEAjaxPromesa(){

	insertacampo('id_form_funcionalidad','controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_funcionalidad").serialize(),
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

async function DELETEfuncionalidadajax() {
	
	var idioma = getCookie('lang');

	await funcionalidadDELETEAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'delete_funcionalidad_OK';
			}
			mensajeactionOK(res.code);
			devolverfuncionalidadsajax();
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformfuncionalidad();
		window.location.reload(true);
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformSEARCHfuncionalidad(){

	// reseteo el formulario
	resetearformfuncionalidad();
	
	// creo la funcionalidad para el formulario y el onsubmit
	$("#id_form_funcionalidad").attr('action','javascript:SEARCHfuncionalidadAjax()');
	$("#id_form_funcionalidad").on('submit', search_funcionalidad);
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_funcionalidad").attr('readonly', false);
	$("#id_funcionalidad").blur(comprobar_id_funcionalidad_search);

	// pongo el campo de usuario editable y le asocio la funcion para el aadd
	$("#id_nombre_funcionalidad").attr('readonly',false)
	$("#id_nombre_funcionalidad").blur(comprobar_nombre_funcionalidad_search);

	$("#id_descrip_funcionalidad").attr('readonly',false)
	$("#id_descrip_funcionalidad").blur(comprobar_descrip_funcionalidad_search);


	//eliminamos la imagen que utilizamos en las otras acciones para poder hacer un submit con el formulario
	$("#id_imagen_enviar_form").remove();

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_funcionalidadsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_funcionalidad").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_funcionalidad";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_funcionalidadsubmit").append(botonsubmit);	

	setLang(); 

	// se pone visible el formulario
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
}

function funcionalidadSEARCHAjaxPromesa(){

	insertacampo('id_form_funcionalidad','controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_funcionalidad").serialize(),
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

async function SEARCHfuncionalidadAjax() {
	
	var idioma = getCookie('lang');

	await funcionalidadSEARCHAjaxPromesa()
		.then((res) => {
			getListfuncionalidad(res.resource);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformfuncionalidad();
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformSHOWCURRENTfuncionalidad(id_funcionalidad, nombre_funcionalidad, descrip_funcionalidad){

	// reseteo el formulario
	resetearformfuncionalidad();
	
	$("#id_form_funcionalidad").attr('action','javascript:cerrarSHOWCURRENT()');

	$("#id_funcionalidad").attr('readonly','true')
	$("#id_funcionalidad").val(id_funcionalidad);

	$("#id_nombre_funcionalidad").attr('readonly','true')
	$("#id_nombre_funcionalidad").val(nombre_funcionalidad);

	$("#id_descrip_funcionalidad").attr('readonly','true')
	$("#id_descrip_funcionalidad").val(descrip_funcionalidad);

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_funcionalidadsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_funcionalidad").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_funcionalidad";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/detail4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_funcionalidadsubmit").append(botonsubmit);	

	setLang(); 

	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
	
	
}

function cerrarSHOWCURRENT(){
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: none');
	$("#id_imagen_enviar_form").attr('style', 'display: none');
}

function devolverfuncionalidadAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'funcionalidad');
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

async function devolverfuncionalidadajax() {
	
	var idioma = getCookie('lang');

	await devolverfuncionalidadAjaxPromesa()
		.then((res) => {
			
			getListfuncionalidad(res.resource);
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}

function getListfuncionalidad(listafuncionalidad){

	$("#id_datosfuncionalidad").html('');

	for (let funcionalidad of listafuncionalidad){

		datosfila = "'"+funcionalidad.id_funcionalidad+"',"+"'"+funcionalidad.nombre_funcionalidad+"',"+"'"+funcionalidad.descrip_funcionalidad+"'";

		lineatabla = '<tr><td>'+funcionalidad['id_funcionalidad']+'</td><td>'+funcionalidad['nombre_funcionalidad']+'</td><td>'+funcionalidad['descrip_funcionalidad']+"</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITfuncionalidad('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEfuncionalidad('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTfuncionalidad('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosfuncionalidad").append(lineatabla);
	}
	
}