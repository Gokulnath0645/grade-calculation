function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For simplicity, using hardcoded credentials
    const validUsername = 'gokul';
    const validPassword = '66666';

    if (username === validUsername && password === validPassword) {
        // Redirect to calculator page
        window.location.href = 'calculator.html';
    } else {
        document.getElementById('loginError').innerText = 'Invalid username or password';
    }
}

