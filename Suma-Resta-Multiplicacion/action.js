

//Funcion Sumar

function sumar() {
    let numeroS1 = parseFloat(document.getElementById('numeroS1').value);
    let numeroS2 = parseFloat(document.getElementById('numeroS2').value);

    let resultSum = numeroS1 + numeroS2;


    document.getElementById('resultSum').textContent = resultSum;


}


//Funcion Restar
function restar() {
    let numeroR1 = parseFloat(document.getElementById('numeroR1').value);
    let numeroR2 = parseFloat(document.getElementById('numeroR2').value);

    let resultRes = numeroR1 - numeroR2;


    document.getElementById('resultRes').textContent = resultRes;
}



//Funcion Multiplicar
function multiplicar() {
    let mulSum = parseFloat(document.getElementById('resultSum').textContent);
    let mulRest = parseFloat(document.getElementById('resultRes').textContent);

    document.getElementById('resultMult').textContent = mulSum * mulRest;

}

//// Funcion Collatz

function collatz() {
    //Evaluar si es positivo
    let inputNum = parseFloat(document.getElementById('inputNumero').value);
    console.log(inputNum);

    if (inputNum > 0) {
        while (inputNum !== 1) {
            let newDiv = document.createElement('div');
            if (inputNum % 2 == 0) {
                inputNum /= 2;
                newDiv.textContent = `numero -> ${inputNum}`;
            }
            else {
                inputNum = (3 * inputNum) + 1;
                newDiv.textContent = `numero -> ${inputNum}`;
            }
            document.getElementById('resultCollatz').appendChild(newDiv);
        }

    }
    else {
        let esNegativo = "Ingresa un numero positivo!";

        document.getElementById('esNegativo').textContent = esNegativo;

    }
}





