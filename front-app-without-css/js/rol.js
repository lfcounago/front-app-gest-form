function comprobar_form_rol_add(){
	alert('entro en comprobar_form_rol_add');

	if (comprobar_id_rol() && comprobar_nombre_rol() && comprobar_descrip_rol()){
		return true;
	}
	else{
		return false;
	}
}

function comprobar_form_rol_search(){
	alert('entro en comprobar_form_rol_search');

	if (comprobar_id_rol_search() && comprobar_nombre_rol_search() && comprobar_descrip_rol_search()){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_id_rol()
// funcion de validacion del formato de id_rol en roles que no son search
function comprobar_id_rol(){
	if (!size_maximo('id_rol', 4)) {
		mensajeKO('id_rol', 'Tamaño id_rol demasiado largo (max 4 caracteres)');
		return false;
	}else{
		if(!id_rol.value.match([0-9])){
			return false
		}else{
			return true;
		}
	}
}

// comprobar_id_rol_search()
// funcion de validacion del formato de id_rol
function comprobar_id_rol_search(){
	return comprobar_id_rol;
}

function comprobar_nombre_rol(){

	if (!size_minimo('id_nombre_rol',6)){
		mensajeKO('id_nombre_rol', 'nombre_rol_corto_ko');
		return false;
	}
	if (!size_maximo('id_nombre_rol',48)){
		mensajeKO('id_nombre_rol', 'nombre_rol_largo_ko');
		return false;
	}
	if (!letrassinacentoynumeros('id_nombre_rol')){
		mensajeKO('id_nombre_rol', 'nombre_rol_formato_ko');
		return false;
	}

	mensajeOK('id_nombre_rol');
	return true;

}

function comprobar_nombre_rol_search(){
	if (!size_maximo('id_nombre_rol', 48)) {
		mensajeKO('nombre_rol', 'Tamaño nombre_rol demasiado largo (max 48 caracteres)');
		return false;
	}else{
		return true;
	}
}

function comprobar_descrip_rol(){

	if (!size_minimo('id_descrip_rol',20)){
		mensajeKO('id_descrip_rol', 'descrip_rol_corto_ko');
		return false;
	}
	if (!size_maximo('id_descrip_rol',200)){
		mensajeKO('id_descrip_rol', 'descrip_rol_largo_ko');
		return false;
	}
	if (!letrassinacentoynumeros('id_descrip_rol')){
		mensajeKO('id_descrip_rol', 'descrip_rol_formato_ko');
		return false;
	}

	mensajeOK('id_descrip_rol');
	return true;

}

function comprobar_descrip_rol_search(){
	if (!size_maximo('id_descrip_rol', 48)) {
		mensajeKO('descrip_rol', 'Tamaño descrip_rol demasiado largo (max 200 caracteres)');
		return false;
	}else{
		return true;
	}
}

function peticionADDrolBack(){

	alert('peticion a back add');
	document.getElementById('id_form_rol').submit();
	
}

function peticionEDITrolBack(){

	alert('peticion a back edit');
	document.getElementById('id_form_rol').submit();
	
}

function peticionDELETErolBack(){

	alert('peticion a back delete');
	document.getElementById('id_form_rol').submit();
	
}

function devolverrol(){

	datosrol = new Array();
	controlrol = 0;
	dnibase = '11111111';
	numerorol = 3;

	for (let i=0;i<numerorol;i++){
		
		rol = new Array();
		switch(controlrol){
			case 0:
				rol['id_rol'] = controlrol;
				rol['nombre_rol'] = 'admin';
				rol['descrip_rol'] = 'descripcion admin';
				controlrol++;
				break;
			case 1:
				rol['id_rol'] = controlrol;
				rol['nombre_rol'] = 'responsable';
				rol['descrip_rol'] = 'descripcion responsable';
				controlrol++;
				break;
			case 2:
				rol['id_rol'] = controlrol;
				rol['nombre_rol'] = 'coordinador';
				rol['descrip_rol'] = 'descripcion coordinador';
				controlrol = 0;
				break;
			default:
				break;

		}

		rol = new Array();
		rol['id_rol'] = rol;
		rol['nombre_rol'] = nombre_rol;
		rol['descrip_rol'] = descrip_rol;


		datosrol[i] = rol;
	}

	return datosrol;

}

function add_rol(){

	if (comprobar_form_rol_add()){
		peticionADDrolBack();
	}

}

function edit_rol(){

	if (comprobar_form_rol_add()){
		EDITrolajax();
	}

}

function delete_rol(){

	peticionDELETErolBack();
}

function search_rol(){

	if (comprobar_form_rol_search()){
		return true;
	}

}

function resetearformrol(){

	// eliminar el select
/* 	selectviejorol = document.getElementById('id_id_rol');
	if (!(selectviejorol === null)){
		document.getElementById('caja_select_rol').removeChild(selectviejorol);
	} */

	// quitar el readonly de los atributos
	$("#id_rol").attr('readonly',false);
	$("#id_rol").val('');
	$("#id_rol").on('blur',false);
	$("#id_nombre_rol").attr('readonly',false);
	$("#id_nombre_rol").val('');
	$("#id_descrip_rol").val('');
	$("#id_descrip_rol").attr('readonly',false);


	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_rol").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_rolsubmit").remove();

	$("#controlador").remove();
	$("#action").remove();

	// se pone invisible el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: none');

	setLang();

}

function crearformADDrol(){

	// resetear el formulario
	resetearformrol();

	// se rellena el action del formulario
	document.getElementById('id_form_rol').action = 'javascript:ADDrolajax()';
	document.getElementById('id_form_rol').onblur = add_rol;
	
	// se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_rol').onblur = comprobar_id_rol;
	document.getElementById('id_rol').value = '';

	// se coloca el onblur del usuario y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_nombre_rol').onblur = comprobar_nombre_rol;
	document.getElementById('id_nombre_rol').value = '';

	document.getElementById('id_descrip_rol').onblur = comprobar_descrip_rol;
	document.getElementById('id_descrip_rol').value = '';

	rolsubmit = document.createElement("button");
	rolsubmit.type = 'submit';
	rolsubmit.id = 'id_rolsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_rol").append(rolsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_rol";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/add4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_rolsubmit").append(botonsubmit);	

	setLang(); 

	// se muestra el formulario
	document.getElementById('id_caja_formulario_rol').style.display = 'block';

}

function rolADDAjaxPromesa(){

	insertacampo('id_form_rol','controlador', 'rol');
	insertacampo('id_form_rol','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_rol").serialize(),
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

async function ADDrolajax() {
	
	var idioma = getCookie('lang');

	await rolADDAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'add_rol_OK';
			};
			devolverrolajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformrol();
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformEDITrol(id_rol, nombre_rol, descrip_rol){

	// resetear al formulario
	resetearformrol();
	
	// se crea el action del formulario 
	$("#id_form_rol").attr('action','javascript:EDITrolajax()');
	$("#id_form_rol").on('submit', edit_rol);
	
	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_rol").attr('readonly',true);
	$("#id_rol").blur(comprobar_id_rol);
	$("#id_rol").val(id_rol);

	$("#id_nombre_rol").on('blur',comprobar_nombre_rol);
	$("#id_nombre_rol").val(nombre_rol);

	$("#id_descrip_rol").on('blur',comprobar_descrip_rol);
	$("#id_descrip_rol").val(descrip_rol);

	rolsubmit = document.createElement("button");
	rolsubmit.type = 'submit';
	rolsubmit.id = 'id_rolsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_rol").append(rolsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_rol";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/edit4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_rolsubmit").append(botonsubmit);	

	setLang(); 

	// se muestra el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: block');
}

function rolEDITAjaxPromesa(){

	insertacampo('id_form_rol','controlador', 'rol');
	insertacampo('id_form_rol','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_rol").serialize(),
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

async function EDITrolajax() {
	
	var idioma = getCookie('lang');

	await rolEDITAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'edit_rol_OK';
			};
			devolverrolsajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformrol();
		//document.getElementById('controlador');
		window.location.reload(true);
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformDELETErol(id_rol, nombre_rol, descrip_rol){

	resetearformrol();
	
	$("#id_form_rol").attr('action','javascript:DELETErolajax()');
	
	$("#id_rol").attr('readonly','true')
	$("#id_rol").val(id_rol);

	$("#id_nombre_rol").attr('readonly','true')
	$("#id_nombre_rol").val(nombre_rol);

	$("#id_descrip_rol").attr('readonly','true')
	$("#id_descrip_rol").val(descrip_rol);

	rolsubmit = document.createElement("button");
	rolsubmit.type = 'submit';
	rolsubmit.id = 'id_rolsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_rol").append(rolsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_rol";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/delete4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_rolsubmit").append(botonsubmit);	

	setLang();
	
	$("#id_caja_formulario_rol").attr('style', 'display: block');
}

function rolDELETEAjaxPromesa(){

	insertacampo('id_form_rol','controlador', 'rol');
	insertacampo('id_form_rol','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_rol").serialize(),
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

async function DELETErolajax() {
	
	var idioma = getCookie('lang');

	await rolDELETEAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'delete_rol_OK';
			}
			mensajeactionOK(res.code);
			devolverrolsajax();
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformrol();
		window.location.reload(true);
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformSEARCHrol(){

	// reseteo el formulario
	resetearformrol();
	
	// creo la rol para el formulario y el onsubmit
	$("#id_form_rol").attr('action','javascript:SEARCHrolAjax()');
	$("#id_form_rol").on('submit', search_rol);
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_rol").attr('readonly', false);
	$("#id_rol").blur(comprobar_id_rol_search);

	// pongo el campo de usuario editable y le asocio la funcion para el aadd
	$("#id_nombre_rol").attr('readonly',false)
	$("#id_nombre_rol").blur(comprobar_nombre_rol_search);

	$("#id_descrip_rol").attr('readonly',false)
	$("#id_descrip_rol").blur(comprobar_descrip_rol_search);


	//eliminamos la imagen que utilizamos en las otras roles para poder hacer un submit con el formulario
	$("#id_imagen_enviar_form").remove();

	rolsubmit = document.createElement("button");
	rolsubmit.type = 'submit';
	rolsubmit.id = 'id_rolsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_rol").append(rolsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_rol";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_rolsubmit").append(botonsubmit);	

	setLang(); 

	// se pone visible el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: block');
}

function rolSEARCHAjaxPromesa(){

	insertacampo('id_form_rol','controlador', 'rol');
	insertacampo('id_form_rol','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_rol").serialize(),
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

async function SEARCHrolAjax() {
	
	var idioma = getCookie('lang');

	await rolSEARCHAjaxPromesa()
		.then((res) => {
			getListrol(res.resource);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformrol();
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformSHOWCURRENTrol(id_rol, nombre_rol, descrip_rol){

	// reseteo el formulario
	resetearformrol();
	
	$("#id_form_rol").attr('action','javascript:cerrarSHOWCURRENT()');

	$("#id_rol").attr('readonly','true')
	$("#id_rol").val(id_rol);

	$("#id_nombre_rol").attr('readonly','true')
	$("#id_nombre_rol").val(nombre_rol);

	$("#id_descrip_rol").attr('readonly','true')
	$("#id_descrip_rol").val(descrip_rol);

	rolsubmit = document.createElement("button");
	rolsubmit.type = 'submit';
	rolsubmit.id = 'id_rolsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_rol").append(rolsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_rol";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/detail4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_rolsubmit").append(botonsubmit);	

	setLang(); 

	$("#id_caja_formulario_rol").attr('style', 'display: block');
	
	
}

function cerrarSHOWCURRENT(){
	$("#id_caja_formulario_rol").attr('style', 'display: none');
	$("#id_imagen_enviar_form").attr('style', 'display: none');
}

function devolverrolAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'rol');
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

async function devolverrolajax() {
	
	var idioma = getCookie('lang');

	await devolverrolAjaxPromesa()
		.then((res) => {
			
			getListrol(res.resource);
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}

function getListrol(listarol){

	$("#id_datosrol").html('');

	for (let rol of listarol){

		datosfila = "'"+rol.id_rol+"',"+"'"+rol.nombre_rol+"',"+"'"+rol.descrip_rol+"'";

		lineatabla = '<tr><td>'+rol['id_rol']+'</td><td>'+rol['nombre_rol']+'</td><td>'+rol['descrip_rol']+"</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITrol('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETErol('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTrol('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosrol").append(lineatabla);
	}
	
}



//Función ajax con promesas
function devolverrolesAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'rol');
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

async function devolverrolesAjax() {
	
	var idioma = getCookie('lang');

	await devolverrolesAjaxPromesa()
		.then((res) => {
			
			return(res.resource);
					
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}

//
// deshabilitado: true si se quiere que el campo select este no seleccionable
// convacio: true si se quiere que el select incorpore un vacio inicial
// rol: valor para colocar por defecto en el select
//
async function pintarselectrolesAjax(deshabilitado = false, convacio = false, rol=null) {
	
	var idioma = getCookie('lang');

	await devolverrolesAjaxPromesa()
		.then((res) => {
			
			let rol_select = crearselect(convacio,'id_id_rol','id_rol', 'id_rol', 'nombre_rol', res.resource, rol);
			$("#caja_select_rol").append(rol_select);
			if (deshabilitado){
				$("#id_id_rol:not(:selected)").attr('disabled',true);
			}
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}