document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#logoCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1500, // Change this to adjust the speed (in milliseconds)
        wrap: true // Ensure it loops back to the beginning
    });
});