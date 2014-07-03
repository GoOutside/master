'use strict';

module.exports = function(app) {
  app.controller('activitiesController', function($scope, $http, $cookies, $location){
    if(!$cookies.jwt){
      $location.path('/');
      return false;
    }
    $scope.hikeMap = function(){
      $location.path('/user');
    }
  });
};