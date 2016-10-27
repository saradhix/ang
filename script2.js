var myApp = angular.module("myModule",[]);

var myController = function($scope)
{
    $scope.message = "My controller";
    var employees=[
    { name:"Vijay", age:20},
    { name:"SUbbu", age:30},
    { name:"Sandy", age:40}
    ];
    $scope.employees=employees;
    
}

myApp.controller("myController", myController);

