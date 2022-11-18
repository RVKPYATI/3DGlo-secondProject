const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    const handlMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn')) {
            handlMenu();
        }

        if(e.target.matches('li a')) {
            handlMenu();
        }
    });

    menuBtn.addEventListener('click', handlMenu);

};

export default menu;