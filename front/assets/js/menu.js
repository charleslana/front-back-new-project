import {hideTooltip} from './tooltip.js';
import {hidePopover} from './popover.js';

export const addClickMenuNotLoggedIn = (loadPage) => {
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

export const addClickMenuLogged = (loadPage) => {
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