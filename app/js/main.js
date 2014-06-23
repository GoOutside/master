require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');

var goApp = angular.module('goApp', ['ngRoute', 'base64', 'ngCookies']);

require('../controllers/loginController')(goApp);
require('../controllers/userController')(goApp);
require('../controllers/detailsController')(goApp);

goApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/user', {
      templateUrl: 'views/user.html',
      controller: 'UserController'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .when('/signin', {
      templateUrl: 'views/signin.html',
      controller: 'SigninController'
    })
    .when('/details', {
      templateUrl: 'views/details.html',
      controller: 'DetailsController'
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);