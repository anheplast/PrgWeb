//Resultados Globales
let resultadoPrimero;
let resultadoSegundo;

//Color respuesta
colorRespuestaM = document.getElementById('resultadoMultiplicado');

//Colores a los textos
const rootStyles = getComputedStyle(document.documentElement);
const colorFahrenheit = rootStyles.getPropertyValue('--color-fahrenheit');
const colorKelvin = rootStyles.getPropertyValue('--color-kelvin');
const colorRankine = rootStyles.getPropertyValue('--color-rankine');
const colorReaumur = rootStyles.getPropertyValue('--color-reaumur');




const resultadoMultiplicado = () => {
    if (!isNaN(resultadoPrimero) && !isNaN(resultadoSegundo)) {
        let resultado = resultadoPrimero * resultadoSegundo;
        colorRespuestaM.style.color = 'yellow';
        document.getElementById('resultadoMultiplicado').textContent = `Temperaturas multiplicadas: > ${resultado}`;
    } else {
        document.getElementById('resultadoMultiplicado').textContent = `Temperaturas multiplicadas: No se puede calcular solo uno -> ${resultado}`;
    }
};

//Celsius a -> Temperaturas

//Celsius a Fahrenheit
celsiusFahrenheit = (gradosCelsius) => {
    return (gradosCelsius * 9 / 5) + 32;


};

//Kelvin
celsiusKelvin = (gradosCelsius) => {
    return gradosCelsius + 273.15;

};

//Rankine
celsiusRankine = (gradosCelsius) => {
    return gradosCelsius * 9 / 5 + 491.67;
};

//Reaumur
celsiusReaumur = (gradosCelsius) => {
    return gradosCelsius * 0.8;
};




//Funcion Principal
convertirPrimera = (conversionPrimera) => {

    let primerResultado = document.getElementById('primerResultado');
    let nombreTemperaturasPrimero = document.getElementById('nombreTemperaturasPrimero');
    let primeraTemperatura = parseFloat(document.getElementById('primeraTemperatura').value);

    

    //Verifica que no este vacio
    if (isNaN(primeraTemperatura) && isNaN(segundaTemperatura)) {
        primerResultado.textContent = "Ninguna temperatura seleccionada";
        segundoResultado.textContent = "Ninguna temperatura seleccionada";
        document.getElementById('resultadoMultiplicado').textContent = "";
        return;
    }
    
    
    switch (conversionPrimera) 
    {

        //Primer Dropdown
        case 'fahrenheitPrimero':
            nombreTemperaturasPrimero.textContent = document.getElementById('fahrenheitPrimero').textContent;
            gradosCelsius = primeraTemperatura;
            primerResultado.style.color = colorFahrenheit;
            resultadoPrimero = celsiusFahrenheit(gradosCelsius);
            primerResultado.textContent = `Fahrenheit: ${resultadoPrimero}°`;
            break;
        case 'kelvinPrimero':
            nombreTemperaturasPrimero.textContent = document.getElementById('kelvinPrimero').textContent;
            gradosCelsius = primeraTemperatura;
            primerResultado.style.color = colorKelvin;
            resultadoPrimero = celsiusKelvin(gradosCelsius);
            primerResultado.textContent = `Kelvin: ${resultadoPrimero}°`;
            break;
        case 'rankinePrimero':
            nombreTemperaturasPrimero.textContent = document.getElementById('rankinePrimero').textContent;
            gradosCelsius = primeraTemperatura;
            primerResultado.style.color = colorRankine;
            resultadoPrimero = celsiusRankine(gradosCelsius);
            primerResultado.textContent = `Rankine: ${resultadoPrimero}°`;
            break;
        case 'reaumurPrimero':
            nombreTemperaturasPrimero.textContent = document.getElementById('reaumurPrimero').textContent;
            gradosCelsius = primeraTemperatura;
            primerResultado.style.color = colorReaumur;
            resultadoPrimero = celsiusReaumur(gradosCelsius);
            primerResultado.textContent = `Reaumur: ${resultadoPrimero}°`;
            break;
        default:
            console.log(`Nada seleccionado`);
    }
    console.log(`Primer resultado: ${resultadoPrimero}`);


};

convertirSegunda = (conversionSegunda) => {

    let nombreTemperaturasSegundo = document.getElementById('nombreTemperaturasSegundo');
    let segundoResultado = document.getElementById('segundoResultado');
    let segundaTemperatura = parseFloat(document.getElementById('segundaTemperatura').value);



    switch(conversionSegunda)
    {
        //Segundo Dropdown    
        case 'fahrenheitSegundo':
            nombreTemperaturasSegundo.textContent = document.getElementById('fahrenheitSegundo').textContent;
            gradosCelsius = segundaTemperatura;
            segundoResultado.style.color = colorFahrenheit;
            resultadoSegundo = celsiusFahrenheit(gradosCelsius);
            segundoResultado.textContent = `Fahrenheit: ${resultadoSegundo}°`;
            break;
        case 'kelvinSegundo':
            nombreTemperaturasSegundo.textContent = document.getElementById('kelvinSegundo').textContent;
            gradosCelsius = segundaTemperatura;
            segundoResultado.style.color = colorKelvin;
            resultadoSegundo = celsiusKelvin(gradosCelsius);
            segundoResultado.textContent = `Kelvin: ${resultadoSegundo}°`;
            break;
        case 'rankineSegundo':
            nombreTemperaturasSegundo.textContent = document.getElementById('rankineSegundo').textContent;
            gradosCelsius = segundaTemperatura;
            segundoResultado.style.color = colorRankine;
            resultadoSegundo = celsiusRankine(gradosCelsius);
            segundoResultado.textContent = `Rankine: ${resultadoSegundo}°`;
            break;
        case 'reaumurSegundo':
            nombreTemperaturasSegundo.textContent = document.getElementById('reaumurSegundo').textContent;
            gradosCelsius = segundaTemperatura;
            segundoResultado.style.color = colorReaumur;
            resultadoSegundo = celsiusReaumur(gradosCelsius);
            segundoResultado.textContent = `Reaumur: ${resultadoSegundo}°`;
            break;
        default:
            console.log(`Nada seleccionado`);
    }
    resultadoMultiplicado();
    
    
};






//Eventos Primer Dropdown
document.getElementById('fahrenheitPrimero').addEventListener('click', () => convertirPrimera('fahrenheitPrimero'));
document.getElementById('kelvinPrimero').addEventListener('click', () => convertirPrimera('kelvinPrimero'));
document.getElementById('rankinePrimero').addEventListener('click', () => convertirPrimera('rankinePrimero'));
document.getElementById('reaumurPrimero').addEventListener('click', () => convertirPrimera('reaumurPrimero'));

//Eventos Segundo Dropdown
document.getElementById('fahrenheitSegundo').addEventListener('click', () => convertirSegunda('fahrenheitSegundo'));
document.getElementById('kelvinSegundo').addEventListener('click', () => convertirSegunda('kelvinSegundo'));
document.getElementById('rankineSegundo').addEventListener('click', () => convertirSegunda('rankineSegundo'));
document.getElementById('reaumurSegundo').addEventListener('click', () => convertirSegunda('reaumurSegundo'));

