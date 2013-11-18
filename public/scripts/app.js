angular.module('WorkshopApp', []).config(function($routeProvider) {
	return $routeProvider.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	}).otherwise({
		redirectTo: '/'
	});
});