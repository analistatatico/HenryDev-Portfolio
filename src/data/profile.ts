/**
 * Configuração central do perfil.
 * Todo dado pessoal editável vive aqui — nenhum valor é inventado em componentes.
 *
 * PENDÊNCIAS CONFIGURÁVEIS:
 *  - `email`: deixe string vazia enquanto não houver um endereço público definido.
 *             Com valor vazio, os botões de e-mail e o formulário ficam desabilitados.
 *  - `resumePath`: o botão "Download CV" só é habilitado quando o arquivo existir
 *             de fato em `public/files/curriculo.pdf` (verificado em tempo de execução).
 *  - `githubUsername`: ATENÇÃO — o usuário `HenryDev` já existe no GitHub e
 *             pertence a outra pessoa (conta antiga, com repositórios de cursos
 *             de machine learning). Enquanto o username correto não for
 *             confirmado, a seção de atividade do GitHub exibirá dados de
 *             terceiros. Ajuste aqui e, se necessário, desligue a seção com
 *             `showGithubActivity: false`.
 */
export const profile = {
  name: 'Abraão Henrique',
  shortName: 'Abraão',
  initials: 'AH',
  githubUsername: 'HenryDev',

  /**
   * Liga/desliga a seção de atividade pública do GitHub na Home.
   * Mantenha `false` até confirmar que `githubUsername` é realmente a conta
   * do proprietário do portfólio — caso contrário, o site exibiria
   * repositórios e estatísticas de outra pessoa.
   */
  showGithubActivity: false as boolean,
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
    github: 'https://github.com/HenryDev',
    linkedin: 'https://linkedin.com/in/abraao-henrique-17442930a',
    website: 'https://henrydev.github.io/',
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
