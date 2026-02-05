const carousel = document.querySelector('.animate-carousel');
carousel.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused';
});
carousel.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running';
});

document.getElementById("menu-toggle").addEventListener("click", () => {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
});







