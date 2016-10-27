var myApp = angular.module("myModule",[]);

var myController = function($scope)
{
    $scope.message = "My controller";
    var employee = { firstname: "Vijay", lastname: "Indurthi", gender:"Male"};
    $scope.employee = employee;
}

myApp.controller("myController", myController);

var myController1 = function($scope)
{
    $scope.message = "Mycontroller1";
}
myApp.controller("myController1", myController1);
