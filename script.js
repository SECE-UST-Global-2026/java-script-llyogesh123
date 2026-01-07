const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");

function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText === "") return;

  // User message
  addMessage(messageText, "sent");

  messageInput.value = "";

  // Simulated bot reply
  setTimeout(() => {
    addMessage("Hello! I received your message 😊", "received");
  }, 800);
}

function addMessage(text, type) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", type);
  messageDiv.innerText = text;

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send message on Enter key
messageInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
