'use strict';

/**
 * @ngdoc overview
 * @name laboratoryHomepageApp
 * @description
 * # laboratoryHomepageApp
 *
 * Main module of the application.
 */
angular
  .module('laboratoryHomepageApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
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
      .when('/connect',{
        templateUrl:"views/connect.html",
        controller:"connectCtrl",
        controllerAs:"connect"
      })
      .when('/excellent',{
        templateUrl:"views/excellent.html",
        controller:"excellentCtrl",
        controllerAs:'excellent'
      })
      .when('/excellent/1',{
        templateUrl:"views/excellent/1.html"
        // controller:"excellentoneCtrl",
        // controllerAs:'excellentone'
      })
      .when('/teacherintroduce',{
        templateUrl:"views/teacher.html",
        controller:"teacherCtrl",
        controllerAs:"teacher"
      })
      .otherwise({
        redirectTo: '/'
      });
  });
