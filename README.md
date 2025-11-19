# 📐 Site de Revisão ENEM - Matemática (3º Ano)

> Uma galeria interativa e landing page desenvolvida para registrar e
> celebrar a dinâmica de revisão de matemática (Circuito Matemático)
> realizada com os alunos do Terceiro Ano do Ensino Médio.

![Badge
HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Badge
CSS3](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Badge
JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

------------------------------------------------------------------------

## 💻 Sobre o Projeto

Este projeto é uma **Single Page Application (SPA)** estática, focada em
apresentar de forma visual e moderna os momentos da revisão para o ENEM.
O site conta com uma estrutura de *Storytelling*, explicando a
metodologia do circuito, apresentando os professores e exibindo uma
galeria de fotos dinâmica.

### ✨ Funcionalidades

-   **Galeria Dinâmica:** O JavaScript varre uma numeração pré-definida
    e gera os cards de fotos automaticamente.
-   **Tratamento de Erros:** Se uma foto da sequência não existir ou
    falhar ao carregar, o card é ocultado automaticamente via `onerror`.
-   **Lightbox (Modal):** Ao clicar em uma foto, ela se expande em tela
    cheia.
-   **Design Responsivo:** Adaptado para celular, tablet e desktop.
-   **UI Moderna:** *Glassmorphism*, ícones Phosphor, animações e paleta
    temática (Laranja/Matemática).

------------------------------------------------------------------------

## 📂 Estrutura de Arquivos

    /
    ├── index.html          # Estrutura e conteúdo principal
    ├── script.js           # Lógica da galeria, modal e animações
    ├── matematicando/      # PASTA OBRIGATÓRIA com as fotos
    │   ├── DSC03172.JPG
    │   ├── DSC03173.JPG
    │   └── ...
    └── README.md           # Documentação

------------------------------------------------------------------------

## 🚀 Como Configurar e Rodar

### 1. Pré-requisitos

Nada precisa ser instalado. O projeto usa CDNs (Tailwind, Phosphor
Icons). Basta abrir o **index.html** em qualquer navegador moderno.

### 2. Adicionando Fotos

As fotos devem ser colocadas na pasta **matematicando/**.

**Padrão esperado:**\
`DSC0xxxx.JPG` ou `.jpg`

### 3. Ajustando o Script (`script.js`)

``` js
// script.js
const pastaOrigem = 'matematicando/'; 

// Defina o intervalo das fotos
const inicio = 3172; // Número da primeira foto
const fim = 3233;    // Número da última foto

// IMPORTANTE: Verifique a extensão das suas fotos
// Se as fotos forem .jpg (minúsculo), altere aqui:
const extensao = '.JPG'; 
```

------------------------------------------------------------------------

## 🎨 Tecnologias Utilizadas

-   **HTML5:** Estrutura semântica.\
-   **Tailwind CSS (CDN):** Estilo rápido e responsivo.\
-   **JavaScript (Vanilla):** Galeria, modal e eventos.\
-   **Phosphor Icons:** Ícones modernos.\
-   **Google Fonts:** Poppins.

------------------------------------------------------------------------

## 🛠️ Personalização

### 🔤 Mudar Textos e Professores

No **index.html**:

-   Texto do circuito → `<section id="contexto">`
-   Professores → `<section id="professores">`

### 🎨 Mudar Cores

Use **Ctrl+H** (Procurar/Substituir):

-   De: `orange-`
-   Para: `blue-`\
    (ou outra paleta do Tailwind)

------------------------------------------------------------------------


Feito com 🧡 para a Educação.