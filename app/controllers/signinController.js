module.exports = function(app) {
  app.controller('LoginController', function($scope, $http, $base64, $cookies, $location){
    $scope.signin= function(){
      $http.defaults.headers.common['Authentication']='Basic '+$base64($scope.user.email + ':' + $scope.user.password);
      $http({
        method: 'GET',
        url: '/api/v0.0.1/users'
      }).sucess(function(data){
        $cookies.jwt = data.jwt;
        $location.path('/activities');
      }).error(function(data){
        console.log(data);
      });
    }
  });
}