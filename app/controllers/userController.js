'use strict';

module.exports = function(app) {
  app.controller('userController', function($scope, $http, $cookies, $location){
    $http.defaults.headers.common['jwt'] = $cookies.jwt;
    $scope.signout = function () {
      delete $cookies['jwt'];
      $location.path('/');
      console.log('signout');
    };
  });
};

