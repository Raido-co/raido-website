// Function to init EmailJS
(function(){
    emailjs.init({
      publicKey: "NRGrv7N9xN5Jw2hZb",
    });
})();

// Listener for the Send button
window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let params = {
            inputName : document.getElementById("inputName").value,
            inputSurname : document.getElementById("inputSurname").value,
            inputEmail : document.getElementById("inputEmail").value,
            inputMessage : document.getElementById("inputMessage").value
        };
        
        emailjs.send('service_raido', 'template_raido', params)
            .then(() => {
                alert('Mensaje enviado');
            }, (error) => {
                alert('Error al enviar el mensaje', error);
            });
    });
}