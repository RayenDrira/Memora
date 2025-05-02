
    // Simulate login state
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    const guestHeader = document.getElementById('guest-header');
    const userHeader = document.getElementById('user-header');

    if (isLoggedIn) {
        guestHeader.style.display = 'none';
        userHeader.style.display = 'flex';
    } else {
        guestHeader.style.display = 'flex';
        userHeader.style.display = 'none';
    }

    // Simulate login and logout
    document.getElementById('login')?.addEventListener('click', () => {
        localStorage.setItem('loggedIn', 'true');
        location.reload();
    });

    document.getElementById('logout')?.addEventListener('click', () => {
        localStorage.removeItem('loggedIn');
        location.reload();
    });

