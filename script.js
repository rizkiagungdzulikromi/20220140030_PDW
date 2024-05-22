document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('simpleForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    });
});
