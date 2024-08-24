// Crie uma classe para o chatbot
class Chatbot {
  constructor() {
    this.messages = [
      { text: 'Olá! Como posso ajudar?', buttons: ['Ver projetos', 'Sobre mim', 'Contato'] },
    ];
  }

  // Método para renderizar o chatbot
  render() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const message = this.messages[0];
    const buttons = message.buttons.map((button) => {
      return `<button class="chatbot-button">${button}</button>`;
    }).join('');

    chatbotContainer.innerHTML = `
      <div class="chatbot-message">${message.text}</div>
      <div class="chatbot-buttons">${buttons}</div>
    `;
  }
}

// Crie uma instância do chatbot
const chatbot = new Chatbot();

// Renderize o chatbot
chatbot.render();
