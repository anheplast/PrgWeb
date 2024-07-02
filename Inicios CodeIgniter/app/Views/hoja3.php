<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Imagen</title>
    <link rel="stylesheet" href="public/css/hoja3.css">
</head>
<body style="background-image: url('public/img/background.gif')">
    <div class="container">
        <div class="image-container">
            <img src="public/img/heisenberg.png" alt="Image 1" class="hover-trigger" data-audio="public/audio/Breaking Bad.mp3" data-video="public/video/gus-break.mp4">
        </div>
        <div class="image-container">
            <img src="public/img/nuclear_bomb.png" alt="Image 2" class="hover-trigger" data-audio="public/audio/Nuclear.mp3" data-video="public/video/oppenhaimer.mp4">
        </div>
    </div>

    <div class="video-modal hidden" id="videoModal">
        <video controls id="modalVideo">
            <source src="" type="video/mp4">
            No soportado!
        </video>
        <button id="closeModal">Cerrar</button>
    </div>

    <audio id="hoverAudio" preload="auto"></audio>

    <button id="scrollTopButton">Regresar al inicio</button>

    <script src="public/js/hoja3.js"></script>
</body>
</html>

