'use strict';



angular.module('yogaalliance')
    .controller('SchoolRegCtrl', function ($scope, $http) {
    $scope.createSchool = function () {

        var data = $.param({
            name: $scope.schoolName,
            owner: $scope.ownerName,
            qual: $scope.qualify,
            add: $scope.address,
            tnc: $scope.TandC,
            pcode: $scope.postCode,
            tel: $scope.tel,
            fax: $scope.fax,
            mail: $scope.email,
            web: $scope.website,
            desc: $scope.desc,
            ylink: $scope.youtubelink,
            logo: $scope.logo
        });
        $http.post('/putschool?' + data)
            .then(function (result) {
                $scope.regis = true;
                $scope.sid = result.data.insertId;
                console.log(result.data.insertId);
            });
    }

    });

