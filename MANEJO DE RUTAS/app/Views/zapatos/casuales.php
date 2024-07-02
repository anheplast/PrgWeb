
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zapatos Casuales</title>
    <link rel="stylesheet" href="<?= base_url('public/css/catRopa.css') ?>">
</head>
<body style="background-image: url('<?= base_url('public/img/background-zapatos.jpg') ?>')">
    <div class="container">
        <h1 style="color:brown">Zapatos Casuales</h1>

        <div class="gallery">
            <img src="<?= base_url('public/img/cat-zapatos/casual1.jpg') ?>" alt="zapato-casual">
            <img src="<?= base_url('public/img/cat-zapatos/casual2.jpg') ?>" alt="zapato-casual">
            <img src="<?= base_url('public/img/cat-zapatos/casual3.jpg') ?>" alt="zapato-casual">
        </div>
    
    <a href="<?= base_url('/zapatos') ?>" style="text-decoration: none; color: rgb(145, 4, 180); font-weight: bold; font-size: 18px; display: inline-block; margin-top: 20px;">
    ← Volver al Catálogo de Zapatos
    </a>
    </div>
</body>
</html>
