'use strict';

module.exports = function(app) {
  app.controller('loginController', function($scope, $http, $base64, $cookies, $location){
    // $scope.facebook = function(){
    //   //insert facebook call here
    // };
    // $scope.twitter = function(){
    //   //insert twitter call here
    // };
    $scope.signin = function(){
      console.log($scope.user.email + ':' + $scope.user.password);
      $http.defaults.headers.common['Authentication'] = 'Basic ' + $base64.encode($scope.user.email + ':' + $scope.user.password);

      $http({
        method: 'GET',
        url: 'https://localhost:3000/api/v0_0_1/users'
      }).success(function(data){
        $cookies.jwt = data.jwt;
        $location.path('/user');
      }).error(function(data){
        console.log(data);
      });
    };
  });
};

