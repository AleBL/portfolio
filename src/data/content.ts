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
            pt: 'Desenvolvi o JamesPay, gateway de pagamentos da James Delivery em microsserviço (Rails, GraphQL e Braintree), com cartões e Pix, ativado por feature flag ao lado do fluxo antigo.',
            en: 'I built JamesPay, the James Delivery payment gateway as a microservice (Rails, GraphQL and Braintree), with cards and Pix, rolled out behind a feature flag next to the legacy flow.',
        },
        evidence: 'James Delivery',
    },
    {
        title: { pt: 'Modernização de legado', en: 'Legacy modernization' },
        text: {
            pt: 'No time de P&D, migrei partes de um monolito Rails com ExtJS para React e TypeScript, criando endpoints v2 mais enxutos, com paginação e busca melhores que os legados.',
            en: 'In the R&D team I moved parts of a Rails and ExtJS monolith to React and TypeScript, building leaner v2 endpoints with better pagination and search than the legacy ones.',
        },
        evidence: 'Manusis',
    },
    {
        title: { pt: 'Sistemas em produção', en: 'Production systems' },
        text: {
            pt: 'Anos em sustentação e suporte N2/N3. Entre os casos: rastreei ordens de manutenção inconsistentes após uma queda de banco e corrigi a causa com transações atômicas.',
            en: 'Years in sustaining and L2/L3 support. One case: I traced maintenance orders left inconsistent after a database outage and fixed the root cause with atomic transactions.',
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
    pt: 'Desenvolvedor Full Stack',
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
                        'Corrijo falhas críticas e ajusto regras de negócio no monolito Rails (Sidekiq, PostgreSQL e AWS), priorizando a estabilidade da aplicação.',
                    ],
                    en: [
                        'Back on the sustaining team, keeping the product running and evolving.',
                        'I fix critical failures and adjust business rules in the Rails monolith (Sidekiq, PostgreSQL and AWS), with application stability as the priority.',
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
                        'Migrei partes do monolito (Rails e ExtJS) para um novo app em React, TypeScript e Node.js, conectado ao back-end Rails com React on Rails.',
                        'Construí um quadro Kanban de projetos para visualizar e reorganizar tarefas de forma mais intuitiva e legível, com dependências atualizadas em relação ao ExtJS.',
                        'Criei endpoints v2 em vez de alterar os v1, que eram legados e retornavam dados desnecessários: a v2 traz só o que a tela usa, com paginação nova, busca mais rápida e cache melhor.',
                        'Cada endpoint v2 reduziu a dependência do front-end novo em relação ao código legado, contribuindo para desacoplar o monolito.',
                    ],
                    en: [
                        'Migrated parts of the monolith (Rails and ExtJS) to a new app in React, TypeScript and Node.js, connected to the Rails back end through React on Rails.',
                        'Built a project Kanban board to view and reorder tasks in a more intuitive, readable way, on up-to-date dependencies instead of ExtJS.',
                        'Created v2 endpoints rather than changing the legacy v1 ones, which returned unneeded data: v2 returns only what the screen uses, with new pagination, faster search and better caching.',
                        "Each v2 endpoint reduced the new front end's dependency on legacy code, helping to decouple the monolith.",
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
                        'Desenvolvi funcionalidades sob demanda de clientes no monolito Rails (Sidekiq, PostgreSQL e ExtJS), com foco em qualidade e prazo.',
                        'Implementei a antecipação de ordens de manutenção recorrentes: se a manutenção acontece antes ou depois do previsto, o calendário é recalculado e a próxima ordem abre na nova data.',
                        'Criei o bloqueio e a anonimização automáticos de usuários inativos, com prazos de último login e de anonimização definidos pelo administrador de cada cliente, e com opção de ativar ou não.',
                    ],
                    en: [
                        'Delivered customer-requested features in the Rails monolith (Sidekiq, PostgreSQL and ExtJS), focused on quality and deadlines.',
                        'Implemented early completion of recurring maintenance orders: when maintenance happens earlier or later than planned, the calendar is recalculated and the next order opens on the new date.',
                        "Built automatic blocking and anonymization of inactive users, with last-login and anonymization periods set by each customer's admin, and an on/off switch.",
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
                        'Corrigi um bug de ordenação de tarefas: o índice virava string e o JavaScript colocava a tarefa 10 logo após a 1, levando o usuário a ler a sequência errada. Reproduzi o erro em testes locais e corrigi.',
                        'Investiguei ordens de manutenção travadas após uma queda do banco: todas tinham sido atualizadas num intervalo curto, e a causa era uma função sobre dados sensíveis que não usava transação.',
                        'Normalizei os dados e tornei a função atômica com transação (ou faz tudo, ou nada), de modo que as ordens deixaram de ficar presas em um status e podem ser movidas normalmente após uma falha.',
                    ],
                    en: [
                        'Fixed a task-ordering bug: the index was converted to a string, so JavaScript placed task 10 right after task 1 and users read the wrong sequence. Reproduced it in local tests and fixed it.',
                        'Investigated maintenance orders stuck after a database outage: they had all been updated within a short window, and the cause was a function handling sensitive data without a transaction.',
                        'Normalized the data and made the function atomic with a transaction (all or nothing), so orders no longer get stuck in a status and can be moved normally after a failure.',
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
                        'Desenvolvi o JamesPay, gateway de pagamentos em microsserviço (Ruby on Rails, GraphQL e Sidekiq), integrado ao Braintree (PayPal) para cartões de crédito e débito, sem banco próprio: o serviço reaproveitava o do monolito.',
                        'Refatorei o fluxo de pagamento do monolito para alternar, por feature flag, entre o fluxo antigo (Pagar.me, que só aceitava débito e boleto) e o JamesPay, sem trocar tudo de uma vez.',
                        'Implementei a pré-autorização no crédito quando o pedido era criado, com confirmação só quando o pedido chegava.',
                        'Adicionei o Pix, que surgiu durante o desenvolvimento, replanejando a rota do projeto. O serviço foi desenhado para centralizar todos os pagamentos: pedidos, repasses a entregadores e reembolsos.',
                    ],
                    en: [
                        "Built JamesPay, a payment gateway microservice (Ruby on Rails, GraphQL and Sidekiq), integrated with Braintree (PayPal) for credit and debit cards, with no database of its own: it reused the monolith's.",
                        "Refactored the monolith's payment flow to switch, behind a feature flag, between the old flow (Pagar.me, which only accepted debit and boleto) and JamesPay, without moving everything at once.",
                        'Implemented credit card pre-authorization when an order was created, confirmed only once the order arrived.',
                        'Added Pix, which came up mid-project, by re-planning the roadmap. The service was designed to centralize all payments: orders, courier payouts and refunds.',
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
                        'Criei uma ferramenta para automatizar o cadastro de usuários internos e a gestão de perfis e permissões (mais de 400), feitos antes à mão. O acesso ficava restrito ao time de desenvolvimento.',
                        'A ferramenta preservava o controle do processo: toda alteração seguia chamado formal e documento assinado por uma liderança da Vale.',
                        'No suporte N2 e N3 ao sistema de notas fiscais da Vale, um back-end em Ruby on Rails sem front-end próprio, investiguei chamados lendo logs até chegar à causa e resolvi problemas complexos dentro dos SLAs.',
                        'No sistema de gestão em Java e MySQL, onde se consultavam notas, pedidos e pagamentos, fiz manutenções preventivas e a gestão de permissões e de usuários internos, sem alterar a aplicação.',
                    ],
                    en: [
                        'Built a tool to automate internal user registration and role and permission management (400+ permissions), previously done by hand. Access was restricted to the development team.',
                        'The tool kept the process under control: every change followed a formal ticket and a document signed by a Vale leader.',
                        "In L2 and L3 support for Vale's invoicing system, a Ruby on Rails back end with no front end of its own, I investigated tickets by reading logs down to the root cause and solved complex issues within SLAs.",
                        'On the Java and MySQL management system, where invoices, orders and payments could be viewed, I did preventive maintenance and managed permissions and internal users, without changing the application.',
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
                        'Mantive o Sistema de Poda Urbana (Java 7, PrimeFaces, Hibernate e MySQL), organizando o fluxo de solicitações de ponta a ponta.',
                        'Automatizei a análise de árvores cortadas: o solicitante precisava ir presencialmente com documentos e provas e esperar a análise de um agente ambiental; com o sistema, o prazo até a autorização caiu em dias.',
                        'Atuei também em sistemas de licenciamento ambiental e de vigilância sanitária, com a mesma lógica de trocar processos presenciais por fluxos digitais.',
                        'Corrigi bugs e implementei novas regras de negócio conforme as demandas da equipe.',
                    ],
                    en: [
                        'Maintained the Urban Tree Pruning System (Java 7, PrimeFaces, Hibernate and MySQL), organizing the request workflow end to end.',
                        "Automated the analysis of felled trees: applicants used to go in person with documents and evidence and wait for an environmental agent's review; with the system, the time to authorization dropped by days.",
                        'Also worked on environmental licensing and health surveillance systems, applying the same idea of replacing in-person processes with digital workflows.',
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
