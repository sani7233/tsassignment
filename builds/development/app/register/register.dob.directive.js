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