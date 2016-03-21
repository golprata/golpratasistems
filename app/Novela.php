<?php

namespace App_acesso;

use Illuminate\Database\Eloquent\Model;

class Novela extends Model
{
    protected $fillable = [
        'titulo', 'imagem', 'rss'
    ];
}
