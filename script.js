// script.js

// Función para mostrar jugadores con un número mínimo de goles
function mostrarJugadoresMinGoles(minGoles) {
    var jugadores = document.querySelectorAll('.jugador');
  
    for (var i = 0; i < jugadores.length; i++) {
      var goles = parseInt(jugadores[i].querySelector('p strong:first-child').textContent);
  
      if (goles >= minGoles) {
        jugadores[i].style.display = 'block';
      } else {
        jugadores[i].style.display = 'none';
      }
    }
  }
  
  
  
  
  
  