<div align="center">

# Portfólio — Abraão Henrique

**Full Stack Developer · Software Engineering**

Transformando ideias em soluções digitais.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[Ver o site](https://henrydev.github.io/) · [LinkedIn](https://linkedin.com/in/abraao-henrique-17442930a)

</div>

---

## Sobre o projeto

Portfólio profissional desenvolvido como uma aplicação React completa: seis páginas
com navegação própria, sistema bilíngue (português e inglês), identidade visual
exclusiva *Dark Developer + Green Tech*, integração opcional com a API pública do
GitHub e publicação automatizada no GitHub Pages.

Não é uma landing page única: cada seção do currículo tem uma rota própria, com
metadados de SEO específicos e conteúdo traduzido integralmente.

### Páginas

| Rota | Conteúdo |
| --- | --- |
| `#/home` | Hero com fotografia, animação de digitação, terminal, resumo, stack, projetos em destaque, experiência e chamada para contato |
| `#/about` | Trajetória, formação, interesses, objetivos, linha do tempo e princípios de engenharia |
| `#/projects` | Catálogo de projetos com filtros por categoria |
| `#/experience` | Atuação profissional, formação acadêmica e cursos complementares |
| `#/skills` | Stack técnico organizado por área |
| `#/contact` | Canais diretos e formulário funcional via `mailto:` |

> A navegação usa **HashRouter**. Isso garante que `https://henrydev.github.io/#/projects`
> funcione ao ser aberto diretamente, sem o 404 que o GitHub Pages retornaria em um
> roteador baseado em caminho.

---

## Tecnologias

| Camada | Tecnologia |
| --- | --- |
| Interface | React 18 · TypeScript 5 |
| Build | Vite 5 |
| Estilo | Tailwind CSS 3 (design system próprio) |
| Animações | Framer Motion · CSS keyframes · IntersectionObserver |
| Ícones | Lucide React · Simple Icons (CDN, com fallback local) |
| Rotas | React Router DOM 6 (HashRouter) |
| Metadados | React Helmet Async |
| Publicação | GitHub Actions + GitHub Pages |

Sem backend. Sem credenciais. Sem chaves secretas no repositório.

---

## Estrutura

```
.
├── .github/workflows/deploy.yml   # Publicação automática no GitHub Pages
├── public/
│   ├── images/
│   │   ├── profile.jpg            # Fotografia profissional (recorte quadrado)
│   │   ├── profile-full.jpg       # Fotografia em corpo inteiro
│   │   └── og-image.png           # Imagem de compartilhamento (1200×630)
│   ├── files/
│   │   └── curriculo.pdf          # (opcional) habilita o botão "Download CV"
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/                # Navbar, Footer, ProjectCard, SkillCard, Terminal...
│   ├── pages/                     # Home, About, Projects, Experience, Skills, Contact, NotFound
│   ├── locales/                   # pt.ts (fonte de verdade) · en.ts · index.ts
│   ├── data/                      # profile.ts · projects.ts · skills.ts · experience.ts
│   ├── hooks/                     # useLanguage · useGithub · useTypewriter · useReveal...
│   ├── styles/                    # global.css (design system) · animations.css
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js             # Paleta, tipografia e animações
└── vite.config.ts                 # base: '/' (repositório de usuário)
```

---

## Executar localmente

Requer **Node.js 20+**.

```bash
npm install
```

```bash
npm run dev
```

O site fica disponível em `http://localhost:5173`.

Outros comandos:

```bash
npm run lint
```

```bash
npm run build
```

```bash
npm run preview
```

---

## Publicar

O repositório de publicação é **`HenryDev/HenryDev.github.io`**, servido em
`https://henrydev.github.io/`. Por ser um repositório de usuário, o site é servido
na raiz do domínio — por isso `vite.config.ts` usa `base: '/'`.

**1.** Envie o código para a branch `main` do repositório `HenryDev/HenryDev.github.io`.

**2.** No GitHub, ative o Pages uma única vez:

> **Repository Settings → Pages → Build and deployment → Source: GitHub Actions**

**3.** Cada `push` em `main` dispara `.github/workflows/deploy.yml`, que instala as
dependências com `npm ci`, verifica os tipos, executa `npm run build` e publica a
pasta `dist` usando `actions/upload-pages-artifact` e `actions/deploy-pages`.

O workflow também pode ser disparado manualmente em **Actions → Deploy to GitHub Pages → Run workflow**.

---

## Como atualizar a fotografia

A fotografia fica em `public/images/profile.jpg`, em recorte **quadrado** (o CSS
aplica a máscara circular). O tamanho recomendado é **800×800 px**.

1. Substitua o arquivo `public/images/profile.jpg` mantendo o mesmo nome.
2. Nenhuma alteração de código é necessária — o caminho vem de `src/data/profile.ts`.
3. Para gerar o recorte quadrado a partir de uma foto vertical:

```bash
convert origem.jpg -auto-orient -gravity north -crop 1:1 +repage -resize 800x800 -quality 88 public/images/profile.jpg
```

Se o arquivo não existir, o layout exibe automaticamente um placeholder elegante com
as iniciais **AH** — nunca uma imagem genérica de outra pessoa.

### Imagem de compartilhamento

`public/images/og-image.png` (1200×630) é usada em Open Graph e Twitter Card.
Substitua o arquivo para alterar a prévia exibida em redes sociais e no WhatsApp.

---

## Como atualizar os projetos

Todo o catálogo vive em **`src/data/projects.ts`**. Para adicionar um projeto, insira
um objeto no array `projects`:

```ts
{
  id: 'meu-projeto',              // identificador único
  name: 'Meu Projeto',
  cover: 'API',                   // rótulo do cover gerado
  image: '/images/projects/x.png',// opcional: substitui o cover gerado
  summary: { pt: '...', en: '...' },
  description: { pt: '...', en: '...' },
  features: { pt: ['...'], en: ['...'] },
  stack: ['React', 'Node.js'],
  categories: ['frontend', 'backend'],
  status: 'production',           // production | development | concept | internal
  featured: true,                 // aparece na Home
  repoUrl: null,                  // null mantém o botão visível e desabilitado
  demoUrl: null,
}
```

Os filtros da página de projetos (`All / Frontend / Backend / Database / Mobile /
Automation`) são alimentados pelo campo `categories` — nenhum ajuste extra é preciso.

> Use `null` em `repoUrl` e `demoUrl` enquanto o link real não existir. O card exibe
> o botão desabilitado com a explicação, em vez de apontar para um endereço inválido.

---

## Outras configurações

| O que | Onde |
| --- | --- |
| Nome, cargo, empresa, universidade, links | `src/data/profile.ts` |
| E-mail de contato (habilita botão e formulário) | `src/data/profile.ts` → `email` |
| Exibir a seção de atividade do GitHub | `src/data/profile.ts` → `showGithubActivity` |
| Usuário consultado na API do GitHub | `src/data/profile.ts` → `githubUsername` |
| Textos em português | `src/locales/pt.ts` |
| Textos em inglês | `src/locales/en.ts` |
| Tecnologias da página Skills | `src/data/skills.ts` |
| Experiência, formação e cursos | `src/data/experience.ts` |
| Paleta e tipografia | `tailwind.config.js` |

### Currículo em PDF

O botão **Download CV** só é habilitado quando `public/files/curriculo.pdf` existir de
fato — a aplicação verifica o arquivo em tempo de execução. Enquanto não houver PDF,
o botão aparece desabilitado com a mensagem *"Currículo em preparação"*.

---

## Acessibilidade e SEO

- HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Link *pular para o conteúdo* e foco visível em toda a navegação por teclado.
- `aria-label`, `aria-pressed`, `aria-expanded` e `aria-live` nos controles interativos.
- Texto alternativo em todas as imagens informativas.
- `prefers-reduced-motion` desativa animações, marquee e transições de página.
- Atributo `lang` do documento acompanha o idioma selecionado.
- Título, descrição, canônica, Open Graph e Twitter Card por página.
- `robots.txt`, `sitemap.xml` e dados estruturados `schema.org/Person`.

---

## Licença

Código disponível para consulta e aprendizado. O conteúdo textual, a identidade
visual e a fotografia pertencem a Abraão Henrique.
