import type { Translation } from './pt';

/**
 * Translations — English (secondary language).
 * Mirrors the structure of `pt.ts`, which is the source of truth for typing.
 */
export const en: Translation = {
  meta: {
    locale: 'en-US',
    langAttr: 'en',
    label: 'English',
    short: 'EN',
  },

  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    menu: 'Open menu',
    close: 'Close menu',
    skipToContent: 'Skip to main content',
    languageLabel: 'Select language',
  },

  seo: {
    home: {
      title: 'Abraão Henrique — Full Stack Developer',
      description:
        'Portfolio of Abraão Henrique, Full Stack Developer. Turning ideas into digital solutions: modern applications, corporate systems and software engineering.',
    },
    about: {
      title: 'About — Abraão Henrique',
      description:
        'Background, Computer Science studies and software engineering principles of Abraão Henrique.',
    },
    projects: {
      title: 'Projects — Abraão Henrique',
      description:
        'Software projects built by Abraão Henrique: corporate systems, web platforms and mobile applications.',
    },
    experience: {
      title: 'Experience — Abraão Henrique',
      description:
        'Professional background, academic education and complementary courses of Abraão Henrique.',
    },
    skills: {
      title: 'Skills — Abraão Henrique',
      description:
        'Tech stack of Abraão Henrique: languages, frontend, backend, databases, mobile, tools and AI.',
    },
    contact: {
      title: 'Contact — Abraão Henrique',
      description: 'Get in touch with Abraão Henrique for opportunities and collaborations.',
    },
    notFound: {
      title: 'Page not found — Abraão Henrique',
      description: 'The requested page does not exist in this portfolio.',
    },
  },

  home: {
    greeting: "Hi, I'm Abraão Henrique.",
    role: 'Full Stack Developer',
    headline: 'Turning ideas into digital solutions.',
    typedRoles: [
      'Full Stack Developer',
      'Software Engineering',
      'Corporate Systems',
      'React · TypeScript · Node.js',
    ],
    description:
      'Software developer interested in building modern applications, developing corporate systems and turning real challenges into technology solutions.',
    location: 'Brazil',
    available: 'Open to opportunities',
    ctaProjects: 'View Projects',
    ctaAbout: 'About Me',
    ctaLinkedin: 'LinkedIn',
    ctaResume: 'Download CV',
    resumeUnavailable: 'Résumé coming soon',
    resumeUnavailableHint:
      'The download is enabled automatically once the file public/files/curriculo.pdf is added to the repository.',
    scrollHint: 'Scroll to explore',
    photoAlt: 'Professional photograph of Abraão Henrique',
    terminalTitle: 'developer.ts',

    summary: {
      eyebrow: 'Professional summary',
      title: 'Software engineering applied to real problems.',
      body: 'I work on systems development, combining academic Computer Science training with daily practice in a corporate environment. My focus is writing readable code, modeling data consistently and delivering applications that actually solve the user’s problem.',
      cards: [
        {
          title: 'Full Stack development',
          text: 'Interfaces in React and TypeScript connected to APIs and relational databases.',
        },
        {
          title: 'Corporate systems',
          text: 'Business rules, approval flows and traceability applied to day-to-day operations.',
        },
        {
          title: 'Data and persistence',
          text: 'Modeling in PostgreSQL, use of Supabase and Firebase, data access through Prisma ORM.',
        },
        {
          title: 'Continuous learning',
          text: 'Degree in progress plus complementary courses in networking, security, databases and automation.',
        },
      ],
    },

    stack: {
      eyebrow: 'Core technologies',
      title: 'Tools I work with every day.',
      link: 'See the full stack',
    },

    projects: {
      eyebrow: 'Selected projects',
      title: 'Some of the systems I have been building.',
      link: 'See all projects',
    },

    experience: {
      eyebrow: 'Experience',
      title: 'Where I am building solutions.',
      link: 'See full background',
    },

    github: {
      eyebrow: 'GitHub',
      title: 'Public activity on GitHub.',
      link: 'Open GitHub profile',
    },

    cta: {
      eyebrow: 'Contact',
      title: 'Shall we build something together?',
      text: 'I am open to opportunities, projects and collaborations. Send a message — I reply as soon as I can.',
      button: 'Get in touch',
    },
  },

  about: {
    eyebrow: 'About me',
    title: 'Meet the person behind the code.',
    lead: 'I am Abraão Henrique, a software developer and Computer Science student. I work on systems development and I like to understand the problem before writing the first line of code.',
    photoAlt: 'Abraão Henrique, Full Stack Developer',

    sections: [
      {
        title: 'My path into technology',
        body: 'My interest in technology started with the curiosity to understand how the systems we use every day work on the inside. That curiosity became practice: I started studying programming, building small projects and then applying that knowledge in a real corporate environment, where software has to serve people and processes.',
      },
      {
        title: 'Computer Science education',
        body: 'I study Computer Science at UNIFAPI, with graduation expected in 2028. The degree gives me the formal foundation — algorithms, data structures, databases and software engineering — that supports the technical decisions I make in practical projects.',
      },
      {
        title: 'Hands-on systems development',
        body: 'At DPL Construções I work on systems development: gathering requirements, modeling data, implementing business rules and building interfaces for internal use. It is where theory and operations meet.',
      },
      {
        title: 'Software engineering interests',
        body: 'I have a particular interest in software architecture, code quality, data modeling and information security — subjects I have also been deepening through complementary courses in networking, endpoint security, databases and automation.',
      },
      {
        title: 'Professional goals',
        body: 'My goal is to grow as a software engineer, taking part in projects that demand architectural decisions, solid development practices and measurable impact for the people using the system.',
      },
    ],

    timeline: {
      eyebrow: 'Timeline',
      title: 'Education and professional work.',
    },

    principles: {
      eyebrow: 'Principles',
      title: 'What guides the way I build software.',
      items: [
        {
          title: 'Clean Code',
          text: 'Code written to be read by people. Clear names, small functions and explicit intent.',
        },
        {
          title: 'Problem Solving',
          text: 'Understand the problem before the solution. The best technology is the one that solves the real case.',
        },
        {
          title: 'Continuous Learning',
          text: 'Constant study. Every project is a chance to learn something I have not mastered yet.',
        },
        {
          title: 'Software Architecture',
          text: 'Separation of concerns, well-defined boundaries and decisions that survive the growth of the system.',
        },
        {
          title: 'Innovation',
          text: 'Looking for better ways to solve the same problem, including the responsible use of AI.',
        },
      ],
    },

    cta: {
      title: 'Want to know more about my work?',
      text: 'Take a look at the projects I have been building, or reach out directly.',
      projects: 'View projects',
      contact: 'Get in touch',
    },
  },

  projects: {
    eyebrow: 'Projects',
    title: 'Projects that turn ideas into solutions.',
    lead: 'Systems and applications I have built or am currently building, with the technical decisions and technologies involved in each one.',
    filters: {
      all: 'All projects',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      mobile: 'Mobile',
      automation: 'Automation',
    },
    filterLabel: 'Filter projects by category',
    empty: 'No projects in this category yet.',
    featured: 'Featured',
    viewCode: 'Code',
    viewDemo: 'Live demo',
    linkPending: 'Link not available',
    linkPendingHint: 'Repository not published yet. The link is configurable in src/data/projects.ts.',
    featuresTitle: 'Features',
    stackTitle: 'Technologies',
    status: {
      production: 'In production',
      development: 'In development',
      concept: 'Concept',
      internal: 'Internal use',
    },
    moreSoon: {
      title: 'New projects coming soon',
      text: 'This space is ready for new cards. Just add an entry to src/data/projects.ts with image, name, description, technologies, status and links.',
    },
  },

  experience: {
    eyebrow: 'Experience',
    title: 'My professional journey.',
    lead: 'Work in systems development, an ongoing degree and complementary courses in infrastructure, data and security.',
    workTitle: 'Professional work',
    educationTitle: 'Education',
    coursesTitle: 'Complementary courses',
    current: 'Current',
    activitiesTitle: 'Main activities',
    inProgress: 'In progress',
    issuedBy: 'Institution',
  },

  skills: {
    eyebrow: 'Skills',
    title: 'My technical arsenal.',
    lead: 'Technologies I use in personal, academic and corporate projects, organized by area.',
    note: 'Technologies are grouped by area, without proficiency scales — the depth of each one shows better in the projects.',
    categories: {
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Databases',
      mobile: 'Mobile',
      tools: 'Tools',
      ai: 'Artificial Intelligence',
    },
    categoryDescriptions: {
      languages: 'Languages I use to solve problems in different contexts.',
      frontend: 'Building interfaces and experiences for the web.',
      backend: 'Services, APIs and server-side data access.',
      database: 'Data modeling, persistence and querying.',
      mobile: 'Building applications for mobile devices.',
      tools: 'Development, version control and design tools.',
      ai: 'Integrations with language models and AI features.',
    },
    cta: {
      title: 'See these technologies in practice.',
      text: 'Every project in this portfolio shows how these tools are combined in real work.',
      button: 'View projects',
    },
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Shall we build something together?',
    lead: 'I am open to opportunities, projects and collaborations. Pick the channel you prefer.',
    cta: 'Open to opportunities and collaborations.',
    channels: 'Direct channels',
    location: 'Location',
    locationValue: 'Brazil',
    locationNote: 'Available for remote work.',
    emailLabel: 'Email',
    emailPending: 'Email not configured',
    emailPendingHint:
      'Set the address in src/data/profile.ts (email field) to enable the button and the form.',
    form: {
      title: 'Send a message',
      description:
        'The form opens your email client with the message ready. No data is sent to third-party servers.',
      name: 'Name',
      namePlaceholder: 'What should I call you?',
      email: 'Your email',
      emailPlaceholder: 'you@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'What would you like to talk about?',
      message: 'Message',
      messagePlaceholder: 'Write your message...',
      submit: 'Open email',
      submitDisabled: 'Email unavailable',
      required: 'Required field',
      invalidEmail: 'Enter a valid email address',
      opened: 'Your email client was opened with the message filled in.',
      noBackendNote: 'This portfolio has no backend: sending is handled by your own email client.',
    },
  },

  notFound: {
    code: '404',
    title: 'Page not found',
    text: 'The address you reached does not exist in this portfolio. The link may be outdated.',
    button: 'Back to home',
  },

  github: {
    repos: 'Public repositories',
    followers: 'Followers',
    following: 'Following',
    gists: 'Gists',
    featured: 'Featured repositories',
    languages: 'Most used languages',
    updated: 'Updated on',
    loading: 'Loading GitHub data...',
    error: 'GitHub data could not be loaded right now.',
    errorHint: 'The data is public and may fail due to rate limits. Please try again later.',
    retry: 'Try again',
    empty: 'No public repositories found.',
    statsAlt: 'GitHub profile statistics for HenryDev',
    statsUnavailable: 'Statistics card unavailable at the moment.',
    openProfile: 'Open profile',
    stars: 'stars',
  },

  footer: {
    tagline: 'Turning ideas into digital solutions.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    builtWith: 'Built with React, TypeScript, Vite and Tailwind CSS.',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },

  common: {
    loading: 'Loading...',
    externalLink: 'opens in a new tab',
  },
};
