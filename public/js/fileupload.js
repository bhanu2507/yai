'use strict';

angular.module('yogaalliance')
        .directive('fileModel', ['$parse', function($parse) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var model = $parse(attrs.fileModel);
                    var modelSetter = model.assign;
                    
                    element.bind('change', function(){
                       scope.$apply(function(){
                          modelSetter(scope, element[0].files[0]);
                       });
                    });
                 }                
            };
        }]);

angular.module('yogaalliance')
        .service('fileUpload', ['$https:', function($https) {
            this.uploadFileToUrl = function(file, uploadUrl){
                var fd = new FormData();
                fd.append('file', file);
             
                $https.post(uploadUrl, fd, {
                   transformRequest: angular.identity,
                   headers: {'Content-Type': undefined}
                })
             
                .success(function(){
                })
             
                .error(function(){
                });
             }            
        }])
