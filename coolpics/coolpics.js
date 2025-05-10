// This script can handle the toggle of the menu button (mobile responsive)
document.getElementById('menu').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('visible');
});
