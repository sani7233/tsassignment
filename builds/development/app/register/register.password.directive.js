(function() {
	'use strict';
	
	angular
		.module('Register')
		.directive('showHidePassword', showHidePassHandler);
		
		showHidePassHandler.$inject = ['$log'];
		
		function showHidePassHandler($log) {
			return {
				link: linkFunc,
				restrict: 'E',
				replace: true,
				templateUrl: '../app/register/show-hide-password.html'
			};
						
			function linkFunc(scope, element, attrs) {
				scope.viewPassword = true;
				
				scope.showPassword = function(){
				  scope.viewPassword = !scope.viewPassword;
				};
			}
		}
		
})();