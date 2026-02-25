export const personalInfo = {
  name: 'SevenMiles',
  founder: 'Xavier Roba',
  title: 'Backend · Mobile · Web · IT Consulting',
  tagline: 'We turn complex technical challenges into elegant, scalable solutions — delivered by senior engineers with 20+ years of proven experience.',
  location: 'Brussels, Belgium',
  available: true,
  email: 'xavier@sevenmiles.be',
  linkedin: 'https://www.linkedin.com/in/xavierroba',
  github: 'https://github.com/xavierroba',
  yearsExperience: 20,
  summary: `SevenMiles is an IT services company founded by Xavier Roba, a Brussels-based software
    developer and IT consultant with over 20 years of hands-on engineering and leadership experience.
    From co-founding Rubbik — where we built award-winning platforms for RTBF, Kaspersky, and more —
    to leading backend engineering at Radionomy and driving Golang/Flutter development at Skipr,
    SevenMiles brings deep technical expertise with the strategic mindset of a seasoned IT manager.`,
};

export const services = [
  {
    id: 'backend',
    icon: 'Server',
    title: 'Backend Development',
    description:
      'High-performance, scalable backend systems built with Golang and .NET Core. API design, microservices architecture, and cloud-native solutions for enterprise workloads.',
    technologies: ['Golang', '.NET / .NET Core', 'Node.js', 'PostgreSQL', 'MySQL', 'REST / gRPC'],
    accent: '#3dada0',
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    title: 'Mobile Development',
    description:
      'Cross-platform mobile applications with Flutter, delivering native-quality experiences on iOS and Android from a single codebase. Rapid prototyping to production-ready apps.',
    technologies: ['Flutter', 'Dart', 'Android', 'iOS', 'Firebase', 'REST APIs'],
    accent: '#5bbfb5',
  },
  {
    id: 'web',
    icon: 'Globe',
    title: 'Web Development',
    description:
      'Full-stack web applications using modern frameworks. From PHP/Symfony platforms to Angular and Node.js services, delivering performant and maintainable codebases.',
    technologies: ['PHP / Symfony', 'Angular', 'Node.js', 'jQuery', 'Sitefinity CMS', 'React'],
    accent: '#2d3f55',
  },
  {
    id: 'consulting',
    icon: 'BarChart3',
    title: 'IT Consulting & Management',
    description:
      'Strategic IT leadership and technical consulting for companies scaling their engineering teams. Architecture reviews, tech stack decisions, team structuring, and delivery management.',
    technologies: [
      'Architecture Design',
      'Team Leadership',
      'Agile / Scrum',
      'Tech Strategy',
      'Code Reviews',
      'Mentoring',
    ],
    accent: '#f0a24a',
  },
];

