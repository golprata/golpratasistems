<?php

namespace App_acesso;

use Illuminate\Database\Eloquent\Model;

class Pais extends Model
{
    protected $fillable = [
        'descricao', 'nacionalidade',
    ];

    public function cidade()
    {
        return $this->hasMany('App_acesso\Localidade', 'pais_id');
    }
}
