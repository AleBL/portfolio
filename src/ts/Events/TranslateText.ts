import { i18next } from '../I18n/i18n'

const changeText = (id: string, key: string): void => {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = i18next.t(key);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.title = `Alesandro Barros | ${i18next.t("my_position")}`;
    changeText("about_div", "sections.about.title");
    changeText("skills_div", "sections.skills.title");
    changeText("experience_div", "sections.experience.title");
    changeText("projects_div", "sections.projects.title");
    changeText("education_div", "sections.education.title");
    changeText("connect_div", "sections.connect.title");
    changeText("my_position_div", "my_position");
    changeText("hello_alessandro_h1", "hello_alessandro");
    changeText("skill_short_text_p", "sections.skills.short_text");
    changeText("skill_filter_p", "sections.skills.filter");
});
