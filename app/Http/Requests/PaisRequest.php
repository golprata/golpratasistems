<?php

namespace App_acesso\Http\Requests;

use App_acesso\Http\Requests\Request;

class PaisRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'descricao'=> 'required|min:3',
            'nacionalidade'=> 'required'
        ];
    }
}
