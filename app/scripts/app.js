(function(){

    angular.module('angularSpa', [
    'ngRoute'
    ])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/listar-actores', {
            templateUrl: 'views/listar-actores.html',
            controller: 'listarActoresCtrl'
          })
        .when('/agregar-actor', {
            templateUrl: 'views/agregar-actor.html',
            controller: 'agregarActorCtrl'
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .otherwise({
            redirectTo: '/home'
          });
    });

})();
