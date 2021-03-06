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
        .service('fileUpload', ['$http', function($http) {
            this.uploadFileToUrl = function(file, uploadUrl){
                var fd = new FormData();
                fd.append('file', file);
             
                $http.post(uploadUrl, fd, {
                   //transformRequest: angular.identity,
                   headers: {
                                'Content-Type': 'image/jpeg',
                                'Authorization': 'Bearer '+ 'AIzaSyCh-H9fxZXaR43dQQgg4FIwLWpAX2L5C7E'
                            }
                })
                .then(function(msg){
                    console.log(msg);
                }, function (error) {
                    console.log(error);
                });
             }            
        }])
