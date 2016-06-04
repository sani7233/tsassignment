/**
 * @namespace app_module
 */
(function() {
	'use strict';
	
	angular.module('app', 
		[	
			'Login',
			'Register'
		]
	);
	
})();
/**
 * @class app_module.Signin
 * @memberOf app.module
 */
(function() {
	'use strict';
	
	angular.module('Login', []);
})();
/**
 * @class app_module.Register
 * @memberOf app.module
 */
(function() {
	'use strict';
	
	angular.module('Register', []);
})();