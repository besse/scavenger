function checkPassword() {
    const password = document.getElementById('password').value;
    const clueElement = document.getElementById('clue');

    const correctPassword = 'secret123'; // Change this to your desired password

    if (password === correctPassword) {
        clueElement.textContent = 'Here is your clue: The treasure is buried under the old oak tree.';
        clueElement.style.color = 'green';

    } else {
        clueElement.textContent = 'Incorrect password. Please try again.';
        clueElement.style.color = 'red';
    }
}