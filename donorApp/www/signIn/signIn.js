var app = angular.module('starter');
app.controller("signInCtrl", function ($scope) {

  $scope.dologin = function (signIn) {
    console.log('signIn',signIn);
    var ref = new Firebase("https://umrsalesman.firebaseio.com");

   ref.authWithPassword({
 "email": signIn.email,
 "password": signIn.password
 }, function (error, authData) {
 if (error) {
 console.log("Login Failed!", error);
 res.status(401);
 res.send("signin failed");
 } else {
 console.log("Authenticated successfully with payload:", authData);

 }
 });



  };


});
