const disco = document.getElementById('disco');
const audio = document.getElementById('audio');
const botonReproducir = document.getElementById('reproducir');
const botonPausar = document.getElementById('pausar');
const botonSiguiente = document.getElementById('siguiente');
const botonAnterior = document.getElementById('anterior');
const nombreCancion = document.getElementById('nombre-cancion');

const playlist = [
    {
        ruta: 'public/music/Corazon Encantado.mp3',
        nombre: 'Corazon Encantado',
        fondo: 'public/img/vegeta.gif'
    },
    {
        ruta: 'public/music/inception.mp3',
        nombre: 'Inception',
        fondo: 'public/img/inception.gif'
    },
    {
        ruta: 'public/music/Electricity.mp3',
        nombre: 'Electricity',
        fondo: 'public/img/Electricity.jpg'
    },
    {
        ruta: 'public/music/Eternal Eclipse.mp3',
        nombre: 'Eternal Eclipse',
        fondo: 'public/img/Eternal.gif'
    },
    {
        ruta: 'public/music/IXION.mp3',
        nombre: 'IXION',
        fondo: 'public/img/ixion.gif'
    },
    {
        ruta: 'public/music/Lullaby for Sadness.mp3',
        nombre: 'Lullaby for Sadness',
        fondo: 'public/img/Lullaby.gif'
    },
    {
        ruta: 'public/music/Parbat.mp3',
        nombre: 'Parbat',
        fondo: 'public/img/Parbat.gif'
    },
    {
        ruta: 'public/music/Secunda.mp3',
        nombre: 'Secunda',
        fondo: 'public/img/Secunda.gif'
    }
];

let indiceCancion = 0;

botonReproducir.addEventListener('click', () => {
    audio.play();
    girarDisco();
});

botonPausar.addEventListener('click', () => {
    audio.pause();
    detenerDisco();
});

botonSiguiente.addEventListener('click', () => {
    cambiarCancion(1);
});

botonAnterior.addEventListener('click', () => {
    cambiarCancion(-1);
});

audio.addEventListener('ended', () => {
    cambiarCancion(1);
});

function cambiarCancion(direccion) {
    indiceCancion = (indiceCancion + direccion + playlist.length) % playlist.length;
    audio.src = playlist[indiceCancion].ruta;
    nombreCancion.textContent = playlist[indiceCancion].nombre;
    document.body.style.backgroundImage = `url(${playlist[indiceCancion].fondo})`;
    audio.play();
    girarDisco();
}

function girarDisco() {
    disco.style.animation = 'girar 2s linear infinite';
}

function detenerDisco() {
    disco.style.animation = 'none';
}


audio.src = playlist[indiceCancion].ruta;
nombreCancion.textContent = playlist[indiceCancion].nombre;
document.body.style.backgroundImage = `url(${playlist[indiceCancion].fondo})`;
