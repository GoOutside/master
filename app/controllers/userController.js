'use strict';

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');

require('leaflet');
require('jquery');

module.exports = function(app) {
  app.controller('userController', function($scope, $http, $cookies, $location, mapLogic){
    $http.defaults.headers.common['jwt'] = $cookies.jwt;
    $scope.signout = function () {
      delete $cookies['jwt'];
      $location.path('/');
      console.log('signout');
    };

  });
};

