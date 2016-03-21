<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App_acesso\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App_acesso\Pais::class, function (Faker\Generator $faker) {
    return [
        'descricao' => $faker->word,
        'nacionalidade' => $faker->word,
    ];
});

$factory->define(App_acesso\Localidade::class, function (Faker\Generator $faker) {
    return [
        'cidade' => $faker->word,
        'pais_id' => $faker->word,
    ];
});

$factory->define(App_acesso\Categoria::class, function (Faker\Generator $faker) {
    return [
        'nome' => $faker->word,
    ];
});
