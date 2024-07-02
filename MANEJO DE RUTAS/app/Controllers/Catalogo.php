<?php

namespace App\Controllers;

class Catalogo extends BaseController
{
    public function home()
    {
        return view('catalogo/catalogo');
    }

    public function catalogo($ropa)
    {
        $datos = [
            'zapatos' => base_url('zapatos'),
            'vestidos' => base_url('vestidos'),
        ];

        if ($ropa == 'zapatos') {
            return view('zapatos/catZapatos', $datos);
        } elseif ($ropa == 'vestidos') {
            return view('vestidos/catVestidos', $datos);
        } else {
            return 'Categoría no encontrada';
        }
    }
}
