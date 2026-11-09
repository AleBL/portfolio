// All portfolio and résumé content lives here, in both languages.
// Dates use the "YYYY-MM" format; `end: null` means "present".

import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n';

import manusisLogo from '../assets/companies/manusis.png';
import jamesLogo from '../assets/companies/james.png';
import stefaniniLogo from '../assets/companies/stefanini.png';
import teresinaLogo from '../assets/companies/prefeitura-teresina.png';
import uespiLogo from '../assets/companies/uespi.png';
import deckforgeShot from '../assets/projects/deckforge.png';

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------

export const profile = {
    name: 'Alessandro Barros',
    fullName: 'Alessandro Barros Leal',
    role: {
        pt: 'Desenvolvedor Full Stack',
        en: 'Full Stack Developer',
    } satisfies Localized,
    careerStart: '2016-07',
    location: {
        pt: 'Brasil · trabalho remoto',
        en: 'Brazil · remote',
    } satisfies Localized,
    email: 'ale_alessandro_ale@hotmail.com',
    github: 'https://github.com/AleBL',
    linkedin: 'https://www.linkedin.com/in/alessandro-barros-leal/',
    repository: 'https://github.com/AleBL/portfolio',
    headline: {
        pt: 'Desenvolvo aplicações web de ponta a ponta, de interfaces em TypeScript a APIs em Ruby on Rails e Go, e cuido de sistemas em produção que não podem parar.',
        en: 'I build web applications end to end, from TypeScript interfaces to Ruby on Rails and Go APIs, and I look after production systems that cannot stop.',
    } satisfies Localized,
    description: {
        pt: 'Desenvolvedor Full Stack com experiência em pagamentos, modernização de sistemas legados e sustentação de produtos em produção.',
        en: 'Full stack developer experienced in payments, legacy system modernization and keeping production products healthy.',
    } satisfies Localized,
    about: {
        pt: [
            'Sou desenvolvedor full stack, formado em Ciência da Computação pela UESPI. Desde 2016 trabalho com sistemas web em produção, passando pelo setor público, por consultoria, por uma plataforma de delivery e por um software de gestão de manutenção industrial.',
            'Gosto de problemas em que o código precisa ser confiável: pagamentos, regras de negócio complexas e sistemas legados que precisam evoluir sem parar de funcionar. No dia a dia, transito entre back-end, front-end e o diagnóstico de problemas em produção.',
        ],
        en: [
            'I am a full stack developer with a degree in Computer Science from UESPI. Since 2016 I have worked on production web systems across the public sector, IT consulting, a delivery platform and an industrial maintenance management product.',
            'I enjoy problems where the code has to be reliable: payments, complex business rules and legacy systems that must evolve without going down. Day to day I move between back end, front end and diagnosing production issues.',
        ],
    } satisfies Localized<string[]>,
};

// ---------------------------------------------------------------------------
// Highlights (what I solve, backed by evidence)
// ---------------------------------------------------------------------------

export interface Highlight {
    title: Localized;
    text: Localized;
    evidence: string;
}

