document.addEventListener("DOMContentLoaded", () => {
    const chatBoton = document.getElementById("chatBoton");
    const emergenciaBoton = document.getElementById("emergenciaBoton");
    const ticketBoton = document.getElementById("ticketBoton");
    const ticketInput = document.getElementById("ticketInput");

    // Abrir chat en vivo
    chatBoton.addEventListener("click", () => {
        alert("El chat en vivo se abrirá pronto.");
    });

    // Asistencia rápida
    emergenciaBoton.addEventListener("click", () => {
        alert("Conectando con un operador para asistencia rápida...");
    });

    // Enviar ticket
    ticketBoton.addEventListener("click", () => {
        const problema = ticketInput.value.trim();
        if (problema) {
            alert(`Ticket generado: "${problema}"\nUn agente lo atenderá pronto a traves de correo electronico.`);
            ticketInput.value = "";
        } else {
            alert("Por favor, describe tu problema antes de enviar el ticket.");
        }
    });
});

const preg = document.querySelectorAll('.preg');
const resp = document.querySelectorAll('.resp');

preg.forEach((pre, index) =>{
    pre.addEventListener('click', (e)=>{
        const altura = resp[index].getBoundingClientRect().height;
        if(altura === 0) resp[index].style.height = 'auto';
        else resp[index].style.height = '0';
    });
});