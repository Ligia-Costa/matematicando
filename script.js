document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // 1. CONFIGURAÇÃO DA GALERIA
    // =======================================================
    
    const pastaOrigem = 'matematicando/'; // Pasta onde estão as fotos
    const listaDeFotos = [];

    // Configuração da numeração baseada na sua imagem (DSC03172 até DSC03233)
    const inicio = 3172;
    const fim = 3233;
    
    // Números que NÃO aparecem na imagem (para evitar erro de "imagem não encontrada")
    const fotosAusentes = [3182, 3199, 3224]; 

    // Loop inteligente para gerar os nomes automaticamente
    for (let i = inicio; i <= fim; i++) {
        // Se o número atual NÃO estiver na lista de ausentes, adiciona
        if (!fotosAusentes.includes(i)) {
            // Cria o nome: DSC0 + número + extensão
            listaDeFotos.push(`DSC0${i}.JPG`);
        }
    }

    // =======================================================
    // 2. LÓGICA DE GERAÇÃO DOS CARDS
    // =======================================================
    const galleryContainer = document.getElementById('gallery-container');

    listaDeFotos.forEach((foto, index) => {
        const src = pastaOrigem + foto;

        const cardHTML = `
            <div class="reveal group relative h-64 md:h-72 bg-gray-100 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-orange-100"
                 onclick="abrirModal('${src}')">
                
                <img src="${src}" 
                     loading="lazy"
                     alt="Foto ${index + 1}" 
                     class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                     onerror="this.style.display='none'"> 
                
                <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <i class="ph-bold ph-arrows-out-simple text-white text-4xl drop-shadow-lg transform scale-50 group-hover:scale-100 transition-transform"></i>
                </div>
            </div>
        `;
        
        galleryContainer.innerHTML += cardHTML;
    });


    // =======================================================
    // 3. LÓGICA DO MODAL (LIGHTBOX)
    // =======================================================
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close-modal');

    window.abrirModal = (src) => {
        modalImg.src = src;
        modal.classList.remove('hidden');
        
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalImg.classList.remove('scale-95');
            modalImg.classList.add('scale-100');
        }, 10);
        
        document.body.style.overflow = 'hidden';
    };

    const fecharModal = () => {
        modal.classList.add('opacity-0');
        modalImg.classList.remove('scale-100');
        modalImg.classList.add('scale-95');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            modalImg.src = ''; 
            document.body.style.overflow = 'auto';
        }, 300);
    };

    closeBtn.addEventListener('click', fecharModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            fecharModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            fecharModal();
        }
    });


    // =======================================================
    // 4. MENU MOBILE & SCROLL REVEAL
    // =======================================================
    const btnMobile = document.getElementById('mobile-menu-btn');
    const menuContainer = document.getElementById('mobile-menu');
    const mobileLinks = menuContainer.querySelectorAll('a');
    const iconElement = btnMobile.querySelector('i');

    btnMobile.addEventListener('click', () => {
        menuContainer.classList.toggle('hidden');
        if (menuContainer.classList.contains('hidden')) {
            iconElement.classList.replace('ph-x', 'ph-list');
        } else {
            iconElement.classList.replace('ph-list', 'ph-x');
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuContainer.classList.add('hidden');
            iconElement.classList.replace('ph-x', 'ph-list');
        });
    });

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});