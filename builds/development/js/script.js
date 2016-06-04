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
	
	angular.module('Register', ['ngMessages']);
})();
(function() {
	'use strict';
		
	angular
		.module('Register')
        .provider('modernizr', modernizr);
    
    Modernizr.$inject = [];
    
    function modernizr() {
    
        this.$get = function () {
            return Modernizr || {};
        };
    }

})();
(function() {
	'use strict';
	
	angular
		.module('Register')
		.directive('dobCalendar', dobFallbackCalendar);
		
		dobFallbackCalendar.$inject = ['$filter', 'modernizr', '$log'];
		
		function dobFallbackCalendar($filter, modernizr, $log) {
			return {
				link: linkFunc,
				require: 'ngModel',
				restrict: 'A'
			};
						
			function linkFunc(scope, element, attrs, ngModelCtrl) {
				var elemSettings = {
					dateFormat:  'mm/dd/yy',
					showOn: "button",
					buttonImage: "../../images/calendar.gif",
					buttonImageOnly: true,
				};
				
				if (modernizr.inputtypes.date) {
					$log.info('Supported');
				} else {
					console.warn("No Support");
					element.datepicker(elemSettings);
				}
				
				
			}
		}
		
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