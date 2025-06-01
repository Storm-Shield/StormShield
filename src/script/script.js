// SCRIPT CARROSSEL


let index = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}, 3000); // troca a cada 3 segundos


window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
});