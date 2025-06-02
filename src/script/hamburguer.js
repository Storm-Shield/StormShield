export function setupHamburgerMenu() {
    console.log("1. Função setupHamburgerMenu foi chamada!"); // Pista 1

    const hamburguerIcon = document.querySelector('.hamburguer');
    const menu = document.querySelector('.menu');

    console.log("2. Elemento hamburguer encontrado:", hamburguerIcon); // Pista 2
    console.log("3. Elemento menu encontrado:", menu); // Pista 3

    if (hamburguerIcon && menu) {
        hamburguerIcon.addEventListener('click', () => {
            console.log("4. CLIQUE DETECTADO!"); // Pista 4
            menu.classList.toggle('active');
            hamburguerIcon.classList.toggle('active');
        });
    } else {
        console.error("ERRO: Não foi possível encontrar '.hamburguer' ou '.menu'. Verifique as classes no HTML.");
    }
}