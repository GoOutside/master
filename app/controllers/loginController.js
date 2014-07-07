'use strict';

module.exports = function(app) {
  app.controller('loginController', function($scope, $http, $base64, $cookies, $location){
    if($cookies.jwt){
      $location.path('/activities');
      return false;
    }
    $scope.signin = function(){
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $base64.encode($scope.user.email + ':' + $scope.user.password);

      $http({
        method: 'GET',
        url: 'api/v0_0_1/users'
      }).success(function(data){
        if(data.jwt) {
          $cookies.jwt = data.jwt;
          $location.path('/activities');
        } else {
          $scope.failedLogin = "Incorrect username/password combination."
        }
      }).error(function(data){
        console.log(data);
      });
    };

    $scope.createUser = function(){
      $http({
        method: 'POST',
        url: 'api/v0_0_1/users',
        data: {
          email: $scope.user.email,
          password: $scope.user.password
        }
      }).success(function(data){
        if(data.jwt) {
          $cookies.jwt = data.jwt;
          $location.path('/activities');
        } else {
          $scope.failedLogin = "Incorrect username/password combination."
        }
      }).error(function(err, data){
        if(err==401){
          $scope.failedLogin = "User already exists"
        }
      });
    };
  });
};


