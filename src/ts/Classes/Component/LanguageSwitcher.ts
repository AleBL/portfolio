import { availableLanguages } from '../../I18n/i18n';

class LanguageSwitcher {
    private element: HTMLElement;

    constructor(elementId: string) {
        this.element = document.getElementById(elementId);
        if (!this.element) {
            throw new Error(`Element with id "${elementId}" not found.`);
        }
        this.init();
    }

    private init() {
        this.element.addEventListener('click', (event: Event) => {
            event.preventDefault();
            const target = event.target as HTMLElement;
            const button = target.closest('button.button-band');
            if (button) {
                const img = button.querySelector('img');
                const selectedLanguage = img?.getAttribute('alt')?.toLowerCase();
                this.updateUrlParameter('lang', selectedLanguage);
            }
        });

        this.render();
    }

    private render() {
        this.element.innerHTML = availableLanguages.map(lang => `
            <button class="button-band" role="button">
                <img src="./images/Locale/${lang}.svg" alt="${lang}">
            </button>
        `).join('');
    }

    private updateUrlParameter(key: string, value: string) {
        const url = new URL(window.location.href);
        url.searchParams.set(key, value);
        window.location.assign(url.toString());
    }
}

export default LanguageSwitcher;
