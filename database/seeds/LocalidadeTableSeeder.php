<?php

use Illuminate\Database\Seeder;

class LocalidadeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App_acesso\Localidade::truncate();
    }
}
