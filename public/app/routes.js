


app.config(function ($routeProvider,$stateProvider,$locationProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'app/modules/home/home.html',
    controller: 'homeCtrl'
  })
  .when('/admin',{
  	templateUrl: 'app/modules/admin/admin.html',
  	controller:'adminCtrl'
  })
  .when('/users',{
  	templateUrl:'app/modules/home/userDetail.html',
  	controller:'adminCtrl'
  })
  .otherwise({ redirectTo: '/home' });

  $stateProvider.state('/userControl',{
    templateUrl:'app/modules/admin/admin.html',
    controller:'adminCtrl'
  });

  $locationProvider.html5Mode({
  		enabled:true,
  		requiredBase:false
  });



// // State Setup - ui Router
// $stateProvider.state('adminControl', {
//   templateUrl: 'app/modules/admin/admin.html',
//   controller:'adminCtrl'
// })
  
});