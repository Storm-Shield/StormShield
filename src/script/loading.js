document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById('progress-bar');
    const loadingPercentage = document.getElementById('loading-percentage');
    const loadingScreen = document.getElementById('loading-screen');
 document.body.style.overflow = 'hidden';
    let progress = 0;
    const intervalTime = 50; // Intervalo de atualização em milissegundos
    const totalTime = 3000; // Tempo total de simulação de carregamento em milissegundos (3 segundos)
    const increment = (intervalTime / totalTime) * 100;

    const loadingInterval = setInterval(() => {
        progress += increment;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            // Garante que a barra chegue a 100% visualmente antes de sumir
            updateProgressUI();
            setTimeout(finishLoading, 300); // Pequeno delay para mostrar 100%
        }
        updateProgressUI();
    }, intervalTime);

    function updateProgressUI() {
        progressBar.style.width = progress + '%';
        loadingPercentage.textContent = Math.round(progress) + '%';
    }

    function finishLoading() {
        loadingScreen.style.transition = 'opacity 0.5s ease-out';
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaura o scroll
        }, 500); // Tempo igual à transição de opacidade
    }

});



