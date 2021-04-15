import config from './config.js';
import showLoading from './loading.js';
import notFound from './notFound.js';
import {yearDate} from './date.js';
import {addTooltip} from './tooltip.js';
import {addPopover} from './popover.js';
import hideOffcanvas from './offcanvas.js';
import {addSubmitLogin, showSave, showData, removeData} from './login.js';
import addSubmitRegister from './register.js';
import {showModalError} from './modal.js';
import addClickMenu from './menu.js';
import {showProfile, addSubmitChangeName} from './profile.js';
import addClickSearchBattlePvp from './searchBattlePvp.js';

export const openPageNotLoggedIn = (page) => {
    const main = document.querySelector('main');
    main.innerHTML = showLoading();

    fetch(`${config.urlFront}/not-logged-in.html`)
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        main.innerHTML = data;
        yearDate();
        addClickMenu(loadPage);
        loadPage(page);
    })
    .catch((error) => {
        return showModalError(error.message);
    });
}

export const openPageLogged = (page) => {
    const main = document.querySelector('main');
    main.innerHTML = showLoading();

    fetch(`${config.urlFront}/logged.html`)
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        main.innerHTML = data;
        addClickMenu(loadPage);
        loadPage(page);
    })
    .catch((error) => {
        return showModalError(error.message);
    });
}

const loadPage = (page) => {
    if (page == 'logout') {
        hideOffcanvas();
        removeData();
        return openPageNotLoggedIn('login');
    }
    const content = document.getElementById('content');
    content.innerHTML = showLoading();

    fetch(`${config.urlFront}/pages/${page}.html`)
    .then((response) => {
        if (!response.ok) throw new Error(`
            <h2>Status ${response.status}</h2>
            <p>Message ${response.statusText}</p>
        `);
        return response.text();
    })
    .then((data) => {
        content.innerHTML = data;
        window.history.pushState('', '', `${config.urlFront}/${page}`);
        setColorIconPage(`page-${page}`);
        addSubmitLogin(openPageLogged);
        addSubmitRegister();
        addClickSearchBattlePvp();
        addTooltip();
        addPopover();
        showSave();
        showData();
        showProfile();
        addSubmitChangeName();
    })
    .catch((error) => {
        return notFound(loadPage, error.message);
    });
}

const setColorIconPage = (event) => {
    const clickMenus = document.querySelectorAll('.click-menu');
    const menu = document.getElementById(event);

    clickMenus.forEach((menu) => {
        if (!menu.classList.contains('btn-menu')) {
            menu.classList.remove('text-white');
            menu.classList.add('text-muted');
        }
    });

    menu.classList.remove('text-muted');
    menu.classList.add('text-white');
}