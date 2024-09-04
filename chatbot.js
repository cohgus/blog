// Crie uma classe para o chatbot
class Chatbot {
  /**
   * Construtor do chatbot
   */
  constructor() {
    this.messages = [
      {
        text: 'Olá! Como posso ajudar?',
        buttons: [
          { text: 'Ver projetos', action: 'verProjetos' },
          { text: 'Sobre mim', action: 'sobreMim' },
          { text: 'Contato', action: 'contato' },
        ],
      },
    ];

    this.container = document.getElementById('chatbot-container');
    this.messageBox = document.getElementById('chatbot-message-box');
    this.emojiButton = document.getElementById('chatbot-emoji');

    this.initEvents();
  }

  /**
   * Inicializa os eventos do chatbot
   */
  initEvents() {
    this.emojiButton.addEventListener('click', () => {
      this.messageBox.classList.toggle('show');
    });

    this.messages[0].buttons.forEach((button) => {
      const buttonElement = document.getElementById(`${button.action}-button`);
      buttonElement.addEventListener('click', () => {
        this[button.action]();
      });
    });
  }

  /**
   * Renderiza o chatbot
   */
  render() {
    const message = this.messages[0];
    const buttons = message.buttons.map((button) => {
      return `<button id="${button.action}-button" class="chatbot-button">${button.text}</button>`;
    }).join('');

    this.container.innerHTML = `
      <div class="chatbot-message">${message.text}</div>
      <div class="chatbot-buttons">${buttons}</div>
    `;
  }

  /**
   * Ação para ver projetos
   */
  verProjetos() {
    window.location.href = '#projetos';
  }

  /**
   * Ação para sobre mim
   */
  sobreMim() {
    window.location.href = '#autoria';
  }

  /**
   * Ação para contato
   */
  contato() {
    window.location.href = '#contato';
  }
}

// Crie uma instância do chatbot
const chatbot = new Chatbot();

// Renderize o chatbot
chatbot.render();
