(function(){

    // Servicio que sirve para guardar la URL, para que no sea necesario
    // escribirla todo el tiempo

    angular.module('angularSpa').factory('url', function() {
        
        var url = {};
        
        // Obtener la URL desde localStorage
        url.obtenerURLActors = function(){
            return localStorage.getItem("urlActors");
        }

        // Guardar la URL en localStorage
        url.guardarURLActors = function(urlActors){
            localStorage.setItem("urlActors", urlActors);
        }

        return url;
    });

})();

