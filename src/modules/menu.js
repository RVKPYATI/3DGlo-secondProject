const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const handlMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('.menu') || e.target.classList.contains('close-btn') || e.target.closest('menu')) {
            handlMenu();

        } else {
            handlMenu();
        }

    });

};

export default menu;