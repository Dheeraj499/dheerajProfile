document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ username, password })
        });

        if (response.ok) {
            window.location.href = '/contact';
        } else {
            document.getElementById('loginMessage').textContent = 'Invalid credentials';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
