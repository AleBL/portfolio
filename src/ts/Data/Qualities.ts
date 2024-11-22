// List of qualities on About section

import { QualityData } from '../Classes/Elements/Quality'
import { i18next } from '../I18n/i18n'

i18next.t("sections.about.qualities.efficient")
i18next.t("sections.about.qualities.attentive")
i18next.t("sections.about.qualities.versatile")
i18next.t("sections.about.qualities.consistent")
i18next.t("sections.about.qualities.collaborative")

export const Qualities: QualityData[] = [
    {
        faClass: 'fa-solid fa-gauge-high',
        name: i18next.t("sections.about.qualities.efficient.title"),
        description: i18next.t("sections.about.qualities.efficient.description")
    },
    {
        faClass: 'fa-solid fa-bug-slash',
        name: i18next.t("sections.about.qualities.attentive.title"),
        description: i18next.t("sections.about.qualities.attentive.description")
    },
    {
        faClass: 'fa-solid fa-shuffle',
        name: i18next.t("sections.about.qualities.versatile.title"),
        description: i18next.t("sections.about.qualities.versatile.description")
    },
    {
        faClass: 'fa-solid fa-anchor',
        name: i18next.t("sections.about.qualities.consistent.title"),
        description: i18next.t("sections.about.qualities.consistent.description")
    },
    {
        faClass: 'fa-solid fa-handshake',
        name: i18next.t("sections.about.qualities.collaborative.title"),
        description: i18next.t("sections.about.qualities.collaborative.description")
    },
    {
        faClass: 'fa-solid fa-bolt',
        name: i18next.t("sections.about.qualities.proactive.title"),
        description: i18next.t("sections.about.qualities.proactive.description")
    }
]