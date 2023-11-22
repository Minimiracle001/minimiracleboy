const users = [
    { username: 'user1', password: 'pass1', profile: { name: 'User One', email: 'user1@example.com' } },
    { username: 'user2', password: 'pass2', profile: { name: 'User Two', email: 'user2@example.com' } }
];

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        showProfile(user.profile);
    } else {
        alert('Invalid username or password');
    }
}

function showProfile(profile) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('username').innerText = profile.name;
}

function logout() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
    // Additional logic for clearing session or token on the server would be needed in a real application
}