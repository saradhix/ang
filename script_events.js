var myApp = angular.module("myModule",[]);

var myController = function($scope)
{
    $scope.message = "My controller";
    $scope.cx = 0;
    var technologies=[
    {name: "C", likes:10, dislikes:8},
    {name: "Java", likes:1, dislikes:18},
    {name: "Postgres", likes:100, dislikes:2},
    {name: "MQTT", likes:10, dislikes:3}
    ];
    $scope.technologies = technologies;

    $scope.incrementlikes = function(technology)
    {
        technology.likes++;
    }
    $scope.incrementdislikes = function(technology)
    {
        technology.dislikes++;
    }

    $scope.increment = function()
    {
        $scope.cx++;
    }
    
}

myApp.controller("myController", myController);

