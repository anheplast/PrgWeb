<?php

namespace App\Controllers;

use App\Models\UsuarioModelo;
use CodeIgniter\Controller;

class Home extends Controller
{
    public function index()
    {
        $usuarioModelo = new UsuarioModelo();
        $usuarios = $usuarioModelo->obtenerUsuariosConRoles();

        $data = [
            'usuarios' => $usuarios
        ];

        return view('usuarios', $data);
    }
}
