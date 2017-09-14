'use strict';



angular.module('yogaalliance')
    .controller('SchoolListCtrl', function ($scope, $http) {

        $http.get('/listschools')
            .then(function (result) {
                console.log(result);
                $scope.schools = result.data;
            });
        $scope.currentPage = 0;
        $scope.pageSize = 10;
        $scope.data = [];
        $scope.numberOfPages=function(){
            return Math.ceil($scope.schools.length/$scope.pageSize);
        }
        for (var i=0; i<45; i++) {
            $scope.data.push("Item "+i);
        }


    })
    .filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            if (input != 'undefined') {
                return input.slice(start);
            }
        }
    });