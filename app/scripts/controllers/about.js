'use strict';

/**
 * @ngdoc function
 * @name angular1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angular1App
 */
angular.module('angular1App')
        .controller('AboutCtrl', function (constants) {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
            console.log(constants.HOST);
            console.log(constants.MODULES.MODULE1);
            console.log(constants.ENDPOINTS.ENDPOINT1);
        });
