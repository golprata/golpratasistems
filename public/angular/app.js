'use strict'

angular.module('golprata', ['ui.router', 'golprata.controllers', 'oc.lazyLoad'])

    .config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            // Set to true if you want to see what and when is dynamically loaded
            debug: false
        });

        $stateProvider

        // setup an abstract state for the tabs directive
            .state('home', {
                url: '/home',
                templateUrl: '../../angular/templates/home.html',
                controller: 'NovelasCtrl',
                data: {pageTitle: 'dashBoarding'},
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['../../js/jquery.min.js']
                            },
                            {
                                files: ['../../dist/js/app.min.js']
                            }
                        ]);
                    }
                }
            })

            .state('novela', {
                url: '/novela',
                abstract: true,
                templateUrl: '../../angular/templates/content.html'
            })

            // Each tab has its own nav history stack:

            .state('novela.view', {
                url: '/view/:id',
                templateUrl: '../../angular/templates/view.html',
                controller: 'NovelasCtrl',
                data: {pageTitle: 'View novela'},
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['../../js/jquery.min.js']
                            },
                            {
                                files: ['../../dist/js/app.min.js']
                            }
                        ]);
                    }
                }

            })

            .state('novela.edit', {
                url: '/edit/:id',
                templateUrl: '../../angular/templates/edit.html',
                controller: 'NovelasCtrl',
                data: {pageTitle: 'Edicao novela'},
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['../js/jquery.min.js']
                            },
                            {
                                files: ['../dist/js/app.min.js']
                            }
                        ]);
                    }
                }

            })

            .state('novela.add', {
                url: '/add',
                templateUrl: '../../angular/templates/add.html',
                controller: 'NovelasCtrl',
                data: {pageTitle: 'Cadastro novela'},
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['../js/jquery.min.js']
                            },
                            {
                                files: ['../dist/js/app.min.js']
                            }
                        ]);
                    }
                }

            })

            .state('novela.list', {
                url: '/list',
                templateUrl: '../../angular/templates/home.html',
                controller: 'NovelasCtrl',
                data: {pageTitle: 'Listagem'},
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['../../../js/jquery.min.js']
                            },
                            {
                                files: ['../../../dist/js/app.min.js']
                            }
                        ]);
                    }
                }
            })

            .state('push', {
                url: '/push',
                abstract: true,
                templateUrl: '../../angular/templates/content.html'
            })

            // Each tab has its own nav history stack:

            .state('push.send', {
                url: '/send',
                templateUrl: '../../angular/templates/sendpush.html',
                controller: 'PushCtrl',
                data: {pageTitle: 'Enviar push'},
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['../../js/jquery.min.js']
                            },
                            {
                                files: ['../../dist/js/app.min.js']
                            }
                        ]);
                    }
                }

            })

        $urlRouterProvider.otherwise('/novela/list');

    })
    .directive('fileModel', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function () {
                    scope.$apply(function () {
                        modelSetter(scope, element[0].files[0]);
                    })
                })
            }
        }
    }]);
