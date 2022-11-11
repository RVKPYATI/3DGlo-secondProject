const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    
    const handlMenu = () => {
        if (!menu.style.transform) {
            menu.style.transform = 'translateX(0)';
        } else {
            menu.style.transform = '';
        }
    };

    menuBtn.addEventListener('click', handlMenu);

    closeBtn.addEventListener('click', handlMenu);

    menuItems.forEach((item)=>{
        item.addEventListener('click', handlMenu);
    });
};

export default menu;