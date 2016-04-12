(function(){
    angular.module('angularSpa')
.controller('agregarActorCtrl', function($scope, $http){

	// URL por defecto
	$scope.urlPostActores = "http://felo-all-series:8080/sakila-backend-master2/actors";


	$scope.postActor = function(){

		// Obtener los datos del formulario

		var url = $scope.urlPostActores;
		var firstname = $scope.primerNombre;
		var lastname = $scope.ultimoNombre;

		// Crear el objeto JSON para postearlo
		var objJson = {
			firstName: firstname,
			lastName: lastname
		};


		$http.post(url, objJson)

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
