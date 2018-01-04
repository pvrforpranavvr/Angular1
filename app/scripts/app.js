'use strict';

/**
 * @ngdoc overview
 * @name angular1App
 * @description
 * # angular1App
 *
 * Main module of the application.
 */
angular
        .module('angular1App', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch'
        ]).constant('constants', constants())
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl',
                        controllerAs: 'main'
                    })
                    .when('/about', {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl',
                        controllerAs: 'about'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });

        });
function constants()
{
    return {
        HOST: 'http://localhost:8080',
        MODULES: {
            MODULE1: '/api/module1/rest',
            MODULE2: '/api/module1/rest',
            MODULE3: '/api/module1/rest'
        },
        ENDPOINTS: {
            ENDPOINT1: '/endpoint1',
            ENDPOINT2: '/endpoint1',
            ENDPOINT3: '/endpoint1'
        }
    };

}