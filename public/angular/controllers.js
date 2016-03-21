'use strict'

angular.module('golprata.controllers', ['golprata.services'])
    .controller('NovelasCtrl',
        ['$scope', 'NovelasSrv', 'multipartForm', '$location', '$stateParams',
            function ($scope, NovelasSrv, multipartForm, $location, $stateParams) {

                $scope.novela = {};
                $scope.Submit = function () {
                    console.log($scope.novela);
                    var uploadUrl = 'http://localhost:8080/apiRest/novela/';
                    multipartForm.post(uploadUrl, $scope.novela);
                }

                $scope.load = function () {
                    $scope.novelas = NovelasSrv.query();
                    console.log($scope.novelas);
                }

                $scope.get = function () {

                    $scope.novela = NovelasSrv.get({id: $stateParams.id});
                    console.log($scope.novela);
                }

                $scope.add = function (item) {
                    $scope.result = NovelasSrv.save(
                        {},
                        item,
                        function (data, status, headers, config) {
                            $location.path('/categorias/');
                        },
                        function (data, status, headers, config) {
                            alert('Erro ao inserir registro: ' + data.messages[0]);
                        }
                    )
                }

                $scope.editar = function (item) {
                    console.log(item);
                    $scope.result = NovelasSrv.update(
                        {id: $stateParams.id},
                        item,
                        function (data, status, headers, config) {
                            $location.path('/novela/list/');
                        },
                        function (data, status, headers, config) {
                            alert('Erro ao inserir registro: ' + data.messages[0]);
                        }
                    )
                }

                $scope.delete = function (id) {
                    if (confirm('Deseja realmente excluir esse registro?')) {
                        NovelasSrv.delete(
                            {id: id},
                            {},
                            function (data, status, headers, config) {
                                $location.path('/novela/list/');
                            },
                            function (data, status, headers, config) {
                                alert('Erro ao inserir registro: ' + data.messages[0]);
                            }
                        )
                    }
                }

            }
        ]
    )

    .controller('PushCtrl',
        ['$scope', '$http', '$location', '$stateParams',
            function ($scope, $http, $location, $stateParams) {

                $scope.push = {};

                $scope.Submit = function () {
                    console.log('Enviando...');
                    // Define relevant info

                    // Define relevant info
                    var privateKey = 'b20c907f64da19f5f3736e4ed4071f8dc20b1ff9dd77c0b6';
                    var tokens = [$scope.push.tokien];//['f6bdf032-3c84-4c7d-a3bc-f68b838b84f5'];
                    var appId = 'd8735a96';

// Encode your key
                    var auth = btoa(privateKey + ':');

// Build the request object
                    var req = {
                        method: 'POST',
                        url: 'https://push.ionic.io/api/v1/push',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Ionic-Application-Id': appId,
                            'Authorization': 'basic ' + auth
                        },
                        data: {
                            "tokens": tokens,
                            "notification": {
                                "alert":$scope.push.mensagem
                            }
                        }
                    };

// Make the API call
                    $http(req).success(function(resp){
                        // Handle success
                        console.log("Ionic Push: Push success!");
                    }).error(function(error){
                        // Handle error
                        console.log("Ionic Push: Push error...");
                    });

                }

            }
        ]
    )

    .controller('ProdutosCtrl',
        ['$scope', 'ProdutosSrv', 'CategoriasSrv', '$location', '$routeParams',
            function ($scope, ProdutosSrv, CategoriasSrv, $location, $routeParams) {
                $scope.nome = "Wesley";
                $scope.nome = "Fabiano Costa";

                $scope.load = function () {
                    $scope.registros = ProdutosSrv.query();
                }

                $scope.getCategorias = function () {
                    $scope.categorias = CategoriasSrv.query();
                }
                $scope.getCategorias();

                $scope.get = function () {
                    $scope.item = ProdutosSrv.get({id: $routeParams.id});
                }

                $scope.add = function (item) {
                    $scope.result = ProdutosSrv.save(
                        {},
                        item,
                        function (data, status, headers, config) {
                            $location.path('/produtos/');
                        },
                        function (data, status, headers, config) {
                            alert('Erro ao inserir registro: ' + data.messages[0]);
                        }
                    )
                }

                $scope.editar = function (item) {
                    $scope.result = ProdutosSrv.update(
                        {id: $routeParams.id},
                        item,
                        function (data, status, headers, config) {
                            $location.path('/produtos/');
                        },
                        function (data, status, headers, config) {
                            alert('Erro ao inserir registro: ' + data.messages[0]);
                        }
                    )
                }

                $scope.delete = function (id) {
                    if (confirm('Deseja realmente excluir esse registro?')) {
                        ProdutosSrv.delete(
                            {id: id},
                            {},
                            function (data, status, headers, config) {
                                $location.path('/produtos/');
                            },
                            function (data, status, headers, config) {
                                alert('Erro ao inserir registro: ' + data.messages[0]);
                            }
                        )
                    }
                }

            }
        ]
    )
;