
app.controller('homeCtrl', function ($scope,$rootScope,$firebaseAuth,$firebaseObject,
  $location,$state,$firebaseArray) {
 
// main Database reference
 const db   = firebase.database().ref();
 const users = db.child('users');
 const vCard = users.child('vCard');

   // Get single user data 
   let User = $firebaseObject(users);
   $scope.userArr = $firebaseArray(users);

  // THIS IS HOW YOU CREATE A FIREBASE AUTH AND FIREBASE DB.
  //Thankyou 

 // predefine variables
 $scope.full_name ='';
 $scope.email = '';
 $scope.phone = null;
 $scope.cnic = null;

// authentication
 $scope.auth = $firebaseAuth();


$scope.afterLogin = function(){
    $rootScope.hideX = true;
    $rootScope.showX = true;
      if($rootScope.status === 'valid'){
              $state.go('adminControl');
        } else {
          $scope.result ='error , Unable to access admin panel';
        }

  }


  $scope.afterSignUp = function(){
           
       users.child($scope.name).set({   /*create new user*/   
                name:$scope.name,
                email:$scope.email,
                cnic:$scope.cnic,
                phone:$scope.phone,
                studentId:studentId,
                gendar:gendar,
                university:$scope.university,
                address:$scope.address
               });

           $state.go('userControl');  
        

  }
// Works if the user exists in our Firebase Authentication User list. 

$scope.signIn = function(){
	 $scope.auth.$signInWithEmailAndPassword($scope.email, $scope.password).then(function(firebaseUser){
      // my logic after sign In 
      $scope.result = "login Succesful!: UID = "+firebaseUser.uid;
      $scope.resultColor = 'green';     
      $rootScope.Activestatus = 'valid';
      $scope.afterLogin();

      //more logic...
	 }).catch(function(error){
        console.log("authentication Error",error);
        $scope.result = "authentication Error "+ error ;
        $scope.resultColor = 'red';
        //more error handling 
    

	 });
}

    $scope.signUp = function(){
    	$scope.auth.$createUserWithEmailAndPassword($scope.email, $scope.pass).then(
    		function(firebaseUser){
            // logic after sign up 
            $scope.result = "user signed up with following email" + firebaseUser.email + firebaseUser.uid;
                $scope.uid = firebaseUser.uid;
                $rootScope.Activestatus = 'valid';
               $scope.resultColor = 'green';
               $scope.afterSignUp();



    	}).catch(function(error){
    		// error handling
    		$scope.result = "Error : "+error;
    		 $scope.resultColor = 'red';
    	});


}

  
  
   
});


/*how DOES Firebas eAUthentication Works ? 

So when the user Sign Up , 
User is asigned a special unique ID. 
This ID is what returned of the user. 


>>Database Strategy 
> So we cna do this as whenever signup, create a field in database, and saves its unique ID. 
once unique id is saved in database, that user can have more credentials. 


*/