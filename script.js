var myApp = angular.module("myModule",[]);

var myController = function($scope)
{
    $scope.message = "My controller";
}

myApp.controller("myController", myController);

var myController1 = function($scope)
{
    $scope.message = "Mycontroller1";
}
myApp.controller("myController1", myController1);
