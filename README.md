# firebase-Auth
Firebase 3.0 Complete Authentication module compromises of Login &amp; Signup.
<br /> By : <b> Moeid Saleem Khan ( Team Leader - ADS© / ADS Academy )  </b> @moeidsaleem 

## What we used 
1. AngularJS 1.5 
2. Firebase 3.0 
3. Materialize CSS 

##Setup 
1. Setup AngularJS. 
2. Setup Firebase App. 

Once app has been created follow the steps.

### Dealing with Firebase Authentication
 
 1. Go to Authentication and click 2nd tab "Sign In methods" 
 2. Enable Email/Password. 
 
 ##Setting up Form
 1. Create a simple form with two input i.e. email and password as ng-model. 
 2. on ng-submit set <b> "signIn()" </b> method.
 3. Create a submit button with type <b> submit </b> 
 4. Create another button and apply ng-click to <b> "signUp()" </b> method. 
 
 
 ###home.html
 ```html
 
<div class="container">
<form ng-submit="signIn()">
<h2>Login to Admin panel</h2>  <h5  style="color:{{resultColor}}" ng-bind="result"></h5>
  <div class="input-field col s6">
  	<input id="icon_prefix" type="text" class="validate" ng-model="email">
  	<label for="icon_prefix">Email</label>
  </div>

  <div class="input-field col s6">
  	<input id="icon_prefix" type="text" class="validate" ng-model="pass">
  	<label for="icon_prefix">Password</label>
  </div>
  <button type="submit" class="btn waves-effect waves-light"><i class="material-icons right">send</i>Login</button> 
  <button type="button" class="btn btn-warning red" ng-click="signUp()"> Sign up</button>
</form>
</div>
 
 ```
 
 

 
 || For now what it will do is that on signIn() will intake email and password. ||
 
##Firebase Authentication - Controller logics. 

```javascript
 $scope.auth = $firebaseAuth();
 //setting up $firebaseAuth() service.

 ```
 
###SignIn()
```javascript
 $scope.signIn = function(){
	 $scope.auth.$signInWithEmailAndPassword($scope.email, $scope.pass).then(function(firebaseUser){
      // my logic after signing up
      $scope.result = "login Succesful!: UID = "+firebaseUser.uid;
      $scope.resultColor = 'green';
      //more logic...
	 }).catch(function(error){
        console.log("authentication Error",error);
        $scope.result = "authentication Error"+ error + "/n creating a new user..";
        $scope.resultColor = 'red';
        //more error handling 
    

	 });
}
```


###signUp()

```javascript
 $scope.signUp = function(){
    	$scope.auth.$createUserWithEmailAndPassword($scope.email, $scope.pass).then(
    		function(firebaseUser){
            // logic after sign up 
            $scope.result = "user signed up with following email" + firebaseUser.email;
               $scope.resultColor = 'green';

    	}).catch(function(error){
    		// error handling
    		$scope.result = "email already exist";
    		 $scope.resultColor = 'red';
    	});


}

```
      
      

 #ending
