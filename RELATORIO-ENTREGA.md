# Relatório de entrega — Portfólio Abraão Henrique

**Data:** 27/11/2026
**Branch:** `claude/amazing-gates-t5dres`
**Commit:** `d591358`
**Estado:** implementado, compilado e testado. **Não publicado** (aguardando sua autorização).

---

## 1. Arquivos criados

65 arquivos versionados · ~4.574 linhas em `src/` · build de 852 KB.

### Configuração
| Arquivo | Função |
| --- | --- |
| `package.json` | Dependências e scripts (`dev`, `build`, `preview`, `lint`) |
| `vite.config.ts` | `base: '/'` para repositório de usuário · code splitting em 4 chunks |
| `tsconfig.json` · `tsconfig.app.json` · `tsconfig.node.json` | TypeScript estrito |
| `tailwind.config.js` | Paleta, tipografia, sombras, keyframes e animações |
| `postcss.config.js` | Tailwind + Autoprefixer |
| `.gitignore` | `node_modules`, `dist`, `.env`, artefatos de ferramentas |

### Aplicação (`src/`)
| Pasta | Arquivos |
| --- | --- |
| `components/` (14) | `Navbar` · `Footer` · `ProjectCard` · `SkillCard` · `Terminal` · `LanguageSwitcher` · `SectionTitle` · `ProfilePhoto` · `Timeline` · `GithubStats` · `TechMarquee` · `Reveal` · `PageHero` · `PageTransition` · `ScrollToTop` · `Seo` |
| `pages/` (7) | `Home` · `About` · `Projects` · `Experience` · `Skills` · `Contact` · `NotFound` |
| `locales/` (3) | `pt.ts` (fonte de verdade da tipagem) · `en.ts` · `index.ts` |
| `data/` (4) | `profile.ts` · `projects.ts` · `skills.ts` · `experience.ts` |
| `hooks/` (5) | `useLanguage` · `useGithub` · `useTypewriter` · `useReveal` · `useAssetAvailable` |
| `styles/` (2) | `global.css` (design system) · `animations.css` |
| raiz | `App.tsx` · `main.tsx` |

### Públicos (`public/`)
`images/profile.jpg` (800×800, recorte quadrado da sua foto real) · `images/profile-full.jpg` ·
`images/og-image.png` (1200×630, gerada com a identidade visual do site) · `favicon.svg` ·
`robots.txt` · `sitemap.xml` · `.nojekyll` · `files/.gitkeep`

### Publicação e documentação
`.github/workflows/deploy.yml` · `README.md` (site) · `github-profile/README.md` (perfil) ·
`github-profile/INSTRUCOES.md` · `src/assets/profile-original.jpg` (foto original preservada)

---

## 2. Tecnologias utilizadas

| Camada | Tecnologia | Versão |
| --- | --- | --- |
| Interface | React | 18.3.1 |
| Linguagem | TypeScript | 5.6.3 |
| Build | Vite | 5.4.11 |
| Estilo | Tailwind CSS | 3.4.17 |
| Animação | Framer Motion | 11.15.0 |
| Ícones | Lucide React | 0.468.0 |
| Rotas | React Router DOM (HashRouter) | 6.28.0 |
| Metadados | React Helmet Async | 2.0.5 |
| CI/CD | GitHub Actions + GitHub Pages | actions v4/v5 |

Sem backend. Sem credenciais. Sem chaves secretas.

---

## 3. Funcionalidades implementadas

**Navegação** — 6 rotas em HashRouter (`#/home`, `#/about`, `#/projects`, `#/experience`,
`#/skills`, `#/contact`), página 404, redirecionamento da raiz, navbar sticky com indicador
de página ativa, menu mobile com fechamento automático e tecla Escape, transições de página.

