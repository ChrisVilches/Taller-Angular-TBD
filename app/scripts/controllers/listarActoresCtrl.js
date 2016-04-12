(function(){
    angular.module('angularSpa')
.controller('listarActoresCtrl', function($scope, $http, url){

	// Cual actor tiene abierto el dialogo de confirmacion para eliminar.
	// Al hacer click en el boton "X" se cambia esta ID a la ID del actor, y con eso
	// abre un dialogo de confirmacion para eliminar el actor.
	$scope.dialogoConfirmacion = {
		id: 0
	}

	$scope.deleteActor = function(id){

		// Guardar la URL
		url.guardarURLActors($scope.urlActores);

		var urlActores = $scope.urlActores;

		// Si el ultimo caracter de la URL es un slash / entonces
		// se le agrega la id solamente, sino, se le agrega un slash y la id
		if(urlActores[urlActores.length - 1] == '/'){
			urlActores += id;
		} else {
			urlActores += "/"+id;
		}
		
		$http.delete(urlActores)

		// Exito
		.then(function(result){
			
			// Realizar una busqueda por todos los actores
			$scope.actores.forEach(function (actor, i) {
				if(actor.actorId == id){
					// Cuando se encuentra el actor que se quiere eliminar, se borra del arreglo.
					// De esta forma se borra de la BD, pero se actualiza la vista tambien.
					$scope.actores.splice(i, 1);
					return;
				}
			});
		})

		// Error
		.catch(function(error){
			$scope.mensajeEstado = "Se obtuvo un error (codigo: "+error.status+")";
		});
	}



	$scope.obtenerActores = function(){

		// Guardar la URL
		url.guardarURLActors($scope.urlActores);

		$http.get($scope.urlActores)

		// Exito
		.then(function(result){
			// Obtener los datos
			$scope.actores = result.data;
			// Limpiar mensaje de error (si es que habia)
			$scope.mensajeEstado = "";
		})

		// Error
		.catch(function(error){
			// Vaciar arreglo de actores
			$scope.actores = [];

			// Colocar un mensaje de error
			$scope.mensajeEstado = "Se obtuvo un error (codigo: "+error.status+")";
		});
	}


	// Cargar la URL guardada
	$scope.urlActores = url.obtenerURLActors();
	
	// Cargar los actores al inicializar el controlador
	$scope.obtenerActores();


});
})();
