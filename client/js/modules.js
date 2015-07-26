var app = angular.module('app', ['ngRoute', 'angularMoment']);

app.config(function($routeProvider)
{
	$routeProvider
	.when('/dashboard',
	{
		controller: 'MainController',
		// controllerAs: 'usersCtrl',
		templateUrl: '/partials/dashboard.partial.html'
	})
	.when('/flashsaleview',
	{
		controller: 'MainController',
		controllerAs: 'main',
		templateUrl: '/partials/flashsaleview.partial.html'
	})
	.otherwise('/')
});