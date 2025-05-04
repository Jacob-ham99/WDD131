let selectElem = document.querySelector('select');
let logo = document.querySelector('.logo'); // more specific

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
  let current = selectElem.value;

  if (current === 'dark') {
    document.body.classList.add('dark');
    logo.src = 'byui-logo_white.png'; // update with your actual path to the white logo
  } else if (current === 'light') {
    document.body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp'; // original logo path
  }
}