**Bilíngue** — Português (padrão) e inglês em 100% dos textos, incluindo menus, botões,
descrições de projetos, atividades e rodapé. Preferência salva em `localStorage`, troca sem
recarregar a página, atributo `lang` do documento acompanha o idioma. `en.ts` é tipado a
partir de `pt.ts`, então qualquer chave ausente quebra o build — a tradução não pode ficar
incompleta sem ser notada.

**Home** — Hero com sua fotografia real em recorte circular, animação de digitação com
4 textos, terminal com o objeto `developer`, resumo profissional em 4 cards, faixa de
tecnologias, 3 projetos em destaque, timeline de experiência e chamada para contato.

**Projetos** — 3 projetos com descrição completa, funcionalidades, stack, status e links;
filtros por 6 categorias com contagem; card tracejado preparado para novos projetos.

**Habilidades** — 7 categorias, 22 tecnologias, ícones oficiais com fallback em monograma.
Sem porcentagens de domínio inventadas.

**Contato** — LinkedIn, GitHub, e-mail e localização; formulário com validação que abre o
cliente de e-mail do visitante via `mailto:`. Nenhum envio é simulado.

**Resiliência** — API do GitHub com cache de 30 min, requisições canceláveis, estado de erro
com botão de nova tentativa. Ícones externos e cartão de estatísticas degradam para conteúdo
local. Botão de currículo só habilita quando o PDF existe de fato.

**SEO e acessibilidade** — Título, descrição, canônica, Open Graph e Twitter Card por página;
`robots.txt`, `sitemap.xml`, `schema.org/Person`; HTML semântico, link "pular para o conteúdo",
foco visível, atributos ARIA, texto alternativo e suporte completo a `prefers-reduced-motion`.

---

## 4. Testes executados

Todos em Chromium headless sobre o build de produção (`npm run preview`).

| Teste | Resultado |
| --- | --- |
| `tsc -b` (TypeScript estrito) | sem erros |
| `npm run build` | sem erros · 2,3 s |
| 6 rotas renderizam com `<h1>`, título e `lang` corretos | aprovado |
| Rota inexistente → página 404 | aprovado |
| Raiz `/` redireciona para `#/home` | aprovado |
| 6 cliques de navegação na navbar | aprovado |
| Troca PT→EN e persistência após recarregar | aprovado |
| Filtros de projetos (4 categorias testadas) | contagens corretas |
| Formulário desabilitado sem e-mail configurado | aprovado |
| Carregamento da fotografia | aprovado |
| Menu mobile: abre, navega e fecha sozinho | aprovado |
| Overflow horizontal em 320 px / 768 px / 1440 px | nenhum |
| Ordem de tabulação e foco visível (13 elementos) | aprovado — anel verde 2 px em todos |
| Contraste WCAG | mínimo 7,91:1 (exigido AA: 4,5:1) |
| `prefers-reduced-motion` | animações, marquee, digitação e transições desativadas; sem erros |
| Erros de JavaScript no console | nenhum |

### Correções feitas durante os testes
1. **Texto invisível** — a cor chamada `base` colidia com a utilidade `text-base`
   (tamanho de fonte) do Tailwind, e parágrafos com `sm:text-base` eram pintados na cor do
   fundo. A cor foi renomeada para `surface` em todo o projeto.
2. **Idioma padrão** — o site abria em inglês para navegadores em inglês. Agora abre sempre
   em português, salvo preferência salva pelo próprio visitante.
3. **Ícone vazio** — o quadro do ícone ficava em branco enquanto o SVG externo carregava.
   O monograma agora aparece desde o início e some quando o ícone chega.
4. **Anel de foco** — reforçada a especificidade para vencer as classes `.btn`, e removido um
   `border-radius` que deformava os botões ao receber foco.
5. **Ano inventado** — a experiência na DPL exibia "2025", que não foi informado por você.
   Agora exibe apenas "Atual".

---

## 5. Pendências

### Crítica — usuário do GitHub

