<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Playlist de Música</title>
    <link rel="stylesheet" href="public/css/hoja4.css">
</head>
<body>
    <div class="contenedor">
        <div class="disco-contenedor">
            <img id="disco" src="public/img/vinylo.png" alt="Disco">
        </div>
        <div class="controles">
            <button id="anterior">⏮️</button>
            <button id="reproducir">▶️</button>
            <button id="pausar">⏸️</button>
            <button id="siguiente">⏭️</button>
        </div>
        <p id="nombre-cancion"></p>
        <audio id="audio" src="public/music/Corazon Encantado.mp3"></audio>
    </div>
    <script src="public/js/hoja4.js"></script>
</body>
</html>
