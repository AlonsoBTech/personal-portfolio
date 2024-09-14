let menuIcon = document.querySelector('#menu-icon');
let navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-solid');
    navLinks.classList.toggle('active');
}