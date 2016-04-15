angular.module('starter')
  .controller("signUpCtrl", function ($scope, $rootScope) {

    $scope.newUser = {};

    $scope.submit = function (newUser) {
      $rootScope.signUpValues = $scope.newUser;
      console.log('signUpValues is', $rootScope.signUpValues)
      console.log('newUser', newUser);
      var ref = new Firebase("https://umrsalesman.firebaseio.com");
      ref.createUser({
        email: newUser.email,
        password: newUser.password
      }, function (error, userData) {
        if (error) {
          switch (error.code) {
            case "EMAIL_TAKEN":
              console.log("The new user account cannot be created because the email is already in use.");
              break;
            case "INVALID_EMAIL":
              console.log("The specified email is not a valid email.");
              break;
            default:
              console.log("Error creating user:", error);
          }
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
        }
      });
    }
  });
