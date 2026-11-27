/**
 * Configuração central do perfil.
 * Todo dado pessoal editável vive aqui — nenhum valor é inventado em componentes.
 *
 * PENDÊNCIAS CONFIGURÁVEIS:
 *  - `email`: deixe string vazia enquanto não houver um endereço público definido.
 *             Com valor vazio, os botões de e-mail e o formulário ficam desabilitados.
 *  - `resumePath`: o botão "Download CV" só é habilitado quando o arquivo existir
 *             de fato em `public/files/curriculo.pdf` (verificado em tempo de execução).
 *  - `githubUsername`: o username é `analistatatico`; "HenryDev" é apenas o nome
 *             de exibição do perfil. O usuário `HenryDev` no GitHub pertence a
 *             outra conta e não deve ser usado aqui.
 */
export const profile = {
  name: 'Abraão Henrique',
  shortName: 'Abraão',
  initials: 'AH',
  githubUsername: 'analistatatico',

  /**
   * Liga/desliga a seção de atividade pública do GitHub na Home.
   * Os dados vêm da API pública da conta definida em `githubUsername`.
   */
  showGithubActivity: true as boolean,
  role: 'Full Stack Developer',
  roleSecondary: 'Software Engineering',
  company: 'DPL Construções',
  university: 'UNIFAPI',
  degree: 'Ciência da Computação',
  degreePeriod: '2024 — 2028',
  country: 'Brasil',
  countryEn: 'Brazil',

  /** E-mail público de contato. Vazio = canal desabilitado na interface. */
  email: '',

  links: {
    github: 'https://github.com/analistatatico',
    linkedin: 'https://linkedin.com/in/abraao-henrique-17442930a',
    website: 'https://analistatatico.github.io/',
  },

  /** Caminho público da fotografia profissional. */
  photo: '/images/profile.jpg',
  photoFull: '/images/profile-full.jpg',

  /** Caminho público do currículo em PDF (verificado em runtime). */
  resumePath: '/files/curriculo.pdf',

  /** Snippet exibido no terminal da Hero Section. */
  terminalSnippet: [
    { text: 'const', cls: 'kw' },
    { text: ' developer ', cls: 'var' },
    { text: '= {', cls: 'punct' },
  ],
} as const;

export type Profile = typeof profile;
