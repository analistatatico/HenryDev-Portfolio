export type SkillCategoryId =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'mobile'
  | 'tools'
  | 'ai';

export interface Skill {
  name: string;
  /**
   * Slug do ícone oficial no Simple Icons (servido por cdn.simpleicons.org).
   * Quando ausente — ou quando o download falha — o card exibe um monograma
   * com a cor da marca, sem quebrar o layout.
   */
  icon?: string;
  /** Cor da marca, usada no hover do ícone. */
  color: string;
  /** URL oficial da tecnologia. */
  url: string;
}

export interface SkillCategory {
  id: SkillCategoryId;
  /** Nome do ícone Lucide que representa a categoria. */
  lucide: 'Code2' | 'Layout' | 'Server' | 'Database' | 'Smartphone' | 'Wrench' | 'Sparkles';
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    lucide: 'Code2',
    skills: [
      { name: 'Java', icon: 'openjdk', color: '#F2F5F3', url: 'https://dev.java/' },
      { name: 'TypeScript', icon: 'typescript', color: '#3178C6', url: 'https://www.typescriptlang.org/' },
      { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { name: 'Python', icon: 'python', color: '#3776AB', url: 'https://www.python.org/' },
      { name: 'SQL', icon: 'postgresql', color: '#4169E1', url: 'https://www.postgresql.org/docs/current/sql.html' },
      { name: 'Dart', icon: 'dart', color: '#0175C2', url: 'https://dart.dev/' },
    ],
  },
  {
    id: 'frontend',
    lucide: 'Layout',
    skills: [
      { name: 'HTML5', icon: 'html5', color: '#E34F26', url: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS3', icon: 'css', color: '#663399', url: 'https://developer.mozilla.org/docs/Web/CSS' },
      { name: 'React', icon: 'react', color: '#61DAFB', url: 'https://react.dev/' },
    ],
  },
  {
    id: 'backend',
    lucide: 'Server',
    skills: [
      { name: 'Node.js', icon: 'nodedotjs', color: '#5FA04E', url: 'https://nodejs.org/' },
      { name: 'APIs REST', icon: 'openapiinitiative', color: '#6BA539', url: 'https://developer.mozilla.org/docs/Glossary/REST' },
      { name: 'Prisma ORM', icon: 'prisma', color: '#F2F5F3', url: 'https://www.prisma.io/' },
    ],
  },
  {
    id: 'database',
    lucide: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1', url: 'https://www.postgresql.org/' },
      { name: 'Supabase', icon: 'supabase', color: '#3FCF8E', url: 'https://supabase.com/' },
      { name: 'Firebase', icon: 'firebase', color: '#FFCA28', url: 'https://firebase.google.com/' },
    ],
  },
  {
    id: 'mobile',
    lucide: 'Smartphone',
    skills: [
      { name: 'Flutter', icon: 'flutter', color: '#02569B', url: 'https://flutter.dev/' },
      { name: 'FlutterFlow', icon: 'flutter', color: '#4B39EF', url: 'https://flutterflow.io/' },
    ],
  },
  {
    id: 'tools',
    lucide: 'Wrench',
    skills: [
      { name: 'Git', icon: 'git', color: '#F05032', url: 'https://git-scm.com/' },
      { name: 'GitHub', icon: 'github', color: '#F2F5F3', url: 'https://github.com/' },
      { name: 'VS Code', icon: 'visualstudiocode', color: '#007ACC', url: 'https://code.visualstudio.com/' },
      { name: 'NetBeans', icon: 'apachenetbeanside', color: '#1B6AC6', url: 'https://netbeans.apache.org/' },
      { name: 'Figma', icon: 'figma', color: '#F24E1E', url: 'https://www.figma.com/' },
    ],
  },
  {
    id: 'ai',
    lucide: 'Sparkles',
    skills: [
      { name: 'Gemini API', icon: 'googlegemini', color: '#8E75B2', url: 'https://ai.google.dev/' },
      { name: 'Integrações de IA', color: '#00E6A0', url: 'https://ai.google.dev/gemini-api/docs' },
    ],
  },
];

/** Stack resumido exibido na Home. */
export const coreStack: string[] = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Java',
  'Python',
  'PostgreSQL',
  'Supabase',
  'Firebase',
  'Prisma',
  'Flutter',
  'Git',
  'SQL',
  'Figma',
];

export const allSkills: Skill[] = skillCategories.flatMap((category) => category.skills);
