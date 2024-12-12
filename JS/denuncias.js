document.addEventListener("DOMContentLoaded", () => {
    
  // Funcionalidad del chat
  const chatButton = document.getElementById("chatButton");
  const chatBox = document.getElementById("chatBox");
  const closeChat = document.getElementById("closeChat");
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");
  
  /* // Alternar visibilidad del chat
  chatButton.addEventListener("click", () => chatBox.classList.toggle("disable"));
  closeChat.addEventListener("click", () => chatBox.classList.add("disable"));
  
  // Enviar mensaje
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userMessage = chatInput.value.trim();
    if (userMessage) {
      displayMessage(userMessage, "user-message");
      chatInput.value = "";
      setTimeout(() => {
        displayMessage("Estamos procesando tu solicitud.", "bot-message");
      }, 1000);
    }
  });
  
  // Mostrar mensaje en el chat
  function displayMessage(message, className) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", className);
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }*/

  chatButton.addEventListener("click", () => {
      alert("El chat en vivo se abrirá pronto.");
  });
    
  // Funcionalidad del formulario
  const reportForm = document.getElementById("reportForm");
  const reportSuccess = document.getElementById("reportSuccess");
  const trackingCode = document.getElementById("trackingCode");
    
  reportForm.addEventListener("submit", (e) => {
   e.preventDefault();
   const code = Math.random().toString(36).substring(2, 10).toUpperCase();
   trackingCode.textContent = code;
   reportSuccess.classList.remove("disable");
   reportForm.reset();
  });

  // Funcionalidad del botón de seguimiento
  const trackButton = document.getElementById("trackButton");
  const trackInput = document.getElementById("trackInput");
  const queryResult = document.getElementById("queryResult");
  const queryMessage = document.getElementById("queryMessage");

  // Consultar denuncia
  trackButton.addEventListener("click", () => {
    const enteredCode = trackInput.value.trim();
    if (enteredCode) {
    // Simular validación de código ingresado
      if (enteredCode === trackingCode.textContent) {
        queryMessage.textContent = `Tu denuncia con código ${enteredCode} está en proceso.`;
        queryResult.style.display = "block";
        queryResult.style.backgroundColor = "#7ae7ff";
      } else {
        queryMessage.textContent = `El código ${enteredCode} no coincide con ningún registro.`;
        queryResult.style.display = "block";
        queryResult.style.backgroundColor = "#ffb3b3";
      }
    } else {
      queryMessage.textContent = "Por favor, ingresa un código de seguimiento.";
      queryResult.style.display = "block";
      queryResult.style.backgroundColor = "#ffb3b3";
    }
  });
});