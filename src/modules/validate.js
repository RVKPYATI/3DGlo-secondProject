import { checkValidate } from "./checkValidate";

const validate = () => {
    
    const form1 = document.querySelector('#form1');
    const form2 = document.querySelector('#form2');
    const form3 = document.querySelector('#form3');

    const validateForm = (form) => {
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            if(input.type === 'text') {
                input.addEventListener('input', ({target}) => {
                    target.value = target.value.replaceAll(/[^а-яё-\s]/gi, '');
                    if(target.classList.contains('error') && checkValidate([target])) {
                        target.classList.remove('error');
                    }
                });
            }
            if(input.type === 'email') {
                input.addEventListener('input', ({target}) => {
                    target.value = target.value.replaceAll(/[^a-zA-Z0-9@*_!`\.\'-]/gi, '');

                    if(target.classList.contains('error') && checkValidate([target])) {
                        target.classList.remove('error');
                    }
                });
            }
            if(input.type === 'tel') {
                input.addEventListener('input', ({target}) => {
                    target.value = target.value.replaceAll(/[^0-9()-]/gi, '');
                });
            }
        });
    };
    validateForm(form1);
    validateForm(form2);
    validateForm(form3);





};

export default validate;