function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let index = 0;

    function showSlide(n) {
        if (n >= slides.length) {
            index = 0;
        } else if (n < 0) {
            index = slides.length - 1;
        } else {
            index = n;
        }
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', function () {
        showSlide(index - 1);
    });

    nextButton.addEventListener('click', function () {
        showSlide(index + 1);
    });

    // Optional: Auto-slide every 5 seconds
    setInterval(function () {
        showSlide(index + 1);
    }, 5000);
});
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

function updateActiveIndicator(index) {
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : indicators.length - 1;
    updateActiveIndicator(currentSlide);
    // Add logic to change slide
});

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide < indicators.length - 1) ? currentSlide + 1 : 0;
    updateActiveIndicator(currentSlide);
    // Add logic to change slide
});

