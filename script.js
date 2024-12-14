document.addEventListener('DOMContentLoaded', () => {
    const arrows = document.querySelector('.arrows');

    // Плавный скролл к портфолио
    arrows.addEventListener('click', () => {
        document.querySelector('.portfolio').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
