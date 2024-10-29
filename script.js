// Função para abrir o livro (abrir a capa)
function openBook() {
    // Adiciona a classe "open" à capa para realizar a rotação
    const cover = document.getElementById('cover');
    cover.classList.add('open');

    // Vai para a próxima página (história) após a animação de abrir a capa
    setTimeout(() => {
        goToPage('story');
    }, 1000); // Aguarda 1 segundo para sincronizar com a rotação da capa
}

// Função para mudar de página
function goToPage(pageId) {
    // Ocultar todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Mostrar a página selecionada com efeito mágico
    const nextPage = document.getElementById(pageId);
    nextPage.classList.add('active');
}

// Função para mudar de página (virada com rotação)
function goToPage(pageId) {
    // Página atual (ativa)
    const activePage = document.querySelector('.page.active');
    if (activePage) {
        activePage.classList.remove('active', 'turn');
    }

    // Próxima página
    const nextPage = document.getElementById(pageId);
    nextPage.classList.add('active');

    // Intensifica o brilho ao virar
    nextPage.querySelector('.magic-effect').classList.add('intense');
}

// Função para criar estrelas cadentes de luz
function createFallingStars() {
    const numStars = 30; // Quantidade de luzinhas
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      document.body.appendChild(star);
    }
  }
  
  document.addEventListener("DOMContentLoaded", createFallingStars);
  
// Função para confirmar presença no WhatsApp
function confirmRSVP() {
    window.open('https://api.whatsapp.com/send?phone=5511940381193&text=Confirmo%20minha%20presença%20na%20festa%20da%20Marcella!', '_blank');
}