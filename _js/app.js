angular.module('app',['ngRoute', 'starter.controllers'])

.config(function($routeProvider, $locationProvider){
   // remove o # da url
   $locationProvider.html5Mode(true);

   $routeProvider

   // para a rota '/', carregaremos o template home.html e o controller 'Login'
   .when('/', {
      templateUrl : 'Workstation/_views/login.html',
      controller: 'LoginCtrl',
   })

   .when('/work', {
      templateUrl : 'Workstation/_views/work.html',
      controller: 'WorkCtrl',
   })

   .otherwise ({ redirectTo: '/' });
});
