<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

class HomeController extends Controller
{
    // Display home page
    public function show (){
        return Inertia::render('Home');
    }
}
