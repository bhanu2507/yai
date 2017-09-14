'use strict';



angular.module('yogaalliance')
    .controller('TrainerListCtrl', function ($scope, $http) {

        $http.get('/listtrainers')
            .then(function (result) {
                console.log(result);
                $scope.trainers = result.data;
            });
        $scope.currentPage = 0;
        $scope.pageSize = 5;
        $scope.data = [];
        $scope.numberOfPages=function(){
            return Math.ceil($scope.schools.length/$scope.pageSize);
        }
        for (var i=0; i<45; i++) {
            $scope.data.push("Item "+i);
        }
    });

