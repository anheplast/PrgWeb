<?php

namespace App\Controllers;

class Categorias extends BaseController
{
    // Categoria Zapatos
    public function categoriaZapatos($categoria)
    {
        $datas = [
            'botas' => base_url('/zapatos/botas'),
            'casuales' => base_url('/zapatos/casuales'),
            'deportivos' => base_url('/zapatos/deportivos'),
        ];

        if ($categoria == 'botas') {
            return view('zapatos/botas', $datas);
        } elseif ($categoria == 'casuales') {
            return view('zapatos/casuales', $datas);
        } elseif ($categoria == 'deportivos') {
            return view('zapatos/deportivos', $datas);
        } elseif ($categoria == 'gala') { // Añadimos esta línea para manejar "gala"
            return view('zapatos/gala', $datas);
        } else {
            return 'Categoría no encontrada';
        }
    }

    // Categoria Vestidos
    public function categoriaVestidos($categoria)
    {
        $datas = [
            'gala' => base_url('vestidos/gala'),
            'nocturnos' => base_url('vestidos/nocturnos'),
            'verano' => base_url('vestidos/verano'),
        ];

        if ($categoria == 'gala') {
            return view('vestidos/gala', $datas);
        } elseif ($categoria == 'nocturnos') {
            return view('vestidos/nocturnos', $datas);
        } elseif ($categoria == 'verano') {
            return view('vestidos/verano', $datas);
        } else {
            return 'Categoría no encontrada';
        }
    }
}
