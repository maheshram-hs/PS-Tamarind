document.addEventListener('DOMContentLoaded', function () {
    var navbarToggle = document.querySelector('.navbar-toggler');
    var lastNavItem = document.querySelector('.navbar-nav li:last-child');

    navbarToggle.addEventListener('click', function () {
        if (window.getComputedStyle(navbarToggle).display !== 'none' && navbarToggle.getAttribute('aria-expanded') === 'true') {
            lastNavItem.classList.add('me-5');
        } else {
            lastNavItem.classList.remove('me-5');
        }
    });
});
