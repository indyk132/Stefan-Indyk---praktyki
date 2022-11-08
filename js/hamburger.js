const hamburgerMenu = document.querySelector('.menu_hamburgerList');
const menuBar = document.querySelector('.mobile_menuButton')
function myFunction(){
    hamburgerMenu.classList.toggle('animation-switch')
}

menuBar.addEventListener('click', myFunction)