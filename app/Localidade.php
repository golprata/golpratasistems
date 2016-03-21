<?php

namespace App_acesso;

use Illuminate\Database\Eloquent\Model;

class Localidade extends Model
{
    protected $fillable = [
        'cidade','pais_id'
    ];

    public function pais()
    {
        return $this->belongsTo('App_acesso\Pais');
    }
}
