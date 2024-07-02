<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo de Zapatos</title>
    <link rel="stylesheet" href="<?= base_url('public/css/catRopa.css') ?>">
</head>
<body style="background-image: url('<?= base_url('public/img/background-zapatos.jpg') ?>')">
    <div class="container">
        <h1 style="color:brown">Catálogo de Zapatos</h1>
        <div class="category-buttons">
            <button onclick="window.location.href='<?= base_url('zapatos/botas') ?>'">Botas</button>
            <button onclick="window.location.href='<?= base_url('zapatos/casuales') ?>'">Casuales</button>
            <button onclick="window.location.href='<?= base_url('zapatos/deportivos') ?>'">Deportivos</button>
        </div>
        <div class="gallery">
            <img src="<?= base_url('public/img/cat-zapatos/casual1.jpg') ?>" alt="zapato-casual">
            <img src="<?= base_url('public/img/cat-zapatos/casual2.jpg') ?>" alt="zapato-casual">
            <img src="<?= base_url('public/img/cat-zapatos/casual3.jpg') ?>" alt="zapato-casual">
            <img src="<?= base_url('public/img/cat-zapatos/deportivo1.jpg') ?>" alt="zapato-deportivo">
            <img src="<?= base_url('public/img/cat-zapatos/deportivo2.jpg') ?>" alt="zapato-deportivo">
            <img src="<?= base_url('public/img/cat-zapatos/deportivo3.jpg') ?>" alt="zapato-deportivo">
            <img src="<?= base_url('public/img/cat-zapatos/botas1.jpg') ?>" alt="botas">
            <img src="<?= base_url('public/img/cat-zapatos/botas2.jpg') ?>" alt="botas">
            <img src="<?= base_url('public/img/cat-zapatos/botas3.jpg') ?>" alt="botas">
        </div>
        <a href="<?= base_url('/catalogo') ?>" style="text-decoration: none; color: rgb(145, 4, 180); font-weight: bold; font-size: 18px; display: inline-block; margin-top: 20px;">
    ← Volver al seleccionar catálogo de ropa
    </a>
    </div>
</body>
</html>

