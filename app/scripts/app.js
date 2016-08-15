'use strict';

/**
 * @ngdoc overview
 * @name trainingSeedApp
 * @description
 * # trainingSeedApp
 *
 * Main module of the application.
 */
angular
  .module('trainingSeedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
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
      .when('/searchSimple', {
        templateUrl: 'views/searchsimple.html',
        controller: 'SearchsimpleCtrl',
        controllerAs: 'searchSimple'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
