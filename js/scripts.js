// /*!
//     * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
//     * Copyright 2013-2020 Start Bootstrap
//     * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
//     */
// (function ($) {
//     "use strict"; // Start of use strict

//     // Smooth scrolling using jQuery easing
//     $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
//         if (
//             location.pathname.replace(/^\//, "") ==
//                 this.pathname.replace(/^\//, "") &&
//             location.hostname == this.hostname
//         ) {
//             var target = $(this.hash);
//             target = target.length
//                 ? target
//                 : $("[name=" + this.hash.slice(1) + "]");
//             if (target.length) {
//                 $("html, body").animate(
//                     {
//                         scrollTop: target.offset().top - 72,
//                     },
//                     1000,
//                     "easeInOutExpo"
//                 );
//                 return false;
//             }
//         }
//     });

//     // Closes responsive menu when a scroll trigger link is clicked
//     $(".js-scroll-trigger").click(function () {
//         $(".navbar-collapse").collapse("hide");
//     });

//     // Activate scrollspy to add active class to navbar items on scroll
//     $("body").scrollspy({
//         target: "#mainNav",
//         offset: 74,
//     });

//     // Collapse Navbar
//     var navbarCollapse = function () {
//         if ($("#mainNav").offset().top > 100) {
//             $("#mainNav").addClass("navbar-shrink");
//         } else {
//             $("#mainNav").removeClass("navbar-shrink");
//         }
//     };
//     // Collapse now if page is not at top
//     navbarCollapse();
//     // Collapse the navbar when page is scrolled
//     $(window).scroll(navbarCollapse);
// })(jQuery); // End of use strict

/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/

// Scripts


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
