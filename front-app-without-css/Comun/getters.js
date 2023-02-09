const URL_BACKEND = 'http://193.147.87.202/Back/index.php'

export async function getPersonasFromBack(){
	 const response = await $.ajax({
		method: "POST",
		url: URL_BACKEND,
		dataType: "json",
		data: {
			controlador: "persona",
			action: "SEARCH"
		}
	})

	return response
}

export async function getFromBack(data){
	let params = {
		method: "POST",
		url: URL_BACKEND,
		dataType: "json",
		data: data
	}

    const response = await $.ajax(params)

    console.log(response)

	return response
}