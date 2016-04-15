var app = angular.module('starter', ['ionic', 'ui.router']);


app.config(function ($stateProvider) {
  $stateProvider
    .state("signUp", {
      url: "/signUp",
      templateUrl: "signUp/signUp.html",
      controller: "signUpCtrl"
    })
    .state("signIn", {
      url: "/signIn",
      templateUrl: "signIn/signIn.html",
      controller: "signInCtrl"
    })
    .state("PostBloodRequirement", {
      url: "/PostBloodRequirement",
      templateUrl: "PostBloodRequirement/PostBloodRequirement.html",
      controller: "PostBloodRequirementCtrl"
    })
    .state("feed", {
      url: "/feed",
      templateUrl: "feed/feed.html",
      controller: "feedCtrl"
    })
});

