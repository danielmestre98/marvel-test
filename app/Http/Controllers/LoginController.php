<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;

class LoginController extends Controller
{
    function index(): Response
    {
        return Inertia('Login');
    }

    function register(): Response
    {
        return Inertia('Register');
    }
}
