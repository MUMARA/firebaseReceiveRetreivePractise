angular.module('starter')
  .controller("feedCtrl", function ($scope, $rootScope) {
var ref = new Firebase("https://umrsalesman.firebaseio.com/web/saving-data/fireblog");

    $scope.volunteerFunction = function (volunteerData) {

      var usersRef = ref.child("volunteer");
      usersRef.set(volunteerData);

      ref.on("value", function(snapshot) {
        console.log(snapshot.val());
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    };
    $scope.commentFunction = function (commentData) {
      var usersRef = ref.child("comments");
      usersRef.set(commentData);
    };
  });
