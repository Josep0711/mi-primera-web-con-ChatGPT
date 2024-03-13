// Carrusel de imágenes
let currentSlide = 0;
const slides = document.querySelectorAll('#carousel img');
const totalSlides = slides.length;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

document.getElementById('nextBtn').addEventListener('click', function() {
    showSlide(currentSlide + 1);
});

document.getElementById('prevBtn').addEventListener('click', function() {
    showSlide(currentSlide - 1);
});

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 1000); // Cambia la imagen cada 5 segundos


