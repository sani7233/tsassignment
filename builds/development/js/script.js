/**
 * @namespace app_module
 */
(function() {
	'use strict';
	
	angular.module('app', 
		[				
			'Login',
			'Register',
			'appCustomRoute'
		]
	);
	
})();
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
/**
 * @class app_module.Login
 * @memberOf app.module
 */
(function() {
	'use strict';
	
	angular.module('Login', ['ngMessages']);
})();
/**
 * @name app_module.Login.ctrlLogin
 */ 
(function() {
	'use strict';
	
	angular.module('Login')
		.controller('ctrlLogin', ctrlLogin);
		
		ctrlLogin.$inject = ['$scope'];
			

		/**
		 * @name $scope.ctrlLogin 
		 * @function
		 * @memberOf app_module.Login.ctrlLogin 
		 * @description 
		 */	
		function ctrlLogin($scope) {
			
		}
})();
/**
 * @class app_module.Register
 * @memberOf app.module
 */
(function() {
	'use strict';
	
	angular.module('Register', []);
})();
/**
 * @name app_module.Register.ctrlRegister
 */ 
(function() {
	'use strict';
	
	angular.module('Register')
		.controller('ctrlRegister', ctrlRegister);
	
		ctrlRegister.$inject = ['$scope'];

		/**
		 * @name $scope.ctrlRegister 
		 * @function
		 * @memberOf app_module.Register.ctrlRegister 
		 * @description 
		 */	
		function ctrlRegister($scope) {
			
		}
})();