@extends('layouts.app')

@section('content')
    @if(Auth::user())
        <App :current-user="{{ Auth::user() }}"></App>
    @else
        <App></App>
    @endif
@endsection
