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