const hamburgerMenu = document.querySelector('.menu');
function myFunction(){
    hamburgerMenu.classList.toggle('animation-switch')
}

hamburgerMenu.addEventListener('click', myFunction)