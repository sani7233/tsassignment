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