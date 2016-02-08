var app = angular.module("app", []);
app.controller("ctrl" ,function ($scope,$http) {
  $scope.verfUsuario = function () {
    console.log($scope.usuario);
    $http.post("/",$scope.usuario);
  };


});
