<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class TimeLineController extends Controller
{
    public function index(){
        $following =Auth::User()->following;
        $followers =Auth::User()->followers;
        return view('home',compact('following','followers'));
    }
}
