# GamerTech

Site de e-commerce de eletrônicos voltado ao universo gamer, desenvolvido como atividade avaliativa do curso **CodFront — Codificação para Front-End** (SENAI).

Contém a página inicial (`index.html`) com menu, banner, produto em destaque, novidades, galeria e rodapé, além de uma página de login (`login.html`) com validação de formulário.

## Tecnologias utilizadas

- **HTML5** — marcação semântica
- **CSS3** — estilização e media queries próprias
- **Bootstrap 5.3** — grid responsivo e componentes (Navbar, Carousel, Cards, Forms)
- **jQuery 3.7** — validação do formulário de login

## Estrutura do projeto

```
gamertech-ecommerce/
├── index.html          # Página inicial
├── login.html           # Página de login
├── style.css             # Estilos customizados e paleta de marca
├── js/
│   └── login.js          # Validação do formulário de login
├── img/
│   ├── logo-icone.png    # Logo (navbar e favicon)
│   ├── banner-hero.png   # Imagem de fundo do banner
│   └── logo-footer.png   # Logo (rodapé)
└── README.md
```

## Funcionalidades

- Layout responsivo (desktop, tablet e mobile), combinando o grid do Bootstrap com media queries próprias
- Navbar com botão de login sempre visível e menu colapsável em telas pequenas
- Galeria de produtos com Carousel interativo
- Validação de formulário de login em tempo real com jQuery (formato de e-mail, tamanho mínimo de senha, feedback visual de erro/sucesso)
- Paleta de cores customizada a partir da identidade visual da marca

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone git@github.com:jmauriciordelima/gamertech-ecommerce.git
   ```
2. Abra a pasta no VS Code
3. Instale a extensão **Live Server** (caso ainda não tenha)
4. Clique com o botão direito em `index.html` → **Open with Live Server**

Não é necessário instalar nenhuma dependência — Bootstrap e jQuery são carregados via CDN.

## Sobre a atividade

Projeto desenvolvido a partir de um briefing de cliente fictício e de um protótipo de baixa e alta fidelidade elaborado previamente no Figma, seguindo princípios de arquitetura da informação, usabilidade e UX/UI.

## Autor

**José Maurício** — [jmauriciordelima](https://github.com/jmauriciordelima)