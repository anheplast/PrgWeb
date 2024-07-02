document.addEventListener('DOMContentLoaded', function() {
    const raton = document.getElementById('raton');
    const contador = document.getElementById('count');
    const sonido = document.getElementById('sonido');
    let golpes = 0;
  
    raton.addEventListener('click', function() {
      golpes++;
      contador.textContent = golpes;
      document.getElementById('contador').style.color = 'red'; 
      raton.src = 'public/img/golpe-raton.png'; 
      sonido.playbackRate = 1.5; 
      sonido.currentTime = 0; 
      sonido.play(); 
      setTimeout(function() {
        raton.src = 'public/img/raton-transformice.png'; 
        document.getElementById('contador').style.color = 'blue'; 
      }, 2000); 
    });
  });
  