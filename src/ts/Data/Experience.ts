// Data for Experience cards

import { ExperienceData } from '../Classes/Elements/Experience'
import { i18next } from '../I18n/i18n';

const Companies = {
    Manusis: {
        svg: 'manusis',
        link: 'https://manusis4.com.br/',
        company: 'Manusis',
        location: "Curitiba, Paraná, Brasil",
        flavor: i18next.t('sections.experience.manusis.text'),
        rds_squad: {
            begin: "03/2023",
            end: "11/2024",
            work_mode: "remote"
        },
        prs_squad: {
            begin: "02/2022",
            end: "03/2023",
            work_mode: "remote"
        },
        sts_squad: {
            begin: "10/2021",
            end: "02/2022",
            work_mode: "remote"
        },
    },
    Stefanini: {
        svg: 'stefanini',
        link: 'https://stefanini.com/',
        company: 'Stefanini',
        location: "Rio de Janeiro, Rio de Janeiro, Brasil",
        flavor: i18next.t('sections.experience.stefanini.text'),
        vale_team: {
            begin: "12/2021",
            end: "01/2022",
            work_mode: "remote"
        },
    },
    James: {
        svg: 'james',
        link: 'https://www.jamesdelivery.com.br/',
        company: 'James Delivery',
        location: "Curitiba, Paraná, Brasil",
        flavor: i18next.t('sections.experience.james.text'),
        payment_squad: {
            begin: "01/2019",
            end: "10/2021",
            work_mode: "remote"
        },
    },
    TeresinaCityHall: {
        svg: 'prefeitura_teresina',
        link: 'https://pmt.pi.gov.br/teresinensedigital/financas/',
        company: i18next.t('sections.experience.teresina_city_hall.name'),
        location: "Teresina, Piauí, Brasil",
        flavor: i18next.t('sections.experience.teresina_city_hall.text'),
        finance_department_team: {
            begin: "10/2017",
            end: "10/2020",
            work_mode: "in_person"
        },
    }
}

const formatData = (data: string) => {
    const [month, year] = data.split('/').map(Number);
    const date = new Date(year, month - 1);
    const language = i18next.language;

    return new Intl.DateTimeFormat(language, {
        month: 'long',
        year: 'numeric',
    }).format(date);
};

