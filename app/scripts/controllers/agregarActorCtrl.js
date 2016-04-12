(function(){
    angular.module('angularSpa')
.controller('agregarActorCtrl', function($scope, $http, url){

	// Cargar la URL guardada
	$scope.urlActores = url.obtenerURLActors();

	$scope.postActor = function(){

		// Guardar la URL
		url.guardarURLActors($scope.urlActores);

		// Obtener los datos del formulario

		var urlActores = $scope.urlActores;
		var firstname = $scope.primerNombre;
		var lastname = $scope.ultimoNombre;

		// Crear el objeto JSON para postearlo
		var objJson = {
			firstName: firstname,
			lastName: lastname
		};


		$http.post(urlActores, objJson)

		// Cuando hay exito
		.then(function(){
			// Colocar un mensaje de exito
			$scope.mensajeEstado = "Se agrego '"+firstname+" "+lastname+"' exitosamente";

			// Limpiar el formulario
			$scope.primerNombre = "";
			$scope.ultimoNombre = "";
		})

		// Cuando hay error
		.catch(function(error){
			// Colocar un mensaje de error
			$scope.mensajeEstado = "Se obtuvo un error (codigo: "+error.status+")";
		});


	} // Fin funcion postActor



});
})();