export const experience = [
  {
    id: 'skipr',
    role: 'Freelance Software Developer',
    company: 'Skipr',
    period: 'May 2019 – Present',
    duration: '~7 years',
    location: 'Brussels, Belgium',
    current: true,
    description:
      'Lead backend and mobile development for Skipr, a mobility platform revolutionising corporate commuting in Belgium. Building robust Golang microservices and cross-platform Flutter applications used by thousands of corporate users.',
    highlights: [
      'Golang microservices backend architecture',
      'Flutter mobile applications (iOS & Android)',
      'API design and third-party integrations',
      'Agile delivery in a fast-paced scale-up environment',
      'AI-assisted development using Claude, OpenAI and Gemini as productivity tools',
    ],
    technologies: ['Golang', 'Flutter', 'Dart', 'PostgreSQL', 'Docker', 'Kubernetes', 'Claude', 'OpenAI', 'Gemini'],
  },
  {
    id: 'radionomy',
    role: 'IT Development Manager',
    company: 'Radionomy',
    period: 'Dec 2016 – May 2019',
    duration: '2.5 years',
    location: 'Belgium',
    current: false,
    description:
      'Led the backend engineering team for Radionomy, a global internet radio platform. Oversaw the migration and modernisation of .NET services to .NET Core, managing a team of developers across multiple squads.',
    highlights: [
      'IT Backend Lead for .NET and .NET Core services',
      'Managed cross-functional engineering teams',
      'Drove modernisation from .NET Framework to .NET Core',
      'Performance optimisation of high-traffic audio streaming services',
    ],
    technologies: ['.NET', '.NET Core', 'C#', 'SQL Server', 'Azure', 'REST APIs'],
  },
  {
    id: 'idweaver-2',
    role: 'Manager IT',
    company: 'IDWEAVER',
    period: 'Dec 2014 – Dec 2016',
    duration: '2 years',
    location: 'Brussels, Belgium',
    current: false,
    description:
      'IT Lead on BNP Paribas Fortis Hello Bank! digital projects. Delivered HelloPlay (music discovery platform) and HelloCrowd (community platform) from conception to production, managing development teams and client relationships.',
    highlights: [
      'IT Lead on Hello Bank! digital platform projects',
      'Lead Developer on HelloPlay music platform',
      'Lead Developer on HelloCrowd community platform',
      'Sitefinity CMS, .NET, Angular, and Node.js stack',
    ],
    technologies: ['Sitefinity CMS', '.NET', 'Node.js', 'Angular', 'jQuery', 'MSSQL'],
  },
  {
    id: 'idweaver-1',
    role: 'Manager IT',
    company: 'IDWEAVER',
    period: 'May 2012 – Dec 2014',
    duration: '2.5 years',
    location: 'Brussels, Belgium',
    current: false,
    description:
      'IT Lead driving PHP/Symfony-based web solutions for IdWeaver clients. Responsible for technical architecture, team leadership, and delivery of complex B2B and B2C web platforms.',
    highlights: [
      'IT Lead on IdWeaver PHP/Symfony solutions',
      'Technical architecture and code reviews',
      'Team management and mentoring',
      'Client-facing technical consulting',
    ],
    technologies: ['PHP', 'Symfony', 'MySQL', 'jQuery', 'JavaScript', 'CSS3'],
  },
  {
    id: 'rubbik',
    role: 'IT Manager & Co-founder',
    company: 'Rubbik',
    period: 'Oct 2005 – May 2012',
    duration: '~7 years',
    location: 'Belgium',
    current: false,
    description:
      'Co-founded Rubbik with Nathalie Gouzee, building it into a successful digital agency delivering high-profile projects across Belgium. Hands-on engineering combined with business development and team building over 7 years.',
    highlights: [
      'Co-founded the agency with Nathalie Gouzee',
      'Built Boutique RTBF (rtbf.be) ecommerce platform',
      'Developed Kaspersky music download platform for Belgium',
      'Android apps and Facebook application development',
      'Managed development team and client portfolio',
    ],
    technologies: ['PHP', 'Symfony', 'MySQL', 'Android', 'JavaScript', 'Facebook API'],
  },
  {
    id: 'vente-unique',
    role: 'Developer',
    company: 'Vente-unique',
    period: 'Jul 2010 – Oct 2010',
    duration: '4 months',
    location: 'Paris, France',
    current: false,
    description:
      'Developed ecommerce platform from scratch for the French market, later expanded to Spanish and German markets. Intensive Symfony development in a fast-paced ecommerce environment.',
    highlights: [
      'Built ecommerce platform from scratch with Symfony',
      'Multi-market rollout: France, Spain, Germany',
      'High-volume product catalogue and checkout systems',
    ],
    technologies: ['PHP', 'Symfony', 'MySQL', 'JavaScript', 'jQuery'],
  },
];

