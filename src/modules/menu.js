const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const handlMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handlMenu);

    closeBtn.addEventListener('click', handlMenu);

    menuItems.forEach(menuItem => menuItem.addEventListener('click', handlMenu));
};

export default menu;