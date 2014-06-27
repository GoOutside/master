'use strict';

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');

require('leaflet');
require('jquery');

module.exports = function(app) {
  app.controller("demoController", [ '$scope', function($scope) {
    /*angular.extend($scope, {
        center: {
            lat: 40.095,
            lng: -3.823,
            zoom: 4
        },
        defaults: {
            scrollWheelZoom: false
        }
    });*/
    $scope.mapFunction = function () {
      angular.extend($scope, {
          center: {
              lat: 40.095,
              lng: -3.823,
              zoom: 4
          },
          defaults: {
              scrollWheelZoom: false
          }
      });
    }
}]);
};
