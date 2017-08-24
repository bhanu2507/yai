'use strict';



angular.module('yogaalliance')
    .controller('TrainerRegCtrl', function ($scope, $http) {
    $scope.createTrainer = function () {

        var data = $.param({
            name: $scope.trainerName,
            qual: $scope.qualify,
            add: $scope.address,
            tnc: $scope.TandC,
            pcode: $scope.postCode,
            tel: $scope.tel,
            fax: $scope.fax,
            mail: $scope.email,
            web: $scope.website,
            desc: $scope.desc,
            ylink: $scope.youtubelink
        });
        $scope.puttrainer = true;
        $http.post('/puttrainer?' + data)
            .then(function (result) {
                $scope.puttrainer = false;
                $scope.regit = true;
                $scope.sid = result.data.insertId;
                console.log(result.data.insertId);
            });
    }

    });

