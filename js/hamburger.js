const hamburgerMenu = document.querySelector('.menu');
const menuBar = document.querySelector('.burger_menu')
function myFunction(){
    hamburgerMenu.classList.toggle('animation-switch')
}

menuBar.addEventListener('click', myFunction)