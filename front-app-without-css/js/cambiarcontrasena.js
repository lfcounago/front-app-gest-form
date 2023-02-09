// comprobar_form_usuario_add()
// funcion para validar el submit del formulario usuario para las acciones que no sean search

function comprobar_form_cambiarcontraseña(){
	alert('entro en comprobar_form_usuario_add');

	if (comprobar_dni() && comprobar_usuario() && comprobar_id_rol() && comprobar_contrasena()){
		encriptarpassword();
		return true;
	}
	else{
		return false;
	}
}


// comprobar_usuario()
// funcion de validación de formato de usuario en acciones que no sean search
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

//comprobar_contrasena()
//función de validación de formato de contrasena
function comprobar_form_contrasena_add(){
	alert('entro en comprobar_form_usuario_add');

	if (comprobar_dni() && comprobar_usuario() && comprobar_id_rol()){
		return true;
	}
	else{
		return false;
	}
}


// comprobar_contrasena()
// funcion de validación de formato de contrasena en acciones que no sean search
function comprobar_contrasena(){

	if (!size_minimo('id_contrasena',3)){
		mensajeKO('id_contrasena', 'contrasena_corto_ko');
		return false;
	}
	if (!size_maximo('id_contrasena',45)){
		mensajeKO('id_contrasena', 'contrasena_largo_ko');
		return false;
	}

	mensajeOK('id_contrasena');
	return true;


}

// peticionEDITcontrasenaBack()
// funcion que utilizariamos para hacer una solicitud a back para editar un usuario
function peticionEDITcontrasenaBack(){

	alert('peticion a back edit');
	document.getElementById('id_form_cambiarcontrasena').submit();
	
}

// edit_contrasena()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_contrasena(){

	if (comprobar_form_cambiarcontraseña()){
		EDITcontrasenaajax();
	}

}

// resetearformusuario()
// esta función se usa para inicializar el formulario y siempre este de la misma manera ansetes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformusuario(){

	// quitar el readonly de los atributos
	$("#id_usuario").attr('readonly',false);
	$("#id_usuario").val('');
	$("#id_contrasena").val('');
	$("#id_contrasena").attr('readonly',false);
	$("#id_contrasena2").attr('readonly',false);
	$("#id_contrasena2").val('');

	$("#controlador").remove();
	$("#action").remove();

	setLang();

}

// crearformEDITusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_contrasena al pulsarla y esta llama a peticionEDITcontrasenaBack que provoca el submit del formulario
// y se ejecuta el action

function crearformEDITcontrasena(usuario, contrasena, contrasena2){

	// resetear al formulario
	resetearformusuario();
	
	// se crea el action del formulario 
	$("#id_form_cambiarcontrasena").attr('action','javascript:EDITcontrasenaajax()');
	$("#id_form_cambiarcontrasena").on('submit', edit_contrasena);

	// se pone la función de validación de usuario y se pone el valor por defecto proporcionado como parametro
	$("#id_usuario").on('blur',comprobar_usuario);
	$("#id_usuario").val(usuario);

	$("#id_contrasena").on('blur',comprobar_contrasena);
	$("#id_contrasena").val(contrasena);

    $("#id_contrasena").on('blur',comprobar_contrasena);
	$("#id_contrasena").val(contrasena2);

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';

	// coloco la imagen para submit en el formulario
	$("#id_form_cambiarcontrasena").append(accionsubmit);
	
	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_usuario";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/edit4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 

	// se muestra el formulario
	$("#id_caja_formulario_cambiarcontrasena").attr('style', 'display: block');
}

//Función ajax con promesas
function usuarioEDITAjaxPromesa(){

	insertacampo('id_form_cambiarcontrasena','controlador', 'usuario');
	insertacampo('id_form_cambiarcontrasena','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_cambiarcontrasena").serialize(),
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

async function EDITcontrasenaajax() {
	
	var idioma = getCookie('lang');

	await usuarioEDITAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'edit_contrasena_OK';
			};
			devolverusuariosajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_cambiarcontrasena').reset();
		resetearformusuario();
		document.getElementById('controlador')
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

