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

function getListfuncionalidad(listapermisos){

	$("#id_datosfuncionalidad").html('');

	for (let funcionalidad of listapermisos){

		datosfila = "'"+funcionalidad.nombre_funcionalidad+"',"+"'"+accion.nombre_accion+"',"+"'"+funcionalidad.descrip_funcionalidad+"'";

		lineatabla = '<tr><td>'+funcionalidad['id_funcionalidad']+'</td><td>'+funcionalidad['nombre_funcionalidad']+'</td><td>'+funcionalidad['descrip_funcionalidad']+"</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITfuncionalidad('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEfuncionalidad('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTfuncionalidad('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosfuncionalidad").append(lineatabla);
	}
	
}