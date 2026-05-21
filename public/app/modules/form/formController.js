

app.controller('formCtrl', function ($scope,$firebaseArray) {

// add reference to firebase
  let ref = firebase.database().ref().child("users");

// save data to local object
   $scope.myData = $firebaseArray(ref);
     

  $scope.arr = [];

     $scope.submission = function(){
     	  $scope.pushData();
     	  $scope.pushFirebase();



     	  
     }



     $scope.pushData = function(){
            
          if ($scope.form.first_name && $scope.form.cnic && $scope.form.phone) {
          $scope.arr.push(this.form.first_name);
          $scope.arr.push(this.form.last_name);
          $scope.arr.push(this.form.cnic);
          $scope.arr.push(this.form.phone);
          $scope.arr.push(this.form.email);
          $scope.arr.push(this.form.address);
          $scope.arr.push(this.form.tickets);

        } else {
        	$scope.errMsg = "Please enter all details";
        }

     }
	   
	   $scope.keys = ['first_name','last_name','cnic','phone',
	   'email','address','tickets'];


	   $scope.pushFirebase = function(){
	   	$scope.myData.$add({
	   		first_name: $scope.arr[0],
	   		last_name: $scope.arr[1],
	   		cnic: $scope.arr[2],
	   		phone: $scope.arr[3],
	   		email: $scope.arr[4],
	   		address: $scope.arr[5],
	   		tickets: $scope.arr[6]
	    	

	   	}
	   	);
	   	$scope.myData.$uniqueid
	   	       

	   	       }





});