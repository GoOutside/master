require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
var $ = require('jquery');

var goApp = angular.module('goApp', ['ngRoute', 'base64', 'ngCookies']);

require('../controllers/loginController')(goApp);
require('../controllers/userController')(goApp);
require('../controllers/detailsController')(goApp);
require('../controllers/activitiesController')(goApp);



goApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/user', {
      templateUrl: 'views/user.html',
      controller: 'userController'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginController'
    })
    .when('/signin', {
      templateUrl: 'views/signin.html',
      controller: 'signinController'
    })
    .when('/details', {
      templateUrl: 'views/details.html',
      controller: 'detailsController'
    })
    .when('/activities', {
      templateUrl: 'views/activities.html',
      controller: 'activitiesController'
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);