export const highlights: Highlight[] = [
    {
        title: { pt: 'Pagamentos e microsserviços', en: 'Payments and microservices' },
        text: {
            pt: 'Desenvolvi o JamesPay, gateway de pagamentos da James Delivery em microsserviços, e incluí débito e Pix além do crédito.',
            en: 'I built JamesPay, the James Delivery payment gateway on microservices, adding debit cards and Pix on top of credit.',
        },
        evidence: 'James Delivery',
    },
    {
        title: { pt: 'Modernização de legado', en: 'Legacy modernization' },
        text: {
            pt: 'No time de P&D, migrei partes de um monolito para tecnologias atuais, com endpoints otimizados e componentes reutilizáveis.',
            en: 'In the R&D team I moved parts of a monolith to modern technology, with optimized endpoints and reusable UI components.',
        },
        evidence: 'Manusis',
    },
    {
        title: { pt: 'Sistemas em produção', en: 'Production systems' },
        text: {
            pt: 'Anos em sustentação e suporte N2/N3: diagnóstico de falhas críticas, ajustes de regra de negócio e cumprimento de SLA.',
            en: 'Years in sustaining and L2/L3 support: diagnosing critical failures, adjusting business rules and meeting SLAs.',
        },
        evidence: 'Manusis · Stefanini',
    },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export interface Role {
    team: Localized;
    title: Localized;
    start: string;
    end: string | null;
    bullets: Localized<string[]>;
}

export interface Company {
    name: Localized;
    url: string;
    logo: ImageMetadata;
    location: Localized;
    context: Localized;
    /** Most recent first. */
    roles: Role[];
}

const fullStackRole: Localized = {
    pt: 'Desenvolvedor Full Stack Pleno',
    en: 'Full Stack Developer',
};

export const experience: Company[] = [
    {
        name: { pt: 'Manusis', en: 'Manusis' },
        url: 'https://manusis4.com.br/',
        logo: manusisLogo,
        location: { pt: 'Curitiba, PR · Remoto', en: 'Curitiba, Brazil · Remote' },
        context: {
            pt: 'Software de gestão de manutenção e ativos industriais, com integração a ERP e IoT.',
            en: 'Industrial maintenance and asset management software, integrated with ERP and IoT.',
        },
        roles: [
            {
                team: { pt: 'Time de Sustentação (STS)', en: 'Sustaining team (STS)' },
                title: fullStackRole,
                start: '2025-02',
                end: null,
                bullets: {
                    pt: [
                        'Retornei ao time de sustentação para dar continuidade e evoluir o produto.',
                        'Corrijo falhas críticas e ajusto regras de negócio, priorizando a estabilidade da aplicação.',
                    ],
                    en: [
                        'Back on the sustaining team, keeping the product running and evolving.',
                        'I fix critical failures and adjust business rules with application stability as the priority.',
                    ],
                },
            },
            {
                team: {
                    pt: 'Pesquisa e Desenvolvimento (RDS)',
                    en: 'Research and Development (RDS)',
                },
                title: fullStackRole,
                start: '2023-03',
                end: '2024-11',
                bullets: {
                    pt: [
                        'Migrei partes da aplicação para tecnologias mais recentes.',
                        'Desenvolvi endpoints otimizados e componentes reutilizáveis no front-end.',
                        'Contribuí para reduzir o acoplamento do monolito com melhorias contínuas de arquitetura.',
                    ],
                    en: [
                        'Migrated parts of the application to newer technology.',
                        'Built optimized endpoints and reusable front-end components.',
                        'Helped reduce monolith coupling through continuous architecture improvements.',
                    ],
                },
            },
            {
                team: { pt: 'Time de Projetos (PRS)', en: 'Projects team (PRS)' },
                title: fullStackRole,
                start: '2022-07',
                end: '2023-03',
                bullets: {
                    pt: [
                        'Desenvolvi novas funcionalidades sob demanda de clientes, com foco em qualidade e prazo.',
                    ],
                    en: [
                        'Delivered new features requested by customers, focused on quality and deadlines.',
                    ],
                },
            },
            {
                team: { pt: 'Time de Sustentação (STS)', en: 'Sustaining team (STS)' },
                title: fullStackRole,
                start: '2021-10',
                end: '2022-07',
                bullets: {
                    pt: [
                        'Resolvi bugs e ajustei regras de negócio com agilidade, garantindo a continuidade da aplicação.',
                    ],
                    en: [
                        'Fixed bugs and adjusted business rules quickly to keep the application running.',
                    ],
                },
            },
        ],
    },
    {
        name: { pt: 'James Delivery', en: 'James Delivery' },
        url: 'https://www.jamesdelivery.com.br/',
        logo: jamesLogo,
        location: { pt: 'Curitiba, PR · Remoto', en: 'Curitiba, Brazil · Remote' },
        context: {
            pt: 'Plataforma de delivery de restaurantes, mercados e outros produtos.',
            en: 'Delivery platform for restaurants, groceries and other goods.',
        },
        roles: [
            {
                team: { pt: 'Time de Pagamentos', en: 'Payments team' },
                title: { pt: 'Desenvolvedor Back-end Pleno', en: 'Back-end Developer' },
                start: '2020-04',
                end: '2022-08',
                bullets: {
                    pt: [
                        'Desenvolvi o JamesPay, gateway de pagamentos próprio em arquitetura de microsserviços.',
                        'Incluí cartões de débito e Pix além do crédito, ampliando as opções de pagamento e reduzindo custos.',
                        'Mantive as integrações durante a transição do monolito para microsserviços.',
                    ],
                    en: [
                        'Built JamesPay, the in-house payment gateway, on a microservices architecture.',
                        'Added debit cards and Pix on top of credit, widening payment options and cutting costs.',
                        'Kept integrations working through the move from monolith to microservices.',
                    ],
                },
            },
        ],
    },
    {
        name: { pt: 'Stefanini', en: 'Stefanini' },
        url: 'https://stefanini.com/',
        logo: stefaniniLogo,
        location: { pt: 'Rio de Janeiro, RJ · Remoto', en: 'Rio de Janeiro, Brazil · Remote' },
        context: {
            pt: 'Consultoria global de TI. Atuei no time alocado para a Vale.',
            en: 'Global IT consulting company. I worked on the team serving Vale.',
        },
        roles: [
            {
                team: { pt: 'Time Vale', en: 'Vale team' },
                title: { pt: 'Engenheiro de Suporte de Software', en: 'Software Support Engineer' },
                start: '2018-11',
                end: '2020-01',
                bullets: {
                    pt: [
                        'Monitorei o desempenho dos sistemas e propus melhorias preventivas para evitar interrupções.',
                        'Atuei no suporte N2 e N3, resolvendo problemas complexos de software dentro dos SLAs.',
                    ],
                    en: [
                        'Monitored system performance and proposed preventive improvements to avoid outages.',
                        'Handled L2 and L3 support, solving complex software issues within SLAs.',
                    ],
                },
            },
        ],
    },
    {
        name: { pt: 'Prefeitura de Teresina', en: 'Teresina City Hall' },
        url: 'https://pmt.pi.gov.br/teresinensedigital/financas/',
        logo: teresinaLogo,
        location: { pt: 'Teresina, PI · Presencial', en: 'Teresina, Brazil · On-site' },
        context: {
            pt: 'Secretaria Municipal de Finanças (SEMF).',
            en: 'Municipal Finance Department (SEMF).',
        },
        roles: [
            {
                team: { pt: 'Secretaria de Finanças', en: 'Finance Department' },
                title: { pt: 'Desenvolvedor Full Stack Júnior', en: 'Junior Full Stack Developer' },
                start: '2016-07',
                end: '2018-10',
                bullets: {
                    pt: [
                        'Mantive o Sistema de Poda Urbana, organizando o fluxo de solicitações de ponta a ponta.',
                        'Automatizei a análise de árvores cortadas, trocando um processo manual por software e reduzindo o tempo de análise.',
                        'Corrigi bugs e implementei novas regras de negócio conforme as demandas da equipe.',
                    ],
                    en: [
                        'Maintained the Urban Tree Pruning System, organizing the request workflow end to end.',
                        'Automated the analysis of felled trees, replacing a manual process with software and cutting analysis time.',
                        'Fixed bugs and implemented new business rules as the team needed.',
                    ],
                },
            },
        ],
    },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export interface Project {
    name: string;
    kind: Localized;
    summary: Localized;
    highlights: Localized<string[]>;
    stack: string[];
    repo: string;
    demo?: string;
    image?: ImageMetadata;
    /** Real commands from the README, shown when there is no screenshot. */
    terminal?: string[];
}

export const featuredProjects: Project[] = [
    {
        name: 'MTG Deck Forge',
        kind: { pt: 'Aplicação web e desktop', en: 'Web and desktop app' },
        summary: {
            pt: 'Busca de cartas de Magic: The Gathering e montagem de decks com a API do Scryfall, com coleção pessoal, histórico de versões e planejador de orçamento.',
            en: 'Magic: The Gathering card search and deck building on the Scryfall API, with a personal collection, deck version history and a budget planner.',
        },
        highlights: {
            pt: [
                'Simula mil partidas por deck para medir mulligan e curva de terrenos.',
                'Renderização virtualizada para coleções com milhares de cartas.',
                'Modo offline explícito e recuperação de erro isolada por seção.',
            ],
            en: [
                'Simulates a thousand games per deck to measure mulligans and land curve.',
                'Virtualized rendering for collections with thousands of cards.',
                'Explicit offline behavior and per-section error recovery.',
            ],
        },
        stack: ['TypeScript', 'React 19', 'Electron', 'Vite', 'Tailwind CSS'],
        repo: 'https://github.com/AleBL/magic-the-gathering-deckforge',
        demo: 'https://mtgdeckforge.a-barros.uk/',
        image: deckforgeShot,
    },
    {
        name: 'TaskFlow Board',
        kind: { pt: 'Aplicação full stack', en: 'Full stack app' },
        summary: {
            pt: 'Gerenciador de tarefas em Kanban com projetos, comentários, busca com filtros e painel de métricas.',
            en: 'Kanban task manager with projects, comments, filtered search and a metrics dashboard.',
        },
        highlights: {
            pt: [
                'API tipada de ponta a ponta com tRPC e validação com Zod.',
                'Arrastar e soltar entre colunas com dnd-kit.',
                'Persistência com Drizzle ORM e testes com Vitest.',
            ],
            en: [
                'End-to-end typed API with tRPC and Zod validation.',
                'Drag and drop between columns with dnd-kit.',
                'Persistence with Drizzle ORM and tests with Vitest.',
            ],
        },
        stack: ['React 19', 'TypeScript', 'tRPC', 'Express', 'Drizzle ORM'],
        repo: 'https://github.com/AleBL/taskflow-board',
        demo: 'https://taskflow-board-nine.vercel.app/',
        terminal: ['pnpm install', 'pnpm db:migrate', 'pnpm test', 'pnpm dev'],
    },
    {
        name: 'Social Network',
        kind: { pt: 'API e front-end', en: 'API and front end' },
        summary: {
            pt: 'Rede social com cadastro de usuários, amizades, amigos em comum e recomendações baseadas em conexões mútuas, modelada como grafo.',
            en: 'Social network with user sign-up, friendships, mutual friends and recommendations based on shared connections, modeled as a graph.',
        },
        highlights: {
            pt: [
                'Recomendações de amizade com consultas em grafo no Neo4j.',
                'API REST em Node.js e Express, com testes em Jest.',
                'Ambiente completo com Docker Compose: API, front-end Vue e banco.',
            ],
            en: [
                'Friend recommendations through graph queries on Neo4j.',
                'REST API in Node.js and Express, tested with Jest.',
                'Full environment with Docker Compose: API, Vue front end and database.',
            ],
        },
        stack: ['Node.js', 'Express', 'Vue.js', 'Neo4j', 'Docker'],
        repo: 'https://github.com/AleBL/social-network',
        terminal: ['cp .env.example .env', 'docker-compose up --build'],
    },
    {
        name: 'ZSSN API',
        kind: { pt: 'API REST', en: 'REST API' },
        summary: {
            pt: 'API para uma rede de sobreviventes de um apocalipse zumbi: cadastro, localização, sinalização de infectados, troca de itens e relatórios.',
            en: 'API for a zombie apocalypse survivor network: registration, location, infection flags, item trades and reports.',
        },
        highlights: {
            pt: [
                'Regras de negócio para trocas de itens entre sobreviventes.',
                'Relatórios de infectados, média de recursos e pontos perdidos.',
                'Testes com RSpec, CI no CircleCI e documentação no Postman.',
            ],
            en: [
                'Business rules for item trades between survivors.',
                'Reports on infected survivors, average resources and lost points.',
                'RSpec tests, CircleCI pipeline and Postman documentation.',
            ],
        },
        stack: ['Ruby', 'Ruby on Rails', 'RSpec', 'CircleCI'],
        repo: 'https://github.com/AleBL/ZSSN-API',
        terminal: ['rails db:setup', 'bundle exec rspec'],
    },
];

export interface SmallProject {
    name: string;
    summary: Localized;
    stack: string[];
    repo: string;
    demo?: string;
}

export const otherProjects: SmallProject[] = [
    {
        name: 'Shopping Cart',
        summary: {
            pt: 'Carrinho de compras com cupons, frete por peso e 33 testes com React Testing Library.',
            en: 'Shopping cart with coupons, weight-based shipping and 33 tests with React Testing Library.',
        },
        stack: ['React', 'json-server', 'Testing Library'],
        repo: 'https://github.com/AleBL/Shopping-Cart',
        demo: 'https://shopping-cart-ten-sigma.vercel.app',
    },
    {
        name: 'Media App',
        summary: {
            pt: 'Organiza filmes e séries assistidos usando a API do TMDB (requer chave própria).',
            en: 'Keeps track of watched movies and shows using the TMDB API (requires your own key).',
        },
        stack: ['Vue 3', 'Electron', 'Vite'],
        repo: 'https://github.com/AleBL/Media-App',
        demo: 'https://media-app-phi.vercel.app',
    },
    {
        name: 'URL Shortener',
        summary: {
            pt: 'API de encurtamento de URLs com redirecionamento pelo código curto.',
            en: 'URL shortening API with redirects by short code.',
        },
        stack: ['Go', 'GORM', 'SQLite'],
        repo: 'https://github.com/AleBL/url-shortner-api-go',
    },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export interface SkillGroup {
    title: Localized;
    items: string[];
}

export const skills: SkillGroup[] = [
    {
        title: { pt: 'Linguagens', en: 'Languages' },
        items: ['TypeScript', 'JavaScript', 'Ruby', 'Go', 'Python', 'Java', 'C#'],
    },
    {
        title: { pt: 'Back-end', en: 'Back end' },
        items: ['Ruby on Rails', 'Node.js', 'Express', 'NestJS', 'Spring', 'REST'],
    },
    {
        title: { pt: 'Front-end', en: 'Front end' },
        items: ['React', 'Angular', 'Vue.js', 'HTML', 'CSS', 'Sass', 'Tailwind CSS', 'Bootstrap'],
    },
    {
        title: { pt: 'Dados', en: 'Data' },
        items: ['PostgreSQL', 'MySQL', 'Redis', 'Neo4j', 'SQLite'],
    },
    {
        title: { pt: 'Testes', en: 'Testing' },
        items: ['RSpec', 'Jest', 'Vitest', 'Testing Library'],
    },
    {
        title: { pt: 'DevOps e ferramentas', en: 'DevOps and tooling' },
        items: ['Docker', 'Git', 'GitHub Actions', 'Vercel', 'Vite', 'Webpack'],
    },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export interface Education {
    institution: string;
    shortName: string;
    url: string;
    logo: ImageMetadata;
    degree: Localized;
    location: Localized;
    start: string;
    end: string;
}

export const education: Education[] = [
    {
        institution: 'Universidade Estadual do Piauí',
        shortName: 'UESPI',
        url: 'https://www.uespi.br/',
        logo: uespiLogo,
        degree: {
            pt: 'Bacharelado em Ciência da Computação',
            en: 'B.Sc. in Computer Science',
        },
        location: { pt: 'Teresina, PI', en: 'Teresina, Brazil' },
        start: '2015-03',
        end: '2020-11',
    },
];
