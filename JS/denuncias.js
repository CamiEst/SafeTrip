document.addEventListener("DOMContentLoaded", () => {
    
// Funcionalidad del chat
const chatButton = document.getElementById("chatButton");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

// Alternar visibilidad del chat
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
}
  
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
  });