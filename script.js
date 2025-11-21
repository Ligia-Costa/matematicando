document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // 1. CONFIGURAÇÃO DA GALERIA
    // =======================================================
    
    // Nome da pasta onde estão as fotos (precisa da barra no final)
    const pastaOrigem = 'matematicando/'; 
    
    // Configuração da numeração (DSC03172 até DSC03233)
    const inicio = 3172;
    const fim = 3243;
    
    // Lista de arquivos. O loop abaixo preenche isso automaticamente.
    const listaDeFotos = [];
    
    // Números que sabemos que não existem (pula esses para economizar processamento)
    const fotosAusentes = [3182, 3199, 3224]; 

    // IMPORTANTE: Se todas as fotos sumirem, troque '.JPG' por '.jpg' na linha abaixo
    const extensao = '.JPG'; 

    for (let i = inicio; i <= fim; i++) {
        if (!fotosAusentes.includes(i)) {
            listaDeFotos.push(`DSC0${i}${extensao}`);
        }
    }

    // =======================================================
    // 2. LÓGICA DE GERAÇÃO DOS CARDS (COM CORREÇÃO DE ERRO)
    // =======================================================
    const galleryContainer = document.getElementById('gallery-container');

    listaDeFotos.forEach((foto, index) => {
        const src = pastaOrigem + foto;

        // AQUI ESTÁ A SOLUÇÃO PARA CARDS VAZIOS:
        // O evento 'onerror' detecta se a imagem falhou e esconde o pai (o card)
        const cardHTML = `
            <div class="reveal group relative h-64 md:h-72 bg-gray-100 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-orange-100"
                 onclick="abrirModal('${src}')">
                
                <img src="${src}" 
                     loading="lazy"
                     alt="Foto ${index + 1}" 
                     class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                     onerror="this.parentElement.style.display='none'"> 
                
                <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <i class="ph-bold ph-arrows-out-simple text-white text-4xl drop-shadow-lg transform scale-50 group-hover:scale-100 transition-transform"></i>
                </div>
            </div>
        `;
        
        galleryContainer.innerHTML += cardHTML;
    });


    // =======================================================
    // 3. LÓGICA DO MODAL (TELA CHEIA)
    // =======================================================
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close-modal');

    // Função global para ser chamada pelo onclick do HTML
    window.abrirModal = (src) => {
        modalImg.src = src;
        modal.classList.remove('hidden');
        
        // Pequeno delay para a animação suave funcionar
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalImg.classList.remove('scale-95');
            modalImg.classList.add('scale-100');
        }, 10);
        
        // Trava a rolagem da página de fundo
        document.body.style.overflow = 'hidden';
    };

    const fecharModal = () => {
        modal.classList.add('opacity-0');
        modalImg.classList.remove('scale-100');
        modalImg.classList.add('scale-95');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            modalImg.src = ''; // Limpa a imagem para economizar memória
            document.body.style.overflow = 'auto'; // Destrava a rolagem
        }, 300);
    };

    // Fecha ao clicar no X
    closeBtn.addEventListener('click', fecharModal);

    // Fecha ao clicar no fundo preto
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            fecharModal();
        }
    });

    // Fecha ao apertar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            fecharModal();
        }
    });


    // =======================================================
    // 4. MENU MOBILE & ANIMAÇÕES DE SCROLL
    // =======================================================
    const btnMobile = document.getElementById('mobile-menu-btn');
    const menuContainer = document.getElementById('mobile-menu');
    const mobileLinks = menuContainer.querySelectorAll('a');
    const iconElement = btnMobile.querySelector('i');

    // Abrir/Fechar menu mobile
    btnMobile.addEventListener('click', () => {
        menuContainer.classList.toggle('hidden');
        if (menuContainer.classList.contains('hidden')) {
            iconElement.classList.replace('ph-x', 'ph-list');
        } else {
            iconElement.classList.replace('ph-list', 'ph-x');
        }
    });

    // Fechar menu ao clicar num link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuContainer.classList.add('hidden');
            iconElement.classList.replace('ph-x', 'ph-list');
        });
    });

    // Animação "Scroll Reveal" (aparecer ao rolar)
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 50; // Distância para ativar
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Chama uma vez para mostrar o topo da página

});
