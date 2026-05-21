

let app = angular.module('myApp', [
	'ngRoute',
	'firebase',
	'ui.router',
	'monospaced.qrcode']);


app.run(['$rootScope', function ($rootScope) {
       $rootScope.regValue = 'sign up';
       $rootScope.reg = false;
       $rootScope.showReg = function(){
       	$rootScope.reg = $rootScope.reg ? false:true;

       	return $rootScope.reg;
       
       }

    $rootScope.showSignUp =false;        
	$rootScope.hideX =false; 
	$rootScope.showX =false;

	

}])