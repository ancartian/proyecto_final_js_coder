
document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
  
    function showSlide(index) {
      slides.forEach((slide) => {
        slide.style.display = 'none';
      });
  
      slides[index].style.display = 'block';
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }

    function goToCursosPage() {
        window.location.href = 'cursos.html';
      }

    setInterval(nextSlide, 4000);
    // Mostrar la primera imagen al cargar la página
    showSlide(currentSlide);
  
    // Agregar eventos para los botones de siguiente y anterior
    document.getElementById('slide-next').addEventListener('click', nextSlide);
    document.getElementById('slide-prev').addEventListener('click', prevSlide);

    slides.forEach((slide) => {
        slide.addEventListener('click', goToCursosPage);
      });
  });
  
// mensaje de bienvenida
  function showWelcomeMessage() {
    Swal.fire({
        title: '¡Bienvenido a tu escuela de produccion musical!',
        text: 'Nuevo curso de ableton live 12 disponible.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
}