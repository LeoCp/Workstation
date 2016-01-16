angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope,$rootScope, $location) {
   $rootScope.activetab = $location.path();

   $scope.logarUsuario = function(usuario){
      console.log(usuario);
   };
})

.controller('WorkCtrl', function($rootScope, $location) {
   $rootScope.activetab = $location.path();
});
