// Función para manejar el slider de imágenes
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');
const totalSlides = slides.length;

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.style.opacity = (index === currentSlide) ? '1' : '0';
    });
    currentSlide = (currentSlide + 1) % totalSlides;
}

setInterval(changeSlide, 2000);  // Cambiar imagen cada 2 segundos

// Para iniciar el slider
window.onload = changeSlide;




