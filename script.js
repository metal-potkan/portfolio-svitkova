document.addEventListener('DOMContentLoaded', function() {
const menuButton = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav');

if (menuButton && mobileNav) {
    menuButton.addEventListener('click', function() {
    mobileNav.classList.toggle('nav--open');
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !expanded);
    });

    // Close menu when a link is clicked
    const navLinks = mobileNav.querySelectorAll('.nav__odkaz');
    navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        mobileNav.classList.remove('nav--open');
        menuButton.setAttribute('aria-expanded', 'false');
    });
    });
}
});
