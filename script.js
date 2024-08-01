document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#logoCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1500, // Change this to adjust the speed (in milliseconds)
        wrap: true // Ensure it loops back to the beginning
    });
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('country');
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common;
                option.textContent = country.name.common;
                select.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching country data:', error));
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('countryCode');
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : '');
                option.textContent = `${country.name.common} (${option.value})`;
                select.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching country data:', error));
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// $(document).ready(function() {
//     function toggleNavbarMethod() {
//         if ($(window).width() > 768) {
//             $('.navbar .dropdown').hover(function() {
//                 $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
//             }, function() {
//                 $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105);
//             });
//         } else {
//             $('.navbar .dropdown').off('mouseenter mouseleave');
//         }
//     }


//     toggleNavbarMethod();

//     $(window).resize(toggleNavbarMethod);
// });

$(document).ready(function() {
    function toggleNavbarMethod() {
        if ($(window).width() > 768) {
            $('.navbar .dropdown').hover(function() {
                $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
            }, function() {
                $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105);
            });
        } else {
            $('.navbar .dropdown').off('mouseenter mouseleave');

            // Add click event for small screens to toggle dropdown
            $('.navbar .dropdown-toggle').off('click').on('click', function(e) {
                var $dropdownMenu = $(this).siblings('.dropdown-menu');
                if ($dropdownMenu.is(':visible')) {
                    $dropdownMenu.slideUp(150);
                } else {
                    // Close other open dropdowns
                    $('.dropdown-menu').slideUp(150);
                    $dropdownMenu.slideDown(150);
                }
                e.stopPropagation();
                e.preventDefault();
            });
        }
    }

    toggleNavbarMethod();

    $(window).resize(toggleNavbarMethod);
});

