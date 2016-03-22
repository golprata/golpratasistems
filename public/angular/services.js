'use strict'

angular.module('golprata.services',['ngResource'])
    .factory('NovelasSrv', ['$resource',
        function($resource) {
            return $resource(
                'http://boiling-plateau-59239.herokuapp.com/apiRest/novela/:id', {
                    id: '@id'
                },
                {
                    update: {
                        method: 'PUT',
                        url: '/apiRest/novela/:id/'
                    },
                    delete: {
                        method: 'DELETE',
                        url: '/apiRest/novela/:id/'
                    }
                }
            );
        }]
    )
    .factory('ProdutosSrv', ['$resource',
        function($resource) {
            return $resource(
                '/apiRest/produto/:id', {
                    id: '@id'
                },
                {
                    update: {
                        method: 'PUT',
                        url: '/apiRest/produto/:id/'
                    },
                    delete: {
                        method: 'DELETE',
                        url: '/apiRest/produto/:id/'
                    }
                }
            );
        }]
    )
    .service('multipartForm', ['$http', function($http){
        this.post = function(uploadUrl, data){
            var fd = new FormData();
            for(var key in data)
                fd.append(key, data[key]);
            $http.post(uploadUrl, fd, {
                transformRequest: angular.indentity,
                headers: { 'Content-Type': undefined }
            });
        }
    }]);