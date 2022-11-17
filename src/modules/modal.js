const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const popupContent = modal.querySelector('.popup-content');
    let step = 0;

    const modalAnimation = () => {
        if(document.documentElement.clientWidth < 768) {
            return false;
        }
        step += 2;
        popupContent.style.left = '-38%';
        popupContent.style.left = 0 + step + '%';
        let anim = requestAnimationFrame(modalAnimation);
        if (step >= 38) {
            cancelAnimationFrame(anim);
            step = 0;
        }
        
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
            modalAnimation();
        });
    });

    modal.addEventListener('click', (e) => {
        if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });

};

export default modal;