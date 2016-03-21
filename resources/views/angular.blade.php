<!doctype html>
<html ng-app="myApp">
<head>
    <meta charset="UTF-8" />
    <title>ZF2+Angular</title>
    <link href="{{asset('css/bootstrap.min.css')}}" media="screen" rel="stylesheet" type="text/css" />
</head>
<body>

<!-- Wrap all page content here -->
<div id="wrap">

    <!-- Fixed navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">School of Net</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="#/categorias">Categorias</a></li>
                    <li><a href="#/produtos">Produtos</a></li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </div>

    <div class="container">
        <div class="page-header">
            <div ng-include="projetoangular/templates/header.html"></div>
            <br/>
            <div ng-view></div>
        </div>
    </div>


    <div id="footer">
        <div class="container">
            <p class="text-muted credit">School of Net.</p>
        </div>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-route.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-resource.min.js"></script>
<script src="{{asset('projetoangular/app.js')}}"></script>
<script src="{{asset('projetoangular/controllers.js')}}"></script>
<script src="{{asset('projetoangular/services.js')}}"></script>

</body>
</html>