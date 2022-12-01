import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calc from './modules/calc';
import validate from './modules/validate';
import { tabs } from './modules/tabs';
import { slider } from './modules/slider';
import { sendForm } from './modules/sendForm';

timer('31 december 2022');
menu();
modal();
calc();
validate();
tabs();
slider();
sendForm({
    formId: '#form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});

