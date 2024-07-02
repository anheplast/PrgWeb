<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catalogo Ropa</title>
    <link rel="stylesheet" href="<?= base_url('public/css/catalogo.css') ?>">
</head>
<body>
    <div class="container">
        <div class="imagen-catalogo">
            <a href="<?= base_url('vestidos') ?>"><img src="<?= base_url('public/img/vestidos.png') ?>" alt="Vestidos"></a>
        </div>
        <div class="imagen-catalogo">
            <a href="<?= base_url('zapatos') ?>"><img src="<?= base_url('public/img/zapatos.png') ?>" alt="Zapatos"></a>
        </div>
    </div>
</body>
</html>
