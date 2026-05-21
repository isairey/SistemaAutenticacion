app.controller('adminCtrl', function ($scope,$firebaseAuth,$firebaseObject,$firebaseArray) {
            const db   = firebase.database().ref(); 
             const users = firebase.database().ref().child('users');
            let vcard = db.child('users').child(0).child('vcard');
      
       $scope.userArr = $firebaseArray(users);
        $scope.auth = $firebaseAuth();
       $scope.storagePath = "gs://one-link-921d7.appspot.com";
       $scope.userInput = 'user1';
   
      

       const storageRef = firebase.storage().ref();
       var imageRef = storageRef.child('ain.jpg');
       $scope.st = imageRef;      
        $scope.x= $firebaseObject(vcard);

});