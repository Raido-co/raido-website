// Animación de cambio de palabras en el header

document.addEventListener('DOMContentLoaded', showRandomWord); // Asegura que showRandomWord se llama al cargar la página

const words = ["Code", "Improve", "Secure"]; // Inicializa el arreglo con las palabras

function showRandomWord() {
    const changingWordContainer = document.getElementById('changing-word');
    const randomIndex = Math.floor(Math.random() * words.length); // Selecciona un índice aleatorio
    changingWordContainer.textContent = words[randomIndex]; // Muestra la palabra seleccionada
}