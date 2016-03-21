<?php

namespace App_acesso\Http\Controllers;

use App_acesso\Novela;
use Illuminate\Http\Request;

use App_acesso\Http\Requests;
use App_acesso\Http\Controllers\Controller;

class NovelaController extends Controller
{
    protected $novela;

    /**
     * NovelaController constructor.
     */
    public function __construct(Novela $novela)
    {
        $this->novela = $novela;
    }

    public function index()
    {
        $novelas = $this->novela->All();
        return response()->json($novelas);
    }

    public function store(Request $request)
    {
        if ($request->hasFile('file')) {

            $file = $request->file('file');

            $ext = explode('/', $file->getClientMimeType());

            $novela = $this->novela->create($request->all());

            $destinationPath = 'angular/images/';
            $request->file('file')->move($destinationPath, $novela->id . '.' . $ext[1]);

            $novela->imagem = $destinationPath . $novela->id . '.' . $ext[1];
            $novela->save();

            return response()->json(array('success'=>true));
        }

    }

    public function find($id)
    {
        $novela = $this->novela->find($id);

        return response()->json($novela);
    }

    public function update($id, Request $request)
    {
        $this->novela->find($id)->update($request->all());

        return response()->json(array('success'=>true));
    }

    public function destroy($id)
    {
        $this->novela->find($id)->delete();

        return response()->json(array('success'=>true));
    }

    public function adminIndex()
    {
        $novelas = $this->novela->All();
        return view('adminlte/index', ['novelas'=>$novelas]);
    }
}
