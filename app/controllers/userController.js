module.exports = function(app) {
  app.controller('UserController', function($scope, $http, $cookies){
    $http.defaults.headers.common['jwt'] = $cookies.jwt;

    console.log('UserController Success!!');


  });
};
