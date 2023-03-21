function comprobar_form_accion_add(){
	alert('entro en comprobar_form_accion_add');

	if (comprobar_id_accion() && comprobar_nombre_accion() && comprobar_descrip_accion()){
		return true;
	}
	else{
		return false;
	}
}

function comprobar_form_accion_search(){
	alert('entro en comprobar_form_accion_search');

	if (comprobar_id_accion_search() && comprobar_nombre_accion_search() && comprobar_descrip_accion_search()){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_id_accion()
// funcion de validacion del formato de id_accion en acciones que no son search
function comprobar_id_accion(){
	if (!size_maximo('id_accion', 4)) {
		mensajeKO('id_accion', 'Tamaño id_accion demasiado largo (max 4 caracteres)');
		return false;
	}else{
		if(!id_accion.value.match([0-9])){
			return false
		}else{
			return true;
		}
	}
}

// comprobar_id_accion_search()
// funcion de validacion del formato de id_accion
function comprobar_id_accion_search(){
	return comprobar_id_accion;
}

function comprobar_nombre_accion(){

	if (!size_minimo('id_nombre_accion',6)){
		mensajeKO('id_nombre_accion', 'nombre_accion_corto_ko');
		return false;
	}
	if (!size_maximo('id_nombre_accion',48)){
		mensajeKO('id_nombre_accion', 'nombre_accion_largo_ko');
		return false;
	}
	if (!letrassinacentoynumeros('id_nombre_accion')){
		mensajeKO('id_nombre_accion', 'nombre_accion_formato_ko');
		return false;
	}

	mensajeOK('id_nombre_accion');
	return true;

}

function comprobar_nombre_accion_search(){
	if (!size_maximo('id_nombre_accion', 48)) {
		mensajeKO('nombre_accion', 'Tamaño nombre_accion demasiado largo (max 48 caracteres)');
		return false;
	}else{
		return true;
	}
}

function comprobar_descrip_accion(){

	if (!size_minimo('id_descrip_accion',20)){
		mensajeKO('id_descrip_accion', 'descrip_accion_corto_ko');
		return false;
	}
	if (!size_maximo('id_descrip_accion',200)){
		mensajeKO('id_descrip_accion', 'descrip_accion_largo_ko');
		return false;
	}
	if (!letrassinacentoynumeros('id_descrip_accion')){
		mensajeKO('id_descrip_accion', 'descrip_accion_formato_ko');
		return false;
	}

	mensajeOK('id_descrip_accion');
	return true;

}

function comprobar_descrip_accion_search(){
	if (!size_maximo('id_descrip_accion', 48)) {
		mensajeKO('descrip_accion', 'Tamaño descrip_accion demasiado largo (max 200 caracteres)');
		return false;
	}else{
		return true;
	}
}

function peticionADDaccionBack(){

	alert('peticion a back add');
	document.getElementById('id_form_accion').submit();
	
}

function peticionEDITaccionBack(){

	alert('peticion a back edit');
	document.getElementById('id_form_accion').submit();
	
}

function peticionDELETEaccionBack(){

	alert('peticion a back delete');
	document.getElementById('id_form_accion').submit();
	
}

function devolveraccion(){

	datosaccion = new Array();
	controlrol = 0;
	dnibase = '11111111';
	numeroaccion = 3;

	for (let i=0;i<numeroaccion;i++){
		
		accion = new Array();
		switch(controlaccion){
			case 0:
				rol['id_accion'] = controlaccion;
				rol['nombre_accion'] = 'admin';
				rol['descrip_accion'] = 'descripcion admin';
				controlaccion++;
				break;
			case 1:
				rol['id_accion'] = controlaccion;
				rol['nombre_accion'] = 'responsable';
				rol['descrip_accion'] = 'descripcion responsable';
				controlaccion++;
				break;
			case 2:
				rol['id_accion'] = controlaccion;
				rol['nombre_accion'] = 'coordinador';
				rol['descrip_accion'] = 'descripcion coordinador';
				controlaccion = 0;
				break;
			default:
				break;

		}

		accion = new Array();
		accion['id_accion'] = accion;
		accion['nombre_accion'] = nombre_accion;
		accion['descrip_accion'] = descrip_accion;


		datosaccion[i] = accion;
	}

	return datosaccion;

}

function add_accion(){

	if (comprobar_form_accion_add()){
		peticionADDaccionBack();
	}

}

function edit_accion(){

	if (comprobar_form_accion_add()){
		EDITaccionajax();
	}

}

function delete_accion(){

	peticionDELETEaccionBack();
}

function search_accion(){

	if (comprobar_form_accion_search()){
		return true;
	}

}

function resetearformaccion(){

	// eliminar el select
/* 	selectviejorol = document.getElementById('id_id_rol');
	if (!(selectviejorol === null)){
		document.getElementById('caja_select_rol').removeChild(selectviejorol);
	} */

	// quitar el readonly de los atributos
	$("#id_accion").attr('readonly',false);
	$("#id_accion").val('');
	$("#id_accion").on('blur',false);
	$("#id_nombre_accion").attr('readonly',false);
	$("#id_nombre_accion").val('');
	$("#id_descrip_accion").val('');
	$("#id_descrip_accion").attr('readonly',false);


	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_accion").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	$("#controlador").remove();
	$("#action").remove();

	// se pone invisible el formulario
	$("#id_caja_formulario_accion").attr('style', 'display: none');

	setLang();

}

function crearformADDaccion(){

	// resetear el formulario
	resetearformaccion();

	// se rellena el action del formulario
	document.getElementById('id_form_accion').action = 'javascript:ADDaccionajax()';
	document.getElementById('id_form_accion').onblur = add_accion;
	
	// se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_accion').onblur = comprobar_id_accion;
	document.getElementById('id_accion').value = '';

	// se coloca el onblur del usuario y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_nombre_accion').onblur = comprobar_nombre_accion;
	document.getElementById('id_nombre_accion').value = '';

	document.getElementById('id_descrip_accion').onblur = comprobar_descrip_accion;
	document.getElementById('id_descrip_accion').value = '';

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_accion").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_accion";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/add4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 

	// se muestra el formulario
	document.getElementById('id_caja_formulario_accion').style.display = 'block';

}

function accionADDAjaxPromesa(){

	insertacampo('id_form_accion','controlador', 'accion');
	insertacampo('id_form_accion','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_accion").serialize(),
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

async function ADDaccionajax() {
	
	var idioma = getCookie('lang');

	await accionADDAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'add_accion_OK';
			};
			devolveraccionajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformaccion();
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformEDITaccion(id_accion, nombre_accion, descrip_accion){

	// resetear al formulario
	resetearformaccion();
	
	// se crea el action del formulario 
	$("#id_form_accion").attr('action','javascript:EDITaccionajax()');
	$("#id_form_accion").on('submit', edit_accion);
	
	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_accion").attr('readonly',true);
	$("#id_accion").blur(comprobar_id_accion);
	$("#id_accion").val(id_accion);

	$("#id_nombre_accion").on('blur',comprobar_nombre_accion);
	$("#id_nombre_accion").val(nombre_accion);

	$("#id_descrip_accion").on('blur',comprobar_descrip_accion);
	$("#id_descrip_accion").val(descrip_accion);

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_accion").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_accion";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/edit4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 

	// se muestra el formulario
	$("#id_caja_formulario_accion").attr('style', 'display: block');
}

function accionEDITAjaxPromesa(){

	insertacampo('id_form_accion','controlador', 'accion');
	insertacampo('id_form_accion','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_accion").serialize(),
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

async function EDITaccionajax() {
	
	var idioma = getCookie('lang');

	await accionEDITAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'edit_accion_OK';
			};
			devolveraccionsajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformaccion();
		//document.getElementById('controlador');
		window.location.reload(true);
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformDELETEaccion(id_accion, nombre_accion, descrip_accion){

	resetearformaccion();
	
	$("#id_form_accion").attr('action','javascript:DELETEaccionajax()');
	
	$("#id_accion").attr('readonly','true')
	$("#id_accion").val(id_accion);

	$("#id_nombre_accion").attr('readonly','true')
	$("#id_nombre_accion").val(nombre_accion);

	$("#id_descrip_accion").attr('readonly','true')
	$("#id_descrip_accion").val(descrip_accion);

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_accion").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_accion";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/delete4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang();
	
	$("#id_caja_formulario_accion").attr('style', 'display: block');
}

function accionDELETEAjaxPromesa(){

	insertacampo('id_form_accion','controlador', 'accion');
	insertacampo('id_form_accion','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_accion").serialize(),
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

async function DELETEaccionajax() {
	
	var idioma = getCookie('lang');

	await accionDELETEAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'delete_accion_OK';
			}
			mensajeactionOK(res.code);
			devolveraccionsajax();
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformaccion();
		window.location.reload(true);
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformSEARCHaccion(){

	// reseteo el formulario
	resetearformaccion();
	
	// creo la accion para el formulario y el onsubmit
	$("#id_form_accion").attr('action','javascript:SEARCHaccionAjax()');
	$("#id_form_accion").on('submit', search_accion);
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_accion").attr('readonly', false);
	$("#id_accion").blur(comprobar_id_accion_search);

	// pongo el campo de usuario editable y le asocio la funcion para el aadd
	$("#id_nombre_accion").attr('readonly',false)
	$("#id_nombre_accion").blur(comprobar_nombre_accion_search);

	$("#id_descrip_accion").attr('readonly',false)
	$("#id_descrip_accion").blur(comprobar_descrip_accion_search);


	//eliminamos la imagen que utilizamos en las otras acciones para poder hacer un submit con el formulario
	$("#id_imagen_enviar_form").remove();

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_accion").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_accion";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 

	// se pone visible el formulario
	$("#id_caja_formulario_accion").attr('style', 'display: block');
}

function accionSEARCHAjaxPromesa(){

	insertacampo('id_form_accion','controlador', 'accion');
	insertacampo('id_form_accion','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_accion").serialize(),
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

async function SEARCHaccionAjax() {
	
	var idioma = getCookie('lang');

	await accionSEARCHAjaxPromesa()
		.then((res) => {
			getListaccion(res.resource);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformaccion();
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformSHOWCURRENTaccion(id_accion, nombre_accion, descrip_accion){

	// reseteo el formulario
	resetearformaccion();
	
	$("#id_form_accion").attr('action','javascript:cerrarSHOWCURRENT()');

	$("#id_accion").attr('readonly','true')
	$("#id_accion").val(id_accion);

	$("#id_nombre_accion").attr('readonly','true')
	$("#id_nombre_accion").val(nombre_accion);

	$("#id_descrip_accion").attr('readonly','true')
	$("#id_descrip_accion").val(descrip_accion);

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_accion").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_accion";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/detail4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 

	$("#id_caja_formulario_accion").attr('style', 'display: block');
	
	
}

function cerrarSHOWCURRENT(){
	$("#id_caja_formulario_accion").attr('style', 'display: none');
	$("#id_imagen_enviar_form").attr('style', 'display: none');
}

function devolveraccionAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'accion');
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

async function devolveraccionajax() {
	
	var idioma = getCookie('lang');

	await devolveraccionAjaxPromesa()
		.then((res) => {
			
			getListaccion(res.resource);
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}

function getListaccion(listaaccion){

	$("#id_datosaccion").html('');

	for (let accion of listaaccion){

		datosfila = "'"+accion.id_accion+"',"+"'"+accion.nombre_accion+"',"+"'"+accion.descrip_accion+"'";

		lineatabla = '<tr><td>'+accion['id_accion']+'</td><td>'+accion['nombre_accion']+'</td><td>'+accion['descrip_accion']+"</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITaccion('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEaccion('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTaccion('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosaccion").append(lineatabla);
	}
	
}