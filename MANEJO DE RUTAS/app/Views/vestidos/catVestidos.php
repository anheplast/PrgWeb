<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo de Vestidos</title>
    <link rel="stylesheet" href="<?= base_url('public/css/catRopa.css') ?>">

    <!-- Que no se repita el fondo -->
    <style>
        body {
            background-color: #ffffffaf;
            background-image: url('<?= base_url('public/img/fondo-vestidos.jpg') ?>');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center; 
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 style="color:rgb(145, 4, 180)">Catálogo de Vestidos</h1>
        <div class="category-buttons">
            <button onclick="window.location.href='<?= base_url('/vestidos/gala') ?>'">Gala</button>
            <button onclick="window.location.href='<?= base_url('vestidos/nocturnos') ?>'">Nocturnos</button>
            <button onclick="window.location.href='<?= base_url('vestidos/verano') ?>'">Verano</button>
        </div>
        <div class="gallery">
        <img src="<?= base_url('public/img/cat-vestidos/gala1.jpg') ?>" alt="vestido-gala">
        <img src="<?= base_url('public/img/cat-vestidos/gala2.jpg') ?>" alt="vestido-gala">
        <img src="<?= base_url('public/img/cat-vestidos/gala3.jpg') ?>" alt="vestido-gala">
        <img src="<?= base_url('public/img/cat-vestidos/nocturno1.jpg') ?>" alt="vestido-nocturno">
        <img src="<?= base_url('public/img/cat-vestidos/nocturno2.jpg') ?>" alt="vestido-nocturno">
        <img src="<?= base_url('public/img/cat-vestidos/nocturno3.jpg') ?>" alt="vestido-nocturno">
        <img src="<?= base_url('public/img/cat-vestidos/verano1.jpg') ?>" alt="vestido-verano">
        <img src="<?= base_url('public/img/cat-vestidos/verano2.jpg') ?>" alt="vestido-verano">
        <img src="<?= base_url('public/img/cat-vestidos/verano3.jpg') ?>" alt="vestido-verano">
    </div>
    <a href="<?= base_url('/catalogo') ?>" style="text-decoration: none; color: rgb(145, 4, 180); font-weight: bold; font-size: 18px; display: inline-block; margin-top: 20px;">
    ← Volver al seleccionar catálogo de ropa
    </a>
    
</body>
</html>
