@extends('layouts.app')

@section('content')
    <div id="posts" class="container">
    <h1>{{Auth::user()->username}}</h1>
        @if(Auth::user()->isNotTheUser($user))
            @if(Auth::user()->isFollowing($user))
                <a href="{{route('users.unfollow',$user)}}">unfollow {{$user->username}}</a>
            @else
                <a href="{{route('users.follow',$user)}}">follow {{$user->username}}</a>
            @endif
         @endif

    </div>
@endsection