//Ficha Reina
var UbicacionReina = 'fichaReina.png';
var piezaReina = document.createElement('img');
piezaReina.src = UbicacionReina;
piezaReina.alt = 'Reina.png';
piezaReina.width = 50;
piezaReina.height = 50;


generar = () => {
    const tablero = document.getElementById("tablero");
    tablero.innerHTML = "";
    let identificador = 0;
    let idcasilla = 0;

    //Variables de la posicion
    let filaPosicion = parseFloat(document.getElementById('filaPosicion').value) - 1;
    let columnaPosicion = parseFloat(document.getElementById('columnaPosicion').value) - 1;

    //Verificacion de las variables posicion
    console.log(`Fila: ${filaPosicion}, Tipo -> ${typeof(filaPosicion)}`);
    console.log(`Columna: ${columnaPosicion}, Tipo -> ${typeof(columnaPosicion)}`);
    
    

    for (let fila = 0; fila < 5; fila++) {
        const filaElemento = document.createElement("tr");
        

        for (let columna = 0; columna < 5; columna++) {
            const casilla = document.createElement("td");

            casilla.textContent = idcasilla;
            
            casilla.classList.add("Miclase");
            casilla.setAttribute('id', idcasilla);
        
            filaElemento.appendChild(casilla);
            
            // PAR e IMPAR
            if (identificador % 2 === 0) {
                idcasilla++;
                casilla.style.color = "#000000";
                casilla.style.backgroundColor =  "#ffffff";
            }
            else
            {
                casilla.style.backgroundColor =  "#000000"; 
            }
            casilla.classList.add("casilla");

            //Posicion Imagen
            if (fila === filaPosicion && columna === columnaPosicion)
            {
                casilla.innerHTML = "";
                casilla.appendChild(piezaReina);
            }
            else
            {
                casilla.textContent = identificador;
            }


            identificador++;

            
        }
        tablero.appendChild(filaElemento);
    }
};


