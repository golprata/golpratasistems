<?php

namespace App_acesso\Http\Controllers;

use App_acesso\Pais;
use Illuminate\Http\Request;

use App_acesso\Http\Requests\PaisRequest;
use App_acesso\Http\Controllers\Controller;

use Illuminate\Support\Facades\Auth;

class PaisController extends Controller
{
    protected $pais;


    /**
     * PaisController constructor.
     */
    public function __construct(Pais $pais)
    {
        $this->pais = $pais;
    }

    public function index()
    {
//        $user = \App_acesso\User::find(1);
//        Auth::login($user);

        $paises = $this->pais->paginate(5);
        return view('pais/index', ['paises'=>$paises]);
    }

    public function add()
    {
        return view('pais/create');
    }


    public function store(PaisRequest $request)
    {
       $this->pais->create($request->all());

        return redirect()->route('index');
    }

    public function edit($id)
    {
        $pais = $this->pais->find($id);

        return view('pais/edit', ['pais' => $pais]);
    }

    public function update($id, PaisRequest $request)
    {
        $this->pais->find($id)->update($request->all());

        return redirect()->route('index');
    }

    public function destroy($id)
    {
        $this->pais->find($id)->delete();

        return redirect()->route('index');
    }

}
