const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const btnPopalClose = modal.querySelector('.popup-close');

    buttons.forEach(button => {
        button.addEventListener('click', ()=> {
            modal.style.display = 'block';
        });
    });

    btnPopalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
};

export default modal;