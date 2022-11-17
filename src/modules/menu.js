const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const handlMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menu.addEventListener('click', (e) => {
        if(e.target.closest('close-btn')) {
            handlMenu();
        }
        menuItems.forEach(menuItem => {
            if (menuItem.closest('menu')) {
                handlMenu();
            }
        });
    });

    menuBtn.addEventListener('click', handlMenu);

};

export default menu;