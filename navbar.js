document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLeft = document.querySelector('.nav-left'); 
    const login = document.querySelector('.login');
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navLeft.classList.add('scrolled');
            login.classList.add('scrolled');
            header.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            navLeft.classList.remove('scrolled');
            login.classList.remove('scrolled');
            header.classList.remove('scrolled');
        }
    });
});