import {openPageNotLoggedIn, openPageLogged} from './loadPage.js';

document.addEventListener('DOMContentLoaded', () => {
    const location = window.location.pathname.replace(/^.*\//g, '');
    if (location) {
        if (location == 'login' || location == 'register') {
            return openPageNotLoggedIn(location);
        }
        return openPageLogged(location);
    }
    openPageNotLoggedIn('login');
});