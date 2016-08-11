var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: "VideoController"
    })
    .when('/views', {
      templateUrl: 'views/templates/views.html',
      controller: "VideoController"
    })
    .when('/votes', {
      templateurl: 'views/templates/votes.html',
      controller: "VideoController"
    })
    .when('/submit', {
      templateUrl: '/views/templates/submit.html',
      controller: "AddController"
    })
    .otherwise({
      redirectTo: 'home'
    })

}]);