O usuário **`HenryDev` já existe no GitHub e pertence a outra pessoa**: conta de ID 1912465,
nome "Henry", com 33 repositórios públicos de cursos de machine learning da Udacity
(2017–2022). Isso foi confirmado consultando a API pública durante os testes.

Consequências:

- O endereço `https://henrydev.github.io/` **pertence ao dono dessa conta**. Você não
  conseguirá publicar nesse endereço nem criar `HenryDev/HenryDev.github.io`.
- Se a seção de atividade do GitHub fosse exibida, o site mostraria repositórios,
  seguidores e linguagens de outra pessoa como se fossem seus.

Por isso, `src/data/profile.ts` traz `showGithubActivity: false` — a seção fica oculta e o
site continua íntegro. Para resolver:

1. Confirme qual é o seu usuário real do GitHub.
2. Ajuste `githubUsername`, `links.github`, `links.website` em `src/data/profile.ts`.
3. Ajuste a URL canônica em `index.html`, `public/sitemap.xml`, `public/robots.txt` e nos
   badges de `github-profile/README.md`.
4. Mude `showGithubActivity` para `true`.

Se o usuário correto for outro (por exemplo `abraaohenrique`), o repositório passa a ser
`<seu-usuario>/<seu-usuario>.github.io` e o endereço `https://<seu-usuario>.github.io/`.
`vite.config.ts` continua com `base: '/'`.

### Dados ainda não fornecidos

| Item | Onde configurar | Comportamento atual |
| --- | --- | --- |
| E-mail público | `src/data/profile.ts` → `email: ''` | Canal e formulário desabilitados, com explicação visível |
| Currículo em PDF | `public/files/curriculo.pdf` | Botão exibe "Currículo em preparação" |
| Ano de início na DPL | `src/data/experience.ts` → `period` | Exibe apenas "Atual" |
| Período dos cursos | `src/data/experience.ts` → `period` | Chip de período oculto |
| Links de repositório/demo dos projetos | `src/data/projects.ts` → `repoUrl`, `demoUrl` | Botão desabilitado com explicação |
| Imagens dos projetos | `public/images/projects/` + campo `image` | Cover gerado com rótulo (STOCK, ECO, DPL) |

Nenhum desses itens foi inventado.

### Observações

- Os ícones de tecnologia vêm de `cdn.simpleicons.org`. Este ambiente de build bloqueia esse
  domínio, então não foi possível validar cada slug aqui. O fallback em monograma cobre
  qualquer ícone que não carregue; vale conferir a página Habilidades no seu navegador.
- A fotografia original foi preservada em `src/assets/profile-original.jpg` (não entra no build).

---

## 6. Passos para publicar

**1.** Confirme o usuário do GitHub e ajuste `src/data/profile.ts` (ver pendência crítica).

**2.** Autorize o envio desta branch. O commit `d591358` está pronto localmente, mas
**nada foi enviado** — você pediu para não publicar sem autorização, e o envio foi bloqueado.

```bash
git push -u origin claude/amazing-gates-t5dres
```

**3.** Crie o repositório de publicação `<seu-usuario>/<seu-usuario>.github.io` (público).

**4.** Envie o conteúdo para a branch `main` desse repositório.

**5.** Ative o Pages uma única vez:

> **Repository Settings → Pages → Build and deployment → Source: GitHub Actions**

**6.** Cada `push` em `main` dispara `.github/workflows/deploy.yml`, que executa `npm ci`,
verifica os tipos, roda `npm run build` e publica `dist` com `actions/upload-pages-artifact`
e `actions/deploy-pages`. O workflow também roda manualmente em **Actions → Deploy to GitHub
Pages → Run workflow**.

**7.** Para o README de perfil, crie o repositório público `<seu-usuario>/<seu-usuario>` e
copie `github-profile/README.md` para o `README.md` dele. Instruções detalhadas em
`github-profile/INSTRUCOES.md`.

### Executar localmente

```bash
npm install
```

```bash
npm run dev
```
