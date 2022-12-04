import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calc from './modules/calc';
import validate from './modules/validate';
import { tabs } from './modules/tabs';
import { slider } from './modules/slider';
import { sendForm } from './modules/sendForm';
import { checkValidate } from './modules/checkValidate';
import maskPhone from './modules/maskPhone';

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
sendForm({
    formId: '#form2', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({
    formId: '#form3', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});

maskPhone('input[name="user_phone"]', '+7 (___) ___-__-__');

