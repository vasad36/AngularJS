/*Multiple controller*/
var app = angular.module('DemoApp', []);

app.controller('DemoController', function ($scope) {
    $scope.tutorialName = "Angular JS";
    $scope.msg = "This is Test Variable!";

});

app.controller('DemoController', function ($scope) {
    $scope.fname = "Alpesh";
    $scope.lname = "Patanwadia";
    var fname1 = $scope.fname;
    var lname1 = $scope.lname;
    $scope.fullname = function (fname1, lname1) {
        return fname1 + lname1;
    }
  
});