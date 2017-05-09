<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PostFormRequest;

class PostController extends Controller
{
    public function store(PostFormRequest $request)
    {
        return ['msg' => 'done'];
    }
}
