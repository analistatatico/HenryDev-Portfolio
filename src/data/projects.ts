import type { Language } from '../locales';

export type ProjectCategory = 'frontend' | 'backend' | 'database' | 'mobile' | 'automation';
export type ProjectStatus = 'production' | 'development' | 'concept' | 'internal';

export interface Project {
  /** Identificador estável, usado como chave de lista. */
  id: string;
  name: string;
  /** Imagem opcional em `public/images/projects/`. Sem imagem, o card usa um cover gerado. */
  image?: string;
  /** Rótulo curto exibido sobre o cover gerado. */
  cover: string;
  summary: Record<Language, string>;
  description: Record<Language, string>;
  features: Record<Language, string[]>;
  stack: string[];
  categories: ProjectCategory[];
  status: ProjectStatus;
  featured: boolean;
  /** Links reais apenas. `null` mantém o botão visível porém desabilitado. */
  repoUrl: string | null;
  demoUrl: string | null;
  year?: string;
}

/**
 * Catálogo de projetos.
 * Para adicionar um novo projeto, basta inserir um objeto neste array.
 * Nenhum link é inventado: use `null` enquanto o repositório/demo não for público.
 */
export const projects: Project[] = [
  {
    id: 'controle-de-materiais',
    name: 'Controle de Materiais',
    cover: 'STOCK',
    summary: {
      pt: 'Sistema corporativo de gerenciamento de estoque e movimentações.',
      en: 'Corporate system for inventory management and stock movements.',
    },
    description: {
      pt: 'Sistema corporativo para gestão completa de materiais: do pedido inicial à confirmação de recebimento, passando por aprovação, reserva, separação e entrega. Cada etapa registra responsável e data, garantindo rastreabilidade das movimentações e consistência do saldo em estoque.',
      en: 'Corporate system for end-to-end material management: from the initial request to delivery confirmation, going through approval, reservation, picking and delivery. Every step records who did it and when, ensuring traceability of movements and consistency of stock balances.',
    },
    features: {
      pt: [
        'Controle de estoque com saldo por material',
        'Requisições internas de materiais',
        'Fluxo de aprovações',
        'Reservas vinculadas a requisições',
        'Separação de itens para entrega',
        'Registro de entregas',
        'Confirmação de recebimento',
        'Devoluções ao estoque',
        'Regras de negócio aplicadas a cada transição',
        'Rastreabilidade completa das movimentações',
      ],
      en: [
        'Inventory control with balance per material',
        'Internal material requests',
        'Approval workflow',
        'Reservations linked to requests',
        'Item picking for delivery',
        'Delivery records',
        'Receipt confirmation',
        'Returns to stock',
        'Business rules applied to each transition',
        'Full traceability of movements',
      ],
    },
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Prisma'],
    categories: ['frontend', 'backend', 'database'],
    status: 'internal',
    featured: true,
    repoUrl: null,
    demoUrl: null,
  },
  {
    id: 'ecoaventura',
    name: 'EcoAventura',
    cover: 'ECO',
    summary: {
      pt: 'Plataforma de educação ambiental com gamificação e integração de IA.',
      en: 'Environmental education platform with gamification and AI integration.',
    },
    description: {
      pt: 'Plataforma de educação ambiental construída para engajar usuários por meio de questionários, conquistas e progresso acompanhado ao longo do tempo. A organização regional permite agrupar participantes por localidade, e a integração com a Gemini API apoia a geração e o enriquecimento de conteúdo educativo.',
      en: 'Environmental education platform built to engage users through quizzes, achievements and progress tracked over time. Regional organization groups participants by location, and the Gemini API integration supports generating and enriching educational content.',
    },
    features: {
      pt: [
        'Autenticação de usuários',
        'Perfis individuais',
        'Questionários temáticos',
        'Gamificação por pontuação',
        'Histórico de participação',
        'Conquistas desbloqueáveis',
        'Organização por região',
        'Integração com IA (Gemini API)',
      ],
      en: [
        'User authentication',
        'Individual profiles',
        'Themed quizzes',
        'Score-based gamification',
        'Participation history',
        'Unlockable achievements',
        'Regional organization',
        'AI integration (Gemini API)',
      ],
    },
    stack: ['FlutterFlow', 'Supabase', 'Firebase', 'Gemini API'],
    categories: ['mobile', 'backend', 'database'],
    status: 'development',
    featured: true,
    repoUrl: null,
    demoUrl: null,
  },
  {
    id: 'sistemas-corporativos-dpl',
    name: 'Sistemas Corporativos',
    cover: 'DPL',
    summary: {
      pt: 'Desenvolvimento de sistemas no contexto profissional da DPL Construções.',
      en: 'Systems development within the professional context of DPL Construções.',
    },
    description: {
      pt: 'Conjunto de soluções internas desenvolvidas na DPL Construções, voltadas à organização de informações operacionais e ao apoio à tomada de decisão. O trabalho envolve levantamento de necessidades junto às áreas, modelagem de dados, implementação de regras de negócio e construção de interfaces para uso interno.',
      en: 'A set of internal solutions developed at DPL Construções, focused on organizing operational information and supporting decision-making. The work involves gathering requirements with the business areas, data modeling, implementing business rules and building interfaces for internal use.',
    },
    features: {
      pt: [
        'Levantamento de requisitos com as áreas',
        'Modelagem de dados relacional',
        'Implementação de regras de negócio',
        'Interfaces internas para operação',
        'Integração com banco de dados',
        'Organização e padronização de informações',
      ],
      en: [
        'Requirements gathering with business areas',
        'Relational data modeling',
        'Business rule implementation',
        'Internal operational interfaces',
        'Database integration',
        'Information organization and standardization',
      ],
    },
    stack: ['React', 'TypeScript', 'SQL', 'PostgreSQL'],
    categories: ['frontend', 'database', 'automation'],
    status: 'internal',
    featured: true,
    repoUrl: null,
    demoUrl: null,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
