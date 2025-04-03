// Puedes agregar interactividad aquí, como un menú desplegable para móviles
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo: Agregar un evento de clic a los enlaces del menú
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
window.addEventListener('scroll', function() {
    const scrollProgress = Math.min(window.scrollY / 300, 1);
    header.style.animationPlayState = 'running';
    header.style.animationDuration = '1ms';
    header.style.animationDelay = `-${scrollProgress}s`;
});
