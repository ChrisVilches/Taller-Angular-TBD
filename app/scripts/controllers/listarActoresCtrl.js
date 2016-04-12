(function(){
    angular.module('angularSpa')
.controller('listarActoresCtrl', function($scope, $http){

	// URL por defecto
	$scope.urlGetActores = "http://felo-all-series:8080/sakila-backend-master2/actors";


	$scope.deleteActor = function(id){

		// La URL de delete es la misma que para Get
		var url = $scope.urlGetActores;

		// Si el ultimo caracter de la URL es un slash / entonces
		// se le agrega la id solamente, sino, se le agrega un slash y la id
		if(url[url.length - 1] == '/'){
			url += id;
		} else {
			url += "/"+id;
		}
		
		$http.delete(url)

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

		.catch(function(error){
			$scope.mensajeEstado = "Se obtuvo un error (codigo: "+error.status+")";
		});
	}



	$scope.obtenerActores = function(){

		$http.get($scope.urlGetActores)

		// Exito
		.then(function(result){
			// Obtener los datos
			$scope.actores = result.data;
			// Limpiar mensaje de error (si es que habia)
			$scope.mensajeEstado = "";
		})

		// Error
		.catch(function(error){
			// Colocar un mensaje de error
			$scope.actores = [];
			$scope.mensajeEstado = "Se obtuvo un error (codigo: "+error.status+")";
		});
	}


});
})();
