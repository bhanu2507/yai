'use strict';


angular.module('yogaalliance')
        .controller('fileUploadCtrl', ['$scope', 'fileUpload', function($scope, fileUpload, $location) {
            $scope.uploadFile = function(){
                var file = $scope.myFile;
                
                console.log('file is ' );
                console.dir(file);
                console.log($location);
                var uploadUrl = "https://www.googleapis.com/upload/storage/v1/b/kriyoga/o?uploadType=media";
                fileUpload.uploadFileToUrl(file, uploadUrl);
             };
        }])