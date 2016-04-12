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

		// PLF
		// Ver si el nombre corresponde a un formato de nombre "firstname lastname"
		if(/^(\s*[a-zA-Z]+\s+[a-zA-Z]+\s*)$/.test($scope.nombreCompleto) == false){
			// Error de formato
			$scope.mensajeEstado = "Error de formato: debe ser primero nombre, y luego ultimo nombre";
			return;
		}

		// Quitar el espacio extra al inicio y al final
		$scope.nombreCompleto = $scope.nombreCompleto.trim();

		// Partir la string usando \s+ como delimitador (uno o mas espacios)
		var split = $scope.nombreCompleto.split(/\s+/);

		// Obtener el primer y segundo nombre
		var firstname = split[0];
		var lastname = split[1];

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
