import {hideTooltip} from './tooltip.js';
import {hidePopover} from './popover.js';

const addClickMenu = (loadPage) => {
    const clickMenus = document.querySelectorAll('.click-menu');
    clickMenus.forEach((menu) => {
        if (menu) {
            menu.addEventListener('click', function (event) {
                event.preventDefault();
                hideTooltip();
                hidePopover();
                const page = this.href.replace(/^.*\//g, '');
                const location = window.location.pathname.replace(/^.*\//g, '');
                if (location != page) {
                    loadPage(page);
                }
            });
        }
    });
}

export default addClickMenu;