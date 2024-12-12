document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("toggle-reseñas").addEventListener("click", () => {
        const listaReseñas = document.getElementById("lista-reseñas");
        const button = document.getElementById("toggle-reseñas");
        
        if (listaReseñas.style.display === "none") {
            listaReseñas.style.display = "block";
            button.textContent = "Ocultar Reseñas";
        } else {
            listaReseñas.style.display = "none";
            button.textContent = "Mostrar Reseñas";
        }

    });

     // Subir servicio con mensaje de confirmación
     const subirServicioBtn = document.getElementById('subir-servicio');
     const nombreServicioInput = document.getElementById('nombre-servicio');

     subirServicioBtn.addEventListener('click', () => {
         const nombreServicio = nombreServicioInput.value.trim();
         if (nombreServicio) {
             alert(`Servicio generado: "${nombreServicio}"\nSe ha enviado una notificación a tu correo electrónico.`);
             document.getElementById('formulario-servicios').reset();
         } else {
             alert("Por favor, completa el nombre del servicio antes de enviarlo.");
         }
     });

});
