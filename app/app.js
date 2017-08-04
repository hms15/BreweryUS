(function () {
'use strict';

angular.module('brewery', [
        'ngRoute'   
    ])

   .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                title: 'brewery',
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl'
                
            })
            .when('/Map', {
                title: 'brewery',
                templateUrl: 'map/map.html',
                controller: 'MapCtrl'                
            })            
            .otherwise({
                redirectTo: '/'
            });            
    }]);

 })();