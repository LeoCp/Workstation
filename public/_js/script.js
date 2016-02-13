var app = angular.module("app", []);
app.controller("ctrl" ,function ($scope,$http,$location) {

  $scope.verfUsuario = function () {
    console.log($scope.usuario);
    $http.post("/",$scope.usuario)
      .success(function(data, status) {
        if(data.type == true){
          window.location = '/home';
        }else{
          $scope.invalid = data.data;
        }
      });
    }
});
