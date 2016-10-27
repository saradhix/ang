var myApp = angular.module("myModule",[]);

var myController = function($scope)
{
    $scope.message = "My controller";
    
}

myApp.controller("myController", myController);