export const projects = [
  {
    id: 'helloplay',
    title: 'Hello Play!',
    subtitle: 'Music Discovery Platform',
    period: 'Oct 2014 – Dec 2016',
    client: 'Hello Bank! / BNP Paribas Fortis',
    role: 'Lead Developer',
    description:
      'A curated music discovery platform showcasing Belgian and international electronic music, built for Hello Bank! as part of their digital lifestyle offering. Delivered a rich, interactive listening experience with editorial curation tools.',
    highlights: [
      'Full-stack lead on a high-profile banking digital product',
      'Custom music player with curated editorial features',
      'Sitefinity CMS integration for content management',
      'Mobile-responsive design serving thousands of users',
    ],
    technologies: ['Sitefinity CMS', '.NET', 'Angular', 'Node.js', 'JavaScript', 'CSS3'],
    accent: '#3dada0',
    icon: 'Music',
  },
  {
    id: 'hellocrowd',
    title: 'HelloCrowd',
    subtitle: 'Community Engagement Platform',
    period: 'Jun 2015 – Dec 2016',
    client: 'Hello Bank! / IDWEAVER',
    role: 'Lead Developer',
    description:
      'Community and crowd-engagement platform associated with the Hello Bank! digital ecosystem. Built for user-generated content, event discovery, and social interaction features.',
    highlights: [
      'Social features: user profiles, events, content sharing',
      'Real-time interaction components',
      'Seamless integration with Hello Play! ecosystem',
    ],
    technologies: ['.NET', 'Node.js', 'Angular', 'jQuery', 'MSSQL'],
    accent: '#5bbfb5',
    icon: 'Users',
  },
  {
    id: 'rtbf',
    title: 'Boutique RTBF',
    subtitle: 'Ecommerce Platform',
    period: 'Feb 2012',
    client: 'RTBF (Belgian public broadcaster)',
    role: 'Lead Developer at Rubbik',
    description:
      'Built the official ecommerce storefront for RTBF, the Belgian public media company, at rtbf.be. A full Symfony ecommerce platform supporting digital product sales, subscriptions, and merchandise for one of Belgium\'s most visited media properties.',
    highlights: [
      'Custom Symfony ecommerce from the ground up',
      'Integrated with RTBF\'s existing digital infrastructure',
      'High-traffic platform handling Belgian media audience',
      'Product catalogue, shopping cart, and payment gateway',
    ],
    technologies: ['PHP', 'Symfony', 'MySQL', 'jQuery', 'CSS3'],
    accent: '#2d3f55',
    icon: 'ShoppingCart',
  },
  {
    id: 'kaspersky',
    title: 'Kaspersky Music',
    subtitle: 'Music Download Platform',
    period: '2008 – 2010',
    client: 'Kaspersky Lab',
    role: 'Lead Developer at Rubbik',
    description:
      'Developed a branded music download platform for Kaspersky in Belgium, enabling customers to discover and download music as part of a digital loyalty programme. Handled secure digital content delivery and licensing.',
    highlights: [
      'Secure digital music download and licensing system',
      'Kaspersky brand integration and white-label delivery',
      'Digital rights management for audio content',
      'Built during the early Belgian digital music era',
    ],
    technologies: ['PHP', 'Symfony', 'MySQL', 'JavaScript', 'DRM'],
    accent: '#f0a24a',
    icon: 'Download',
  },
  {
    id: 'ubee',
    title: 'u-bee',
    subtitle: 'Digital Platform',
    period: 'Rubbik era',
    client: 'u-bee',
    role: 'Developer at Rubbik',
    description:
      'One of several successful web platforms developed during the Rubbik years, delivering a custom digital solution for the Belgian market with strong focus on user experience and reliable backend engineering.',
    highlights: [
      'Custom Symfony-based web application',
      'Belgian market digital product',
      'End-to-end development and delivery',
    ],
    technologies: ['PHP', 'Symfony', 'MySQL', 'JavaScript', 'CSS3'],
    accent: '#ec4899',
    icon: 'Hexagon',
  },
  {
    id: 'serename',
    title: 'Serename',
    subtitle: 'Wellness & Well-being Website',
    period: '2024 – 2025',
    client: 'Gaby Tilkin Serename',
    role: 'Frontend Developer',
    url: 'https://www.serename.be',
    description:
      'Full website for Gaby Tilkin Serename, a Belgian wellness practitioner specialising in body and emotional harmony. A rich single-page experience featuring services, packages, gallery, testimonials, and a contact booking section — built entirely in React.',
    highlights: [
      'Rich multi-section layout: services, gallery, packages, testimonials',
      'Video banner with autoplay and parallax scroll effects',
      'Isotope-powered filterable gallery',
      'Swiper carousels, lightbox, and animated counters',
    ],
    technologies: ['React', 'Vite', 'JavaScript', 'CSS3', 'Swiper', 'Isotope'],
    accent: '#E7A391',
    icon: 'Leaf',
  },
  {
    id: 'koowah',
    title: 'Koowah',
    subtitle: 'Word & Image Association Game',
    period: '2025',
    client: 'TwistGames',
    role: 'Fullstack Developer (solo)',
    url: 'https://www.koowah.online',
    description:
      'A web-based party game where players secretly associate words with images and eliminate wrong guesses. Built end-to-end as a solo fullstack project — from a Golang REST API backend to a React/TypeScript frontend — for Belgian board game publisher TwistGames.',
    highlights: [
      'Solo fullstack build: Golang REST API + React/TypeScript frontend',
      'Custom game engine handling sessions, word cards, and elimination logic',
      'Drag-and-drop interactions with @dnd-kit',
      'Deployed on Vercel with PDF rulebook viewer',
    ],
    technologies: ['Golang', 'REST API', 'React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    accent: '#CC782A',
    icon: 'Gamepad2',
  },
];

export const skills = [
  {
    category: 'Backend',
    icon: 'Server',
    color: '#3dada0',
    items: [
      { name: 'Golang', level: 95 },
      { name: '.NET / .NET Core', level: 90 },
      { name: 'PHP / Symfony', level: 88 },
      { name: 'Node.js', level: 82 },
      { name: 'REST API Design', level: 95 },
      { name: 'Microservices', level: 88 },
    ],
  },
  {
    category: 'Mobile & Frontend',
    icon: 'Layers',
    color: '#5bbfb5',
    items: [
      { name: 'Flutter / Dart', level: 90 },
      { name: 'Angular', level: 78 },
      { name: 'React', level: 72 },
      { name: 'jQuery', level: 85 },
      { name: 'Android', level: 75 },
      { name: 'JavaScript / ES6+', level: 85 },
    ],
  },
  {
    category: 'Data & Infrastructure',
    icon: 'Database',
    color: '#2d3f55',
    items: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 90 },
      { name: 'Docker', level: 82 },
      { name: 'Kubernetes', level: 72 },
      { name: 'Azure', level: 75 },
      { name: 'Git / CI/CD', level: 90 },
    ],
  },
  {
    category: 'Leadership & Methodology',
    icon: 'Target',
    color: '#f0a24a',
    items: [
      { name: 'IT Management', level: 95 },
      { name: 'Agile / Scrum', level: 92 },
      { name: 'Architecture Design', level: 90 },
      { name: 'Technical Mentoring', level: 88 },
      { name: 'Client Relations', level: 85 },
      { name: 'Team Building', level: 88 },
    ],
  },
];
