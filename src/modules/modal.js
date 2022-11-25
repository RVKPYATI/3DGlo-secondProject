import { animate } from './helpers';

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const popupContent = modal.querySelector('.popup-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
            if(document.documentElement.clientWidth > 768) {
                animate({
                    duration: 300,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        popupContent.style.left = progress * 38 + '%';
                    }
                });
            }
        });
    });

    modal.addEventListener('click', (e) => {
        if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });

};

export default modal;