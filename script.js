function checkPassword() {
    const password = document.getElementById('password').value;
    const clueElement = document.getElementById('clue');

    const correctPassword = '3519'; // Change this to your desired password

    if (password === correctPassword) {
        clueElement.textContent = 'Här är din ledtråd: Titta på baksidan av denna skylt.';
        clueElement.style.color = 'green';

    } else {
        clueElement.textContent = 'Koden är fel. Försök igen.';
        clueElement.style.color = 'red';
    }
}