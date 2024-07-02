<?php

namespace App\Models;

use CodeIgniter\Model;

class UsuarioModelo extends Model
{
    protected $table = 'tbl_usuarios';
    protected $primaryKey = 'usu_id';

    protected $allowedFields = [
                                'usu_id',
                                'usu_nombre', 
                                'usu_apellido', 
                                'usu_correo', 
                                'rol_id'
                                ];

    public function obtenerUsuariosConRoles()
    {
        return $this->select('
                            tbl_usuarios.usu_id, 
                            tbl_usuarios.usu_nombre, 
                            tbl_usuarios.usu_apellido, 
                            tbl_usuarios.usu_correo, 
                            tbl_roles.rol_descripcion, 
                            tbl_roles.rol_estado
                            ')
                            ->join(
                                'tbl_roles', 
                                'tbl_roles.rol_id = tbl_usuarios.rol_id', 
                                'left'
                                )
                            ->findAll();
    }
}
