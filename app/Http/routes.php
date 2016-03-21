<?php

Route::group(['middleware' => 'web'], function () {
    Route::auth();

    Route::get('/view', function () {
        return view('view_auth');
    });

    Route::group(['prefix' => '/feedsnovela', 'middleware' => ['web', 'auth']], function () {

            Route::get('/', function () {
                return view('novelaview');
            });

    });



    Route::get('/', function () {
        return view('novelaview');
    });


    Route::group(['prefix' => '/apiRest', 'middleware' => ['web', 'cors']], function () {

        Route::get('/categoria', ['as' => 'index', 'uses' => 'CategoriaController@index']);

        Route::get('/categoria/{id}', ['as' => 'find', 'uses' => 'CategoriaController@find']);

        Route::post('/categoria', ['as' => 'store', 'uses' => 'CategoriaController@store']);

//        Route::put('/categoria/{id}', ['as' => 'update', 'uses' => 'CategoriaController@update']);

        Route::delete('/categoria/{id}', ['as' => 'destroy', 'uses' => 'CategoriaController@destroy']);

        Route::get('/pais', ['as' => 'index', 'uses' => 'PaisController@index']);

        Route::get('/localidade', ['as' => 'store', 'uses' => 'LocalidadeController@index']);

        //  novelas
        Route::get('/novela', ['as' => 'index', 'uses' => 'NovelaController@index']);

        Route::get('/novela/{id}', ['as' => 'find', 'uses' => 'NovelaController@find']);

        Route::put('/novela/{id}', ['as' => 'update', 'uses' => 'NovelaController@update']);

        Route::delete('/novela/{id}', ['as' => 'destroy', 'uses' => 'NovelaController@destroy']);

        Route::post('/novela', ['as' => 'store', 'uses' => 'NovelaController@store']);


    });

});
