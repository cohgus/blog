
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
