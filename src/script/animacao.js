// Comentario paara se quiser alterar algo

document.addEventListener("DOMContentLoaded", function() {

    const elementosParaAnimar = document.querySelectorAll('.efeito-scroll');

    // Se não encontrar elementos, não faz nada.
    if (elementosParaAnimar.length === 0) return;

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            // SE o elemento está visível (entrando na tela)
            if (entrada.isIntersecting) {
                // Adiciona a classe para torná-lo visível
                entrada.target.classList.add('visivel');
            } 
            // SENÃO (se o elemento saiu da tela)
            else {
                // Removemos a classe para que ele fique invisível de novo,
                // pronto para a próxima vez que aparecer.
                entrada.target.classList.remove('visivel');
            }
        });
    }, {
        threshold: 0.1 // Ação acontece quando 10% do elemento está visível
    });

    // Inicia a observação para cada elemento

    elementosParaAnimar.forEach(elemento => {
        observador.observe(elemento);
    });

});