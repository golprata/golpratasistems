<?php

namespace App_acesso\Http\Controllers;

use App_acesso\Categoria;
use Illuminate\Http\Request;

use App_acesso\Http\Requests\CategoriaRequest;
use App_acesso\Http\Controllers\Controller;

class CategoriaController extends Controller
{
    protected $categoria;

    /**
     * CategoriaController constructor.
     * @param $categoria
     */
    public function __construct(Categoria $categoria)
    {
        $this->categoria = $categoria;
    }


    public function index()
    {
        $categorias = $this->categoria->All();
        return response()->json($categorias);
    }

    public function store(CategoriaRequest $request)
    {
        $this->categoria->create($request->all());

        return response()->json(array('success'=>true));
    }

    public function find($id)
    {
        $categoria = $this->categoria->find($id);

        return response()->json($categoria);
    }

    public function update($id, CategoriaRequest $request)
    {
        $this->categoria->find($id)->update($request->all());

        return response()->json(array('success'=>true));
    }

    public function destroy($id)
    {
        $this->categoria->find($id)->delete();

        return response()->json(array('success'=>true));
    }
}
