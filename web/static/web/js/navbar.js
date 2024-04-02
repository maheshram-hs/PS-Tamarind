document.addEventListener('DOMContentLoaded', function () {
    var offcanvasNavbar = document.getElementById('offcanvasNavbar');
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

    offcanvasNavbar.addEventListener('show.bs.offcanvas', function () {
        // Change Navbar link colors to black when offcanvas is activated
        navbarLinks.forEach(function (link) {
            link.classList.remove('text-white');
            link.classList.add('text-black');
        });
    });

    offcanvasNavbar.addEventListener('hidden.bs.offcanvas', function () {
        // Change Navbar link colors to white when offcanvas is deactivated
        navbarLinks.forEach(function (link) {
            link.classList.remove('text-black');
            link.classList.add('text-white');
        });
    });
});
