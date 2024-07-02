<?php

namespace App\Controllers;

class controlleruno extends BaseController
{
    public function metodo1(): string
    {
        return view('hoja1');
    }
    public function metodo2(): string
    {
        return view('hoja2');
    }
}