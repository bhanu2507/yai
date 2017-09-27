'use strict';


angular.module('yogaalliance')
        .controller('fileUploadCtrl', ['$scope', 'fileUpload', function($scope, fileUpload, $location) {
            $scope.uploadFile = function(){
                var file = $scope.myFile;
                
                console.log('file is ' );
                console.dir(file);
                console.log($location.path);
                var uploadUrl = "../kriyoga";
                fileUpload.uploadFileToUrl(file, uploadUrl);
             };
        }])