'use strict';



angular.module('yogaalliance')
    .controller('SchoolRegCtrl', function ($scope, $http) {
    $scope.createSchool = function () {
        let name = $scope.schoolName;
        let owner = $scope.ownerName;
        let qual = $scope.qualify;
        var data = $.param({
            name: $scope.schoolName,
            env: env,
            now: now,
            ver: ver,
            unm: uname,
            fla: fla,
            img: img,
            tenant: tenant,
            cmt: cmnts,
            edt: enddate,
            rnm: rname,
            rem: rmail
        });
        $http.post('/putschool?' + data)
            .then(function (result) {
                $scope.rform = false;
                $scope.result = result.data;
                console.log($scope.result.insertId);
            });
    }

    });