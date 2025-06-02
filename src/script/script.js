// SCRIPT CARROSSEL
let index = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}, 3000); // troca a cada 3 segundos

//SCROLL
const links = document.querySelectorAll('.menu a[href^="#"]');

function getDistanciaTopo(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollWindow(distanciaTopo){

      window.scroll({
        top : distanciaTopo,
        behavior: "smooth"
    })
  
  

}

function scrollToSection(event){
    event.preventDefault();
    const distanciaTopo = getDistanciaTopo(event.target) - 90;
    scrollWindow(distanciaTopo);
}

links.forEach((link) =>{
link.addEventListener("click", scrollToSection);
});