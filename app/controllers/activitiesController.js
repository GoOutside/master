'use strict';

module.exports = function(app) {
  app.controller('activitiesController', function($scope, $http, $cookies, $location){
    $scope.hikeMap = function(){
      $location.path('/user');
    }
  });
};