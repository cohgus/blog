// Adicionar evento de clique para navegar entre páginas
document.addEventListener("DOMContentLoaded", function() {
  const paginas = document.querySelectorAll(".pagina");
  const botoes = document.querySelectorAll(".botao");

  botoes.forEach((botao, index) => {
    botao.addEventListener("click", function() {
      paginas.forEach((pagina) => {
        pagina.classList.remove("active");
      });
      paginas[index].classList.add("active");
    });
  });
});
const container = document.querySelector('.container');

const newSection = document.createElement('section');
newSection.innerHTML = `
  <h2>New Section</h2>
  <p>This is a new section added dynamically with JavaScript.</p>
`;

container.appendChild(newSection);

const tableRows = document.querySelectorAll('table tbody tr');

tableRows.forEach(row => {
   row.addEventListener('click', () => {
        row.classList.toggle('highlight');
  });
});

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

  const formData = new FormData(form);

    console.log(formData);

  form.reset();
});

// Adicione evento de clique ao emoji
document.getElementById("chatbot-emoji").addEventListener("click", function() {
  document.getElementById("chatbot-message-box").classList.toggle("show");
});

// Adicione eventos aos botões
document.getElementById("email-button").addEventListener("click", function() {
  window.location.href = "mailto:cohgus@gmail.com";
});

document.getElementById("orcamento-button").addEventListener("click", function() {
  window.location.href = "#contato";
});
