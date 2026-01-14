document.addEventListener('DOMContentLoaded', () => {
  // Animación de cambio de palabras en el header
  const words = ["Code", "Improve", "Secure"];
  const changingWordContainer = document.getElementById('changing-word');

  function showRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    changingWordContainer.textContent = words[randomIndex];
  }

  showRandomWord(); // Inicia la animación al cargar la página
  setInterval(showRandomWord, 3000); // Cambia la palabra cada 3 segundos

  // Triangle Section
  const triangle = document.getElementById('triangle');
  const paragraph = document.getElementById('paragraph');

  // Mostrar "DevOps" al cargar la página
  function showDefaultText() {
    changeText('DevOps');
  }

  showDefaultText(); // Mostrar el texto por defecto al cargar la página
  triangle.classList.add('visible');

  function changeText(service) {
    const textMap = {
      'DevOps': 'Nuestro servicio de DevOps facilita la colaboración entre equipos, eliminando barreras y mejorando la eficiencia. Con DevOps, ayudamos a tu empresa a evolucionar continuamente hacia un futuro más ágil y eficiente.',
      'Ciberseguridad': 'Nuestro servicio de Ciberseguridad protege tus activos digitales mediante evaluación de vulnerabilidades, pruebas de penetración y respuesta a incidentes, además de ofrecer capacitación para fortalecer la seguridad.',
      'Desarrollo Web': 'Nuestro servicio de Desarrollo Web te acompaña en cada etapa del proceso, desde el diseño hasta la optimización continua. Te ofrecemos soluciones integrales y personalizadas para impulsar tu presencia digital y asegurar el éxito de tu proyecto.'
    };
    paragraph.textContent = textMap[service];
  }

  const sides = document.querySelectorAll('.triangle-text .side');
  sides.forEach(side => {
    side.addEventListener('mouseover', function() {
      sides.forEach(s => s.classList.remove('active')); // Eliminar la clase active de todos los lados
      this.classList.add('active'); // Añadir la clase active al lado sobre el que se pasa el ratón
      changeText(this.textContent); // Cambiar el texto del párrafo
    });
  });

  triangle.addEventListener('mouseleave', function() {
    // No vaciar el párrafo cuando el puntero sale del triángulo
    // Sólo se vacía cuando se pasa a otro texto
  });

  // Animación de desplazamiento del triángulo
  document.addEventListener('scroll', () => {
    const trianglePosition = triangle.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (trianglePosition < screenPosition) {
      triangle.classList.add('visible');
    } else {
      triangle.classList.remove('visible');
    }
  });
});
