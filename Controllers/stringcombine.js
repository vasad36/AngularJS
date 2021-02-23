var app = angular.module('TestApp', []);

app.controller('cont_Add', function ($scope) {

    
    $scope.secondvar = function () {
        $scope.returnval = $scope.val1 + $scope.val2;
        return returnval;
    }

});


