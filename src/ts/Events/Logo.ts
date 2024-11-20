// Events for handling logo animation

import { Logo } from '../Modules/WebPage'
import { DOM } from '../Modules/DOM';

DOM.load().then(document => {
    if(!DOM.isIE()) {
        // DOM.getFirstElement('.menu .hamburger .line').className = '';
        Logo.Logo.classList.remove('preload');
    }
    else {
        Logo.Logo.className = 'logo';
    }
});