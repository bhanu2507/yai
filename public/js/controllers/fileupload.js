'use strict';


angular.module('yogaalliance')
        .controller('fileUploadCtrl', ['$scope', 'fileUpload', function($scope, fileUpload) {
            $scope.uploadFile = function(){
                var file = $scope.myFile;
                
                console.log('file is ' );
                console.dir(file);
                
                var uploadUrl = "/kriyoga";
                fileUpload.uploadFileToUrl(file, uploadUrl);
             };
        }])