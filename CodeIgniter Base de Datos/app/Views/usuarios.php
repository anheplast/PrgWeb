<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Usuarios y Roles</title>
    <link rel="stylesheet" href="public/usuario.css"> 
</head>
<body>
    <div class="container">
        <h2>Usuarios y Roles</h2>
        <table>
            <thead>
                <tr>
                    <th>Usuario ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Rol Descripción</th>
                    <th>Rol Estado</th> 
                </tr>
            </thead>
            <tbody>
                <?php foreach ($usuarios as $usuario): ?>
                    <tr>
                        <td><?= $usuario['usu_id']; ?></td>
                        <td><?= $usuario['usu_nombre']; ?></td>
                        <td><?= $usuario['usu_apellido']; ?></td>
                        <td><?= $usuario['usu_correo']; ?></td>
                        <td><?= $usuario['rol_descripcion']; ?></td>
                        <td><?= $usuario['rol_estado']; ?></td> 
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        <br>
        <span>Martin Mayanquer</span>
    </div>
</body>
</html>
