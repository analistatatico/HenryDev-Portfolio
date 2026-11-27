# Relatório de entrega — Portfólio Abraão Henrique

**Data:** 27/11/2026
**Branch:** `claude/amazing-gates-t5dres`
**Commits:** `d591358` · `17a575a` · correção do usuário do GitHub
**Estado:** implementado, compilado, testado e enviado para o repositório remoto.
**Pull request:** [#1](https://github.com/analistatatico/HenryDev-Portfolio/pull/1) (draft)

---

## 1. Arquivos criados

65 arquivos versionados · ~4.574 linhas em `src/` · build de 852 KB.

### Configuração
| Arquivo | Função |
| --- | --- |
| `package.json` | Dependências e scripts (`dev`, `build`, `preview`, `lint`) |
| `vite.config.ts` | Detecção automática do caminho base · code splitting em 4 chunks |
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
| `lib/` (1) | `asset.ts` — resolve caminhos públicos respeitando a base do Vite |
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

### Resolvida — usuário do GitHub

O username correto é **`analistatatico`**. "HenryDev" é apenas o *nome de exibição* do
perfil, não o identificador da conta.

Confirmado pela API pública: conta `analistatatico`, nome de exibição "HenryDev", bio
*"Estudante de Ciência da Computação com experiência prática no desenvolvimento de
aplicações Full Stack."*, criada em 26/06/2026, dona deste repositório.

O usuário `HenryDev` no GitHub é de **outra pessoa** (ID 1912465, 33 repositórios de cursos
de machine learning da Udacity, 2017–2022). Não deve ser usado em links, badges ou consultas
de API.

Ajustes aplicados:

| Arquivo | Alteração |
| --- | --- |
| `src/data/profile.ts` | `githubUsername: 'analistatatico'` · `links.github` · `links.website` · `showGithubActivity: true` |
| `index.html` | Canônica, `og:url`, `og:image`, `twitter:image`, `schema.org` |
| `public/sitemap.xml` | 6 URLs |
| `public/robots.txt` | URL do sitemap |
| `github-profile/README.md` | Badges, imagem, cartões de estatísticas, links |
| `github-profile/INSTRUCOES.md` | Nomes dos repositórios |
| `README.md` | Seção de publicação |

Endereço final do site: **`https://analistatatico.github.io/`**
Repositório de publicação: **`analistatatico/analistatatico.github.io`**
Repositório do README de perfil: **`analistatatico/analistatatico`**

A seção de atividade do GitHub foi ligada e exibe dados reais da conta. Hoje são números
modestos (1 repositório, 1 seguidor, 0 gists) e a barra de linguagens não aparece porque o
único repositório ainda não tem código na `main`. Isso se resolve sozinho conforme você
publicar. Se preferir ocultar a seção por enquanto, basta `showGithubActivity: false` em
`src/data/profile.ts`.

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

O PR [#1](https://github.com/analistatatico/HenryDev-Portfolio/pull/1) foi mergeado em
`main`. O deploy disparou automaticamente e **falhou no passo `Configure Pages`**:

```
Get Pages site failed. Please verify that the repository has Pages
enabled and configured to build using GitHub Actions
```

Não é defeito de código — `npm ci`, verificação de tipos e `npm run build` passaram.
Falta apenas ativar o Pages, o que só pode ser feito nas configurações do repositório.

### Caminho base automático

O `vite.config.ts` agora deduz a base a partir de `GITHUB_REPOSITORY` no momento do build:

| Repositório | Endereço | `base` |
| --- | --- | --- |
| `analistatatico/analistatatico.github.io` | `https://analistatatico.github.io/` | `/` |
| `analistatatico/HenryDev-Portfolio` | `https://analistatatico.github.io/HenryDev-Portfolio/` | `/HenryDev-Portfolio/` |

Os dois formatos foram testados em navegador real. Nenhuma edição manual é necessária.

### Opção A — publicar deste repositório (mais rápido)

**1.** **Settings → Pages → Build and deployment → Source: GitHub Actions**

**2.** **Actions → Deploy to GitHub Pages → Run workflow** (ou faça qualquer push em `main`).

**3.** Site no ar em `https://analistatatico.github.io/HenryDev-Portfolio/`.

### Opção B — site de usuário na raiz

**1.** Crie o repositório público `analistatatico/analistatatico.github.io`.

**2.** Envie o conteúdo deste repositório para a `main` dele.

**3.** Ative o Pages com **Source: GitHub Actions**.

**4.** Site no ar em `https://analistatatico.github.io/`.

> Escolhendo a opção A, ajuste `links.website` em `src/data/profile.ts` e as URLs
> absolutas de `index.html`, `public/sitemap.xml` e `public/robots.txt` para incluir
> `/HenryDev-Portfolio/`, de modo que canônicas e Open Graph apontem para o endereço real.

### README de perfil

Crie o repositório público `analistatatico/analistatatico` e copie
`github-profile/README.md` para o `README.md` dele. Detalhes em
`github-profile/INSTRUCOES.md`.

### Executar localmente

```bash
npm install
```

```bash
npm run dev
```
