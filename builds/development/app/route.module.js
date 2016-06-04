/**
 * @class app_module.Route
 * @memberOf app.module
 */
(function() {
	'use strict';
	
	angular.module('appCustomRoute', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/login', {
				templateUrl: 'app/login/login.html',
				controller: 'ctrlLogin'
			})
			.when('/register', {
				templateUrl: 'app/register/register.html',
				controller: 'ctrlRegister'
			})
			.otherwise( {
				templateUrl: 'app/login/login.html',
				controller: 'ctrlLogin'
			});	
	});	
	
})();