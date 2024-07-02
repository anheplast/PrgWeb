// Variables globales
var filaAlfil = -1;
var columnaAlfil = -1;
var tableroSize = 8; 

// Función para generar el tablero
function generar() {
    const tablero = document.getElementById("tablero");
    tablero.innerHTML = "";

    // Obtener la posición del alfil
    filaAlfil = parseInt(document.getElementById('filaPosicion').value) - 1;
    columnaAlfil = parseInt(document.getElementById('columnaPosicion').value) - 1;

    for (let fila = 0; fila < tableroSize; fila++) {
        const filaElemento = document.createElement("tr");

        for (let columna = 0; columna < tableroSize; columna++) {
            const casilla = document.createElement("td");
            casilla.classList.add("casilla");
            casilla.setAttribute('data-fila', fila);
            casilla.setAttribute('data-columna', columna);

            // Determinar color de fondo (alternando colores)
            if ((fila + columna) % 2 === 0) {
                casilla.style.backgroundColor = "#ffffff"; // Casilla blanca
            } else {
                casilla.style.backgroundColor = "#000000"; // Casilla negra
            }

            // Colocar imagen del alfil en la posición indicada
            if (fila === filaAlfil && columna === columnaAlfil) {
                const imgAlfil = document.createElement("img");
                imgAlfil.src = "B_Alfil.png"; //ruta del alfil
                imgAlfil.classList.add("alfil");
                casilla.appendChild(imgAlfil);
            }

            filaElemento.appendChild(casilla);
        }

        tablero.appendChild(filaElemento);
    }

    // PMovimientos válidos del alfil
    pintarMovimientosValidos();
}

// Verificar si una casilla es un movimiento válido para el alfil
function esMovimientoValido(fila, columna) {
    // Calcula diferencia de posiciones
    let diffFila = Math.abs(fila - filaAlfil);
    let diffColumna = Math.abs(columna - columnaAlfil);

    // Movimiento es válido 
    return diffFila === diffColumna;
}

// Pinta los movimientos válidos del alfil
function pintarMovimientosValidos() {
    const casillas = document.querySelectorAll(".casilla");

    casillas.forEach(casilla => {
        let fila = parseInt(casilla.getAttribute('data-fila'));
        let columna = parseInt(casilla.getAttribute('data-columna'));

        if (esMovimientoValido(fila, columna)) {
            casilla.style.backgroundColor = "yellow"; 
        }
    });
}

// Ejecuta generar() al cargar la página por primera vez
document.addEventListener("DOMContentLoaded", function() {
    generar();
});
