document.addEventListener('DOMContentLoaded', function() {
    const imagenes = [
                    'public/img/licuadora.png', 
                    'public/img/Metal-Gear-Big-Boss.png', 
                    'public/img/ixion.png'
                    ];

    let indiceActual = 0;

    const imagenRotativa = document.getElementById('rotating-image');
    const botonMagico = document.getElementById('magic-button');
  
    botonMagico.addEventListener('click', function() 
    {
      imagenRotativa.style.transform = 'rotate(360deg)';
      setTimeout(function() 
      {
        indiceActual = (indiceActual + 1) % imagenes.length;
        imagenRotativa.src = imagenes[indiceActual];
        imagenRotativa.style.transform = 'rotate(0deg)';
      }, 800); 
    });
  });
  
  