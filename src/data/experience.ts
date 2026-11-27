import type { Language } from '../locales';

export type TimelineKind = 'work' | 'education' | 'course';

export interface TimelineEntry {
  id: string;
  kind: TimelineKind;
  title: Record<Language, string>;
  organization: string;
  /** Período exibido no card. `current: true` troca o fim pelo rótulo "Atual". */
  period: string;
  current?: boolean;
  location?: string;
  description?: Record<Language, string>;
  activities?: Record<Language, string[]>;
  tags?: string[];
}

export const work: TimelineEntry[] = [
  {
    id: 'dpl-construcoes',
    kind: 'work',
    title: {
      pt: 'Desenvolvimento de Sistemas',
      en: 'Systems Development',
    },
    organization: 'DPL Construções',
    // Ano de início não informado pelo proprietário: exibido apenas como "Atual".
    period: '—',
    current: true,
    location: 'Brasil',
    description: {
      pt: 'Atuação em desenvolvimento de sistemas internos, com foco na organização de informações operacionais, modelagem de dados e construção de soluções corporativas utilizadas pelas áreas da empresa.',
      en: 'Work on internal systems development, focused on organizing operational information, data modeling and building corporate solutions used by the company areas.',
    },
    activities: {
      pt: [
        'Desenvolvimento de sistemas para uso interno',
        'Levantamento de necessidades junto às áreas operacionais',
        'Modelagem e integração com banco de dados',
        'Implementação de regras de negócio em fluxos corporativos',
        'Organização e padronização de informações',
        'Construção de interfaces para operação diária',
      ],
      en: [
        'Development of systems for internal use',
        'Requirements gathering with operational areas',
        'Data modeling and database integration',
        'Implementation of business rules in corporate workflows',
        'Information organization and standardization',
        'Building interfaces for daily operations',
      ],
    },
    tags: ['React', 'TypeScript', 'SQL', 'PostgreSQL'],
  },
];

export const education: TimelineEntry[] = [
  {
    id: 'unifapi-cc',
    kind: 'education',
    title: {
      pt: 'Bacharelado em Ciência da Computação',
      en: "Bachelor's Degree in Computer Science",
    },
    organization: 'UNIFAPI',
    period: '2024 — 2028',
    current: true,
    description: {
      pt: 'Graduação em andamento, com base em algoritmos, estrutura de dados, banco de dados, redes e engenharia de software.',
      en: 'Degree in progress, covering algorithms, data structures, databases, networking and software engineering.',
    },
  },
];

export const courses: TimelineEntry[] = [
  {
    id: 'gestao-processos-ti',
    kind: 'course',
    title: {
      pt: 'Gestão e Mapeamento de Processos de TI',
      en: 'IT Process Management and Mapping',
    },
    organization: 'Instituto Aprender',
    period: '—',
    tags: ['Processos', 'TI'],
  },
  {
    id: 'seguranca-de-redes',
    kind: 'course',
    title: {
      pt: 'Segurança de Redes',
      en: 'Network Security',
    },
    organization: 'SENAC-PI / Cisco Networking Academy',
    period: '—',
    tags: ['Redes', 'Segurança'],
  },
  {
    id: 'seguranca-de-endpoint',
    kind: 'course',
    title: {
      pt: 'Segurança de Endpoint',
      en: 'Endpoint Security',
    },
    organization: 'SENAC-PI / Cisco Networking Academy',
    period: '—',
    tags: ['Segurança', 'Endpoint'],
  },
  {
    id: 'banco-de-dados',
    kind: 'course',
    title: {
      pt: 'Banco de Dados',
      en: 'Databases',
    },
    organization: 'IFRS',
    period: '—',
    tags: ['SQL', 'Modelagem'],
  },
  {
    id: 'automacao-de-sistemas',
    kind: 'course',
    title: {
      pt: 'Automação de Sistemas',
      en: 'Systems Automation',
    },
    organization: 'IFRS',
    period: '—',
    tags: ['Automação'],
  },
];

/** Linha do tempo combinada (atuação + formação), usada na página Sobre. */
export const timeline: TimelineEntry[] = [...work, ...education];
