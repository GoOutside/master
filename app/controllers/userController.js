'use strict';

module.exports = function(app) {
  app.controller('userController', function($scope, $http, $cookies, $location){
    $http.defaults.headers.common['jwt'] = $cookies.jwt;

    $('.activity_list_item').on("click", function(){
      $(this).find('.panel').slideToggle('fast', 0);
    });

    $scope.toggle = function(){
      $(".user_side_menu").toggleClass("active");
      $(".activity_location").toggleClass("active");
    };
    $scope.signout = function () {
      delete $cookies['jwt'];
      $location.path('/');
      console.log('signout');
    };
    $scope.favorite = function(){
      $http({
        method: 'POST',
        url: 'https://localhost:3000/api/v0_0_1/users/favorite'
      }).success(function(data){
        
      }).error(function(data){
        console.log(data);
      });
    }
  });
};

