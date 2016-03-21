'use strict'

angular.module('myApp.services',['ngResource'])
    .factory('CategoriasSrv', ['$resource',
        function($resource) {
            return $resource(
                '/apiRest/categoria/:id', {
                    id: '@id'
                },
                {
                    update: {
                        method: 'PUT',
                        url: '/apiRest/categoria/:id/'
                    },
                    delete: {
                        method: 'DELETE',
                        url: '/apiRest/categoria/:id/'
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
    );