/* global aplicacionMundial */

var aplicacionMundial = angular.module('aplicacionMundial', []);

aplicacionMundial.directive('toolbar', function () {
    return{
        restrict: 'E',
        templateUrl: 'partials/toolbar.html',
        controller: function () {
            this.tab = 0;
            this.selectTab = function (setTab) {
                this.tab = setTab;
            };
            this.isSelected = function (tabParam) {
                return this.tab === tabParam;
            };
        },
        controllerAs: 'toolbar'
    };
});

aplicacionMundial.directive('personaInfo', function () {
    return{
        restrict: 'E',
        templateUrl: 'partials/persona-info.html',
        controller: 'getPersonas'
    };
});
aplicacionMundial.controller("getPersonas", function ($http, $scope) {
    $http.get('http://localhost:8080/personas/get').
            success(function (data, status, headers, config) {
                $scope.personas = data;
            }).
            error(function (data, status, headers, config) {
                // log error
            });
});

aplicacionMundial.directive('personaForm', function () {
    return{
        restrict: 'E',
        templateUrl: 'partials/persona-form.html',
        controller: 'personaCtrl'
    };
});

aplicacionMundial.controller("personaCtrl", function ($http, $scope) {
    $scope.addPersona = function () {
        var url='http://localhost:8080/personas/add';
        $http.post(url, $scope.persona).success(function (data, headers) {
                //console.log(data);
            $scope.persona = {};
            $scope.toolbar.selectTab(2);
      });
    };
});

aplicacionMundial.directive('competitorLogin', function () {
    return{
        restrict: 'E',
        templateUrl: 'partials/competitor-login.html',
        controller: 'competitorLoginCtrl'
    };
});

aplicacionMundial.controller("competitorLoginCtrl", function ($http, $scope) {
    $scope.loginCompetitor = function () {
        var url='http://localhost:8080/competitors/log-in';
        $http.post(url, $scope.competitor).success(function (data, headers) {
                //console.log(data);
            $scope.competitor = {};
            $scope.toolbar.selectTab(4);
      });
    };
});

aplicacionMundial.directive('competitorIngreso', function () {
    return{
        restrict: 'E',
        templateUrl: 'partials/competitor-ingreso.html',
        controller: 'competitorIngresoCtrl'
    };
});