export const Experience: ExperienceData[] = [
    {
        svg: Companies.Manusis.svg,
        ...Companies.Manusis,
        team: i18next.t('sections.experience.manusis.rds_squad.name'),
        position: i18next.t('sections.experience.manusis.rds_squad.position'),
        location: `${Companies.Manusis.location} - ${i18next.t(`sections.experience.work_mode.${Companies.Manusis.rds_squad.work_mode}`)}`,
        begin: formatData(Companies.Manusis.rds_squad.begin),
        end: formatData(Companies.Manusis.rds_squad.end),
        roles: [
            i18next.t('sections.experience.manusis.rds_squad.roles.0'),
            i18next.t('sections.experience.manusis.rds_squad.roles.1'),
            i18next.t('sections.experience.manusis.rds_squad.roles.2'),
            i18next.t('sections.experience.manusis.rds_squad.roles.3'),
            i18next.t('sections.experience.manusis.rds_squad.roles.4'),
        ]
    },
    {
        collapse: true,
        ...Companies.Manusis,
        team: i18next.t('sections.experience.manusis.prs_squad.name'),
        position: i18next.t('sections.experience.manusis.prs_squad.position'),
        location: `${Companies.Manusis.location} - ${i18next.t(`sections.experience.work_mode.${Companies.Manusis.rds_squad.work_mode}`)}`,
        begin: formatData(Companies.Manusis.prs_squad.begin),
        end: formatData(Companies.Manusis.prs_squad.end),
        roles: [
            i18next.t('sections.experience.manusis.prs_squad.roles.0'),
            i18next.t('sections.experience.manusis.prs_squad.roles.1'),
            i18next.t('sections.experience.manusis.prs_squad.roles.2'),
            i18next.t('sections.experience.manusis.rds_squad.roles.3'),
            i18next.t('sections.experience.manusis.rds_squad.roles.4'),
        ]
    },
    {
        collapse: true,
        ...Companies.Manusis,
        team: i18next.t('sections.experience.manusis.sts_squad.name'),
        location: `${Companies.Manusis.location} - ${i18next.t(`sections.experience.work_mode.${Companies.Manusis.rds_squad.work_mode}`)}`,
        position: i18next.t('sections.experience.sts_squad.position'),
        begin: formatData(Companies.Manusis.sts_squad.begin),
        end: formatData(Companies.Manusis.sts_squad.end),

        roles: [
            i18next.t('sections.experience.manusis.sts_squad.roles.0'),
            i18next.t('sections.experience.manusis.sts_squad.roles.1'),
        ]
    },
    {
        collapse: true,
        ...Companies.Stefanini,
        team: i18next.t('sections.experience.stefanini.vale_team.name'),
        location: `${Companies.Stefanini.location} - ${i18next.t(`sections.experience.work_mode.${Companies.Stefanini.vale_team.work_mode}`)}`,
        position: i18next.t('sections.experience.stefanini.vale_team.position'),
        begin: formatData(Companies.Stefanini.vale_team.begin),
        end: formatData(Companies.Stefanini.vale_team.end),
        roles: [
            i18next.t('sections.experience.stefanini.vale_team.roles.0'),
            i18next.t('sections.experience.stefanini.vale_team.roles.1'),
            i18next.t('sections.experience.stefanini.vale_team.roles.2'),
            i18next.t('sections.experience.stefanini.vale_team.roles.3'),
            i18next.t('sections.experience.stefanini.vale_team.roles.4'),
            i18next.t('sections.experience.stefanini.vale_team.roles.5'),
            i18next.t('sections.experience.stefanini.vale_team.roles.6'),
        ]
    },
    {
        collapse: true,
        ...Companies.James,
        team: i18next.t('sections.experience.james.payment_squad.name'),
        location: `${Companies.James.location} - ${i18next.t(`sections.experience.work_mode.${Companies.James.payment_squad.work_mode}`)}`,
        position: i18next.t('sections.experience.james.payment_squad.position'),
        begin: formatData(Companies.James.payment_squad.begin),
        end: formatData(Companies.James.payment_squad.end),
        roles: [
            i18next.t('sections.experience.james.payment_squad.roles.0'),
            i18next.t('sections.experience.james.payment_squad.roles.1'),
            i18next.t('sections.experience.james.payment_squad.roles.2'),
            i18next.t('sections.experience.james.payment_squad.roles.3'),
        ]
    },
    {
        collapse: true,
        ...Companies.TeresinaCityHall,
        team: i18next.t('sections.experience.teresina_city_hall.finance_department_team.name'),
        location: `${Companies.TeresinaCityHall.location} - ${i18next.t(`sections.experience.work_mode.${Companies.TeresinaCityHall.finance_department_team.work_mode}`)}`,
        position: i18next.t('sections.experience.teresina_city_hall.finance_department_team.position'),
        begin: formatData(Companies.TeresinaCityHall.finance_department_team.begin),
        end: formatData(Companies.TeresinaCityHall.finance_department_team.end),
        roles: [
            i18next.t('sections.experience.teresina_city_hall.finance_department_team.roles.0'),
            i18next.t('sections.experience.teresina_city_hall.finance_department_team.roles.1'),
            i18next.t('sections.experience.teresina_city_hall.finance_department_team.roles.2'),
            i18next.t('sections.experience.teresina_city_hall.finance_department_team.roles.3'),
            i18next.t('sections.experience.teresina_city_hall.finance_department_team.roles.4'),
            i18next.t('sections.experience.teresina_city_hall.finance_department_team.roles.5'),
        ]
    }
]