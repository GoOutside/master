'use strict';
module.exports = function(app) {
  app.controller('LoginController', function($scope, $location){
    $scope.facebook= function(){
      //insert facebook call here
    },
    $scope.twitter= function(){
      //insert twitter call here
    },
    $scope.signin=function(){
      $location.path('/signin');
    }; // jshint ignore:line
  });
};
