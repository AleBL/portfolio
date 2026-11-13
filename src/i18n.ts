// Languages, fixed UI strings and formatting helpers.

export const languages = ['pt', 'en'] as const;
export type Lang = (typeof languages)[number];

/** Translated value: one field per language, enforced by TypeScript. */
export type Localized<T = string> = Record<Lang, T>;

export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en' };
export const ogLocale: Record<Lang, string> = { pt: 'pt_BR', en: 'en_US' };

export const homePath: Record<Lang, string> = { pt: '/', en: '/en/' };
export const resumePath: Record<Lang, string> = { pt: '/curriculo/', en: '/en/resume/' };

export const ui = {
    pt: {
        skipToContent: 'Pular para o conteúdo',
        nav: {
            about: 'Sobre',
            experience: 'Experiência',
            projects: 'Projetos',
            skills: 'Tecnologias',
            education: 'Formação',
            contact: 'Contato',
        },
        menu: 'Menu',
        mainNav: 'Navegação principal',
        switchLanguage: 'Read in English',
        themeToggle: 'Alternar tema claro e escuro',
        hero: {
            contact: 'Fale comigo',
            projects: 'Ver projetos',
            resume: 'Currículo',
            yearsOfExperience: (years: number) => `+${years} anos de experiência`,
        },
        sections: {
            about: { kicker: 'sobre', title: 'Sobre mim' },
            experience: { kicker: 'experiência', title: 'Onde trabalhei' },
            projects: {
                kicker: 'projetos',
                title: 'Projetos pessoais',
                intro: 'Projetos que desenvolvi para estudar e resolver problemas reais, com código aberto no GitHub.',
                others: 'Outros projetos',
            },
            skills: { kicker: 'tecnologias', title: 'Com o que trabalho' },
            education: { kicker: 'formação', title: 'Formação acadêmica' },
            contact: {
                kicker: 'contato',
                title: 'Vamos conversar?',
                text: 'Estou aberto a novas oportunidades como desenvolvedor full stack. O jeito mais rápido de falar comigo é por e-mail ou pelo LinkedIn.',
                copy: 'Copiar e-mail',
                copied: 'E-mail copiado',
            },
        },
        present: 'atual',
        current: 'Atual',
        completed: 'Concluído',
        demo: 'Ver online',
        code: 'Código',
        notFound: {
            title: 'Página não encontrada',
            text: 'O endereço que você acessou não existe ou foi movido.',
            back: 'Voltar para o início',
        },
        footer: { builtWith: 'Feito com Astro', source: 'Código no GitHub' },
        resume: {
            title: 'Currículo',
            print: 'Imprimir ou salvar PDF',
            back: 'Voltar ao portfólio',
            summary: 'Resumo',
            experience: 'Experiência profissional',
            education: 'Formação',
            projects: 'Projetos selecionados',
            skills: 'Tecnologias',
        },
    },
    en: {
        skipToContent: 'Skip to content',
        nav: {
            about: 'About',
            experience: 'Experience',
            projects: 'Projects',
            skills: 'Skills',
            education: 'Education',
            contact: 'Contact',
        },
        menu: 'Menu',
        mainNav: 'Main navigation',
        switchLanguage: 'Ler em português',
        themeToggle: 'Toggle light and dark theme',
        hero: {
            contact: 'Get in touch',
            projects: 'See projects',
            resume: 'Résumé',
            yearsOfExperience: (years: number) => `${years}+ years of experience`,
        },
        sections: {
            about: { kicker: 'about', title: 'About me' },
            experience: { kicker: 'experience', title: 'Where I have worked' },
            projects: {
                kicker: 'projects',
                title: 'Personal projects',
                intro: 'Projects I built to learn and to solve real problems, all open source on GitHub.',
                others: 'Other projects',
            },
            skills: { kicker: 'skills', title: 'What I work with' },
            education: { kicker: 'education', title: 'Education' },
            contact: {
                kicker: 'contact',
                title: "Let's talk?",
                text: 'I am open to new opportunities as a full stack developer. The fastest way to reach me is by email or LinkedIn.',
                copy: 'Copy email',
                copied: 'Email copied',
            },
        },
        present: 'present',
        current: 'Current',
        completed: 'Completed',
        demo: 'Live demo',
        code: 'Code',
        notFound: {
            title: 'Page not found',
            text: 'The address you opened does not exist or has moved.',
            back: 'Back to home',
        },
        footer: { builtWith: 'Built with Astro', source: 'Source on GitHub' },
        resume: {
            title: 'Résumé',
            print: 'Print or save as PDF',
            back: 'Back to portfolio',
            summary: 'Summary',
            experience: 'Professional experience',
            education: 'Education',
            projects: 'Selected projects',
            skills: 'Skills',
        },
    },
} as const;

export type UI = (typeof ui)[Lang];

const months: Localized<readonly string[]> = {
    pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

/** Turns "2021-10" into "out/2021" (pt) or "Oct 2021" (en). */
export function formatMonth(yearMonth: string, lang: Lang): string {
    const [year, month] = yearMonth.split('-').map(Number);
    const name = months[lang][month - 1];
    return lang === 'pt' ? `${name}/${year}` : `${name} ${year}`;
}

/** Readable period; a missing end date means it is still ongoing. */
export function formatPeriod(start: string, end: string | null, lang: Lang): string {
    return `${formatMonth(start, lang)} – ${end ? formatMonth(end, lang) : ui[lang].present}`;
}

/** Full years since a "YYYY-MM" date, computed at build time. */
export function yearsSince(yearMonth: string, now = new Date()): number {
    const [year, month] = yearMonth.split('-').map(Number);
    const elapsed = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
    return Math.floor(elapsed / 12);
}
