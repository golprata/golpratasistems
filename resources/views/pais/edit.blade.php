@extends('template')

@section('content')

    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">Editando: {{$pais->descricao}}</h3>

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
            @if($errors->any())

                <ul class="alert">
                    @foreach($errors->all() as $error)
                        <li>{{$error}}</li>
                    @endforeach
                </ul>

            @endif

            {!! Form::model($pais, ['route'=>['update', $pais->id] , 'method'=>'put']) !!}

            @include('pais._form')

            <div class="form-group">
                {!! Form::submit('Salvar', ['class'=>'btn btn-primary ']) !!}
            </div>


            {!! Form::close() !!}


        </div>
        <!-- /.box-body -->
    </div>
    <!-- /.box -->

@endsection