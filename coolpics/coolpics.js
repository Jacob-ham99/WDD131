// This script can handle the toggle of the menu button (mobile responsive)
document.getElementById('menu').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('visible');
});
const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
const modal = document.querySelector('#image-viewer');
const gallery = document.querySelector('.gallery');

// Toggle menu on click
menuButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Handle resizing
function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove('show');
  }
}
window.addEventListener('resize', handleResize);
handleResize(); // run on load

// Open image viewer
gallery.addEventListener('click', (event) => {
  const img = event.target.closest('img');
  if (!img) return;

  const src = img.getAttribute('src');
  const alt = img.getAttribute('alt');
  const base = src.split('-')[0];
  const fullSrc = `${base}-full.jpeg`;

  modal.innerHTML = `
    <img src="${fullSrc}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;

  modal.showModal();

  // Close button
  modal.querySelector('.close-viewer').addEventListener('click', () => {
    modal.close();
  });
});

// Close modal if background clicked
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
