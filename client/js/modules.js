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
	.when('/products',
	{
		controller: 'ProductsController',
		controllerAs: 'prodC',
		templateUrl: '/partials/products.partial.html'
	})
	.when('/orders', {
		controller: 'CustomersController',
		controllerAs: 'orderC',
		templateUrl: '/partials/orders.partial.html'
	})
	.when('/customers', {
		controller: 'CustomersController',
		controllerAs: 'custC',
		templateUrl: '/partials/customers.partial.html'
	})
	.when('/settings', {
		// controller: 'CustomersController',
		// controllerAs: 'custC',
		templateUrl: '/partials/settings.partial.html'
	})
	.otherwise('/dashboard')
});