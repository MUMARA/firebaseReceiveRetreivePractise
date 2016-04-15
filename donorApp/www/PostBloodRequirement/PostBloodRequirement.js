angular.module('starter')
  .controller("PostBloodRequirementCtrl", function ($scope,$rootScope) {

    var ref = new Firebase("https://umrsalesman.firebaseio.com/web/saving-data/fireblog");
    $scope.sendToFirebase = function (postDetails) {
      $rootScope.postData = postDetails;
      //console.log('postDetails is', postDetails);

      var usersRef = ref.child("postBloodRequirement");
      usersRef.set(postDetails);
    }
  });
