(function(){

    // Este servicio sirve para validar y procesar las entradas
    // de usuario en los formularios

    angular.module('angularSpa').factory('input', function() {
        
        var input = {};
        
        // Entrada: una string con el primer y segundo nombre
        // Salida: falso si la entrada es incorrecta,
        // y si la entrada es correcta, retorna un arreglo de 2 strings
        // con el primer y segundo nombre, formateados
        input.obtenerNombre = function(entrada){

            // Se comprueba si tiene el formato correcto
            if(/^(\s*[a-zA-Z]+\s+[a-zA-Z]+\s*)$/.test(entrada) == false){   
                return false;
            }

            // Quitar el espacio extra al inicio y al final
            entrada = entrada.trim();

            // Partir la string usando \s+ como delimitador (uno o mas espacios)
            return entrada.split(/\s+/);
        }

        return input;
    });

})();

