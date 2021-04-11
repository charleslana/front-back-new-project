import config from './config.js';
import showLoading from './loading.js';
import notFound from './notFound.js';
import {yearDate} from './date.js';
import {addTooltip} from './tooltip.js';
import {addPopover} from './popover.js';
import hideOffcanvas from './offcanvas.js';
import addSubmitLogin from './login.js';
import addSubmitRegister from './register.js';
import {showModalError} from './modal.js';
import {addClickMenuNotLoggedIn, addClickMenuLogged} from './menu.js';
import addClickSearchBattlePvp from './searchBattlePvp.js';

export const openPageNotLoggedIn = (page) => {
    $('main').html(showLoading());
    $('main').load('not-logged-in.html', (response, status, xhr) => {
        if (status == 'error') {
            return showModalError();
        }
        yearDate();
        loadPage(page);
        addClickMenuNotLoggedIn(loadPage);
    });
}

export const openPageLogged = (page) => {
    $('main').html(showLoading());
    $('main').load('logged.html', (response, status, xhr) => {
        if (status == 'error') {
            return showModalError();
        }
        loadPage(page);
        addClickMenuLogged(loadPage);
    });
}

const loadPage = (page) => {
    if (page == 'logout') {
        hideOffcanvas();
        return openPageNotLoggedIn('login');
    }
    $('#content').html(showLoading());
    $('#content').load(`pages/${page}.html`, (response, status, xhr) => {
        if (status == 'error') {
            return notFound(loadPage);
        }
        window.history.pushState('', '', `${config.urlFront}/${page}`);
        setColorIconPage(`#page-${page}`);
        addSubmitLogin(openPageLogged);
        addSubmitRegister();
        addClickSearchBattlePvp();
        addTooltip();
        addPopover();
        if ($('#exampleInputEmail1').length) {
            $('#exampleInputEmail1').focus();
        }
    });
}

const setColorIconPage = (location) => {
    $('.page-not-logged-in, .page-logged').removeClass('text-white').addClass('text-muted');
    $(location).removeClass('text-muted').addClass('text-white');
}