@extends('layouts.app')

@section('content')
   <div class="container">
       <div id="root">
       </div>
       <br>
        <div class="row">
            <div class="col-md-6">

                <div class="card">
                    <div class="card-header">
                        Following
                    </div>
                    <div class="card-body">
                        @foreach($following as $user)
                            <a href="users/{{$user->username}}">{{$user->username}}</a>
                        @endforeach
                    </div>
                </div>
            </div> 
            <div class="col-md-6 float-right">
                <div class="card">
                    <div class="card-header">
                        Followers
                    </div>
                    <div class="card-body">
                        @foreach($followers as $user)
                            <a href="users/{{$user->username}}">{{$user->username}}</a>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
      
   </div>

@endsection
