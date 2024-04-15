var navbar = document.querySelector('.hamburger-menu');
var nav_title = document.querySelector('.navbar-title');

window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight / 2) {
        navbar.classList.add('opaque-blue');
        nav_title.classList.add('active');
    } else {
        navbar.classList.remove('opaque-blue');
        nav_title.classList.remove('active');
    }
});