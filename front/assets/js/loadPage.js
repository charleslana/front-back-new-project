import config from './config.js';
import notFound from './notFound.js';
import {yearDate} from './date.js';
import {hideTooltip, addTooltip} from './tooltip.js';
import {hidePopover, addPopover} from './popover.js';
import hideOffcanvas from './offcanvas.js';
import addSubmitLogin from './login.js';
import addClickSearchBattlePvp from './searchBattlePvp.js';

export const openPageNotLoggedIn = (page) => {
    $('main').html(showLoading());
    $('main').load('not-logged-in.html', (response, status, xhr) => {
        if (status == 'error') {
            return showModalError();
        }
        yearDate();
        loadPage(page);
        addClickMenuNotLoggedIn();
    });
}

export const openPageLogged = (page) => {
    $('main').html(showLoading());
    $('main').load('logged.html', (response, status, xhr) => {
        if (status == 'error') {
            return showModalError();
        }
        loadPage(page);
        addClickMenuLogged();
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
        addClickSearchBattlePvp();
        addTooltip();
        addPopover();
    });
}

const setColorIconPage = (location) => {
    $('.page-not-logged-in, .page-logged').removeClass('text-white').addClass('text-muted');
    $(location).removeClass('text-muted').addClass('text-white');
}

const showLoading = () => {
    return `
    <div class="container">
        <div class="mt-5 d-flex justify-content-center">
            <div class="spinner-border spinner-border-lg" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
    `;
}

const addClickMenuNotLoggedIn = () => {
    $('.page-not-logged-in').on('click', function(event) {
        hideTooltip();
        hidePopover();
        const page = $(this).attr('href').substring(1);
        const location = window.location.pathname.replace(/^.*\//g, '');
        if (location != page) {
            loadPage(page);
        }
        event.preventDefault();
    });
}

const addClickMenuLogged = () => {
    $('.page-logged, .link-logged').on('click', function(event) {
        hideTooltip();
        hidePopover();
        const page = $(this).attr('href').substring(1);
        const location = window.location.pathname.replace(/^.*\//g, '');
        if (location != page) {
            loadPage(page);
        }
        event.preventDefault();
    });
}

const showModalError = () => {
    const modalError = document.getElementById('modalError');
    const myModal = new bootstrap.Modal(modalError);
    myModal.show();
}