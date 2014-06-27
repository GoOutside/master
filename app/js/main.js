require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
require('leaflet');
require('jquery');
require('angular-leaflet-directive');
//require('mapLogic.js');

var goApp = angular.module('goApp', ['ngRoute', 'base64', 'ngCookies']);

require('../controllers/loginController')(goApp);
require('../controllers/userController')(goApp);
require('../controllers/detailsController')(goApp);
require('../controllers/demoController')(goApp);
//require('mapLogic.js')(goApp);

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
    .when('/user', {
      templateUrl: 'views/user.html',
      controller: 'demoController'
    });
    //.otherwise({
      //redirectTo: '/login'
    //});
}]);



/*
goApp.provider('mapLogic', function() {
    this.$get = function() {

      console.log("Entering the OTHER script...");

    //jQuery(document).ready(function($) {
      var divv = angular.element(document.querySelector('#map'));
      var classs = angular.element(document.querySelector('.classname'));
      //var ang = angular.element('#map');
      //var jq = $( "#map" );
      console.log(divv);
      console.log(classs);
      //console.log(ang);
      //console.log(jq);
      //console.log(jq.selector);
    //});

    jQuery(document).ready(function($) {
        console.log("jQuery is working");
    });
    var data; 

    // user $http request and then bind the result to the scope instead!
    $.ajax({
      url: '/api/v1/notes4',
      async: false,
      dataType: 'json',
      success: function (response) {
        data = response; 
        console.log(data);
      }
    });
    console.log(data);

    var map = L.map(jq.selector).setView([49, -120], 7);

    L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
        id: 'examples.map-20v6611k'
    }).addTo(map);

    var points = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
          var popupOptions = {maxWidth: 200};
          var popupContent = feature.properties.name + "<br />" + feature.properties.lat + ", " + feature.properties.lng;
          layer.bindPopup(popupContent,popupOptions);
        }   
    });

    function locateUser(){
        map.locate({setView: true, maxZoom: 12}); 
    };
    map.on('locationfound', onLocationFound);
    function onLocationFound(e) {
        console.log("Found location!");
        console.log(e.latlng);
        $.get(
      "notes5",
      { paramOne : e.latlng.lat, paramTwo : e.latlng.lng},
      function(data2) {
        //alert('page content: ' + data2);
        console.log(data2);
        var hikesArray = [];
        for (var i = 0; i < data2.length; i++) {
          console.log(data2[i].geometry.coordinates);
          hikesArray.push(data2[i].geometry.coordinates[1],data2[i].geometry.coordinates[0]);
          var mark = L.marker([data2[i].geometry.coordinates[1],data2[i].geometry.coordinates[0]]).addTo(map);
          //var pointer = L.marker([ 47.63, 122.3 ]).addTo(map);

              var popupOptions = {maxWidth: 200};
              var popupContent =  data2[i].properties.name + "<br />" + data2[i].properties.lat + ", " +  data2[i].properties.lng;
              mark.bindPopup(popupContent,popupOptions);
        }
        //map.setExtent(data2.getExtent());
      //var group = new L.featureGroup(data2);
      console.log(hikesArray);
      var bounds = L.latLngBounds(hikesArray);
      console.log(bounds);
      //map.fitBounds(bounds.getBounds());
      //map.fitBounds(bounds);//works!

        //map.fitBounds(data2);
      }
    );

    }
    locateUser();
    //map.addLayer(points);



      
    };
  });
*/


