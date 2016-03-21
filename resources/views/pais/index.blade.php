@extends('template')

@section('content')

    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">Tabela de Países</h3>

            <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                        title="Collapse">
                    <i class="fa fa-minus"></i></button>
                <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip"
                        title="Remove">
                    <i class="fa fa-times"></i></button>
            </div>
        </div>
        <div class="box-body">
            <a class="btn btn-success" href="create"><i class="fa fa-plus"></i> Adicionar</a> <br><br>

            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Descrição</th>
                    <th>Nacionalidade</th>
                    <th>Data de Cadastro</th>
                    <th>Data de Edição</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                @foreach($paises as $pais)
                    <tr>
                        <td>{{$pais->id}}</td>
                        <td>{{$pais->descricao}}</td>
                        <td>{{$pais->nacionalidade}}</td>
                        <td>{{$pais->created_at}}</td>
                        <td>{{$pais->updated_at}}</td>
                        <td>
                            <a class="btn btn-xs btn-default" href="{{route('edit',['id'=>$pais->id])}}"><i class="fa fa-pencil"></i></a>
                            <a class="btn btn-xs btn-default" href="{{route('destroy',['id'=>$pais->id])}}"><i class="fa fa-eraser"></i></a>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
            <div>{{ $paises->render() }}</div>

        </div>
        <!-- /.box-body -->

    </div>
    <!-- /.box -->

@endsection