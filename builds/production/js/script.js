!function(){"use strict";angular.module("app",["Login","Register","appCustomRoute"])}(),function(){"use strict";angular.module("appCustomRoute",["ngRoute"]).config(function(e){e.when("/login",{templateUrl:"app/login/login.html",controller:"ctrlLogin"}).when("/register",{templateUrl:"app/register/register.html",controller:"ctrlRegister"}).otherwise({templateUrl:"app/login/login.html",controller:"ctrlLogin"})})}(),function(){"use strict";angular.module("Login",["ngMessages"])}(),function(){"use strict";function e(e){}angular.module("Login").controller("ctrlLogin",e),e.$inject=["$scope"]}(),function(){"use strict";angular.module("Register",["ngMessages"])}(),function(){"use strict";function e(){this.$get=function(){return Modernizr||{}}}angular.module("Register").provider("modernizr",e),Modernizr.$inject=[]}(),function(){"use strict";function e(e,t,n){function r(e,r,o,i){var s={dateFormat:"mm/dd/yy",showOn:"button",buttonImage:"../../images/calendar.gif",buttonImageOnly:!0};t.inputtypes.date?n.info("Supported"):(console.warn("No Support"),r.datepicker(s))}return{link:r,require:"ngModel",restrict:"A"}}angular.module("Register").directive("dobCalendar",e),e.$inject=["$filter","modernizr","$log"]}(),function(){"use strict";function e(e){function t(e,t,n){e.viewPassword=!0,e.showPassword=function(){e.viewPassword=!e.viewPassword}}return{link:t,restrict:"E",replace:!0,templateUrl:"../app/register/show-hide-password.html"}}angular.module("Register").directive("showHidePassword",e),e.$inject=["$log"]}(),function(){"use strict";function e(e){}angular.module("Register").controller("ctrlRegister",e),e.$inject=["$scope"]}();