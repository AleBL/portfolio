// Data for Experience cards

import { ExperienceData } from '../Classes/Elements/Experience';
import { i18next } from '../I18n/i18n';

const formatDateForExperience = (data: string) => {
    const [month, year] = data.split('/').map(Number);
    const date = new Date(year, month - 1);
    const language = i18next.language;

    return new Intl.DateTimeFormat(language, {
        month: 'long',
        year: 'numeric',
    }).format(date);
};

const formatEndDateForExperience = (data?: string) => {
    if (!data) {
        return i18next.t('sections.experience.present');
    }

    return formatDateForExperience(data);
};

interface Squad {
    begin: string;
    end?: string;
    work_mode: 'remote' | 'in_person';
}

interface Company {
    svg: string;
    link: string;
    company: string;
    location: string;
    flavor: string;
    [key: string]: string | Squad | undefined;
}

const Companies: Record<string, Company> = {
    manusis: {
        svg: 'manusis',
        link: 'https://manusis4.com.br/',
        company: 'Manusis',
        location: "Curitiba, Paraná, Brasil",
        flavor: i18next.t('sections.experience.manusis.text'),
        sts_squad_two: {
            begin: "02/2025",
            work_mode: "remote"
        },
        rds_squad: {
            begin: "03/2023",
            end: "11/2024",
            work_mode: "remote"
        },
        prs_squad: {
            begin: "07/2022",
            end: "03/2023",
            work_mode: "remote"
        },
        sts_squad: {
            begin: "10/2021",
            end: "07/2022",
            work_mode: "remote"
        },
    },
    james: {
        svg: 'james',
        link: 'https://www.jamesdelivery.com.br/',
        company: 'James Delivery',
        location: "Curitiba, Paraná, Brasil",
        flavor: i18next.t('sections.experience.james.text'),
        payment_squad: {
            begin: "04/2020",
            end: "08/2022",
            work_mode: "remote"
        },
    },
    stefanini: {
        svg: 'stefanini',
        link: 'https://stefanini.com/',
        company: 'Stefanini',
        location: "Rio de Janeiro, Rio de Janeiro, Brasil",
        flavor: i18next.t('sections.experience.stefanini.text'),
        vale_team: {
            begin: "11/2018",
            end: "01/2020",
            work_mode: "remote"
        },
    },
    teresina_city_hall: {
        svg: 'prefeitura_teresina',
        link: 'https://pmt.pi.gov.br/teresinensedigital/financas/',
        company: i18next.t('sections.experience.teresina_city_hall.name'),
        location: "Teresina, Piauí, Brasil",
        flavor: i18next.t('sections.experience.teresina_city_hall.text'),
        finance_department_team: {
            begin: "07/2016",
            end: "10/2018",
            work_mode: "in_person"
        },
    }
};

type SquadKeys = 'sts_squad_two' | 'rds_squad' | 'prs_squad' | 'sts_squad' | 'vale_team' | 'payment_squad' | 'finance_department_team';

const createExperience = ({
    companyKey,
    squadKey,
    collapse = false
}: {
    companyKey: keyof typeof Companies;
    squadKey: SquadKeys;
    collapse?: boolean;
}): ExperienceData => {
    const company = Companies[companyKey];
    const squad = company[squadKey] as Squad;

    const rolesI18n = i18next.getResourceBundle(i18next.language, 'translation').sections.experience[companyKey][squadKey].roles as Record<string, string>;
    return {
        collapse,
        svg: company.svg,
        link: company.link,
        company: company.company,
        location: `${company.location} - ${i18next.t(`sections.experience.work_mode.${squad.work_mode}`)}`,
        flavor: company.flavor,
        team: i18next.t(`sections.experience.${companyKey}.${squadKey}.name`),
        position: i18next.t(`sections.experience.${companyKey}.${squadKey}.position`),
        begin: formatDateForExperience(squad.begin),
        end: formatEndDateForExperience(squad.end),
        roles: Object.values(rolesI18n)
    };
};

export const Experience: ExperienceData[] = [
    createExperience({
        companyKey: 'manusis',
        squadKey: 'sts_squad_two',
    }),
    createExperience({
        companyKey: 'manusis',
        squadKey: 'rds_squad',
        collapse: true
    }),
    createExperience({
        companyKey: 'manusis',
        squadKey: 'prs_squad',
        collapse: true
    }),
    createExperience({
        companyKey: 'manusis',
        squadKey: 'sts_squad',
        collapse: true
    }),
    createExperience({
        companyKey: 'james',
        squadKey: 'payment_squad',
        collapse: true
    }),
    createExperience({
        companyKey: 'stefanini',
        squadKey: 'vale_team',
        collapse: true
    }),
    createExperience({
        companyKey: 'teresina_city_hall',
        squadKey: 'finance_department_team',
        collapse: true
    })
];
