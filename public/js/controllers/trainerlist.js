'use strict';



angular.module('yogaalliance')
    .controller('TrainerListCtrl', function ($scope, $http) {

        $http.get('/listtrainers')
            .then(function (result) {
                console.log(result.data);
            });

    });

