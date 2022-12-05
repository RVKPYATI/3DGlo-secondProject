import { checkValidate } from "./checkValidate";

export const sendForm = ({ formId, someElem = [] }) => {
    const form = document.querySelector(formId);
    const statusBlock = document.createElement('div');
    const loadText = document.createElement('div');
    const errorText = 'Ошибка...';
    const successText = '<h3>Спасибо! Наш менеджер с вами свяжется!</h3>';


    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');

        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            if(val !== '') {
                formBody[key] = val;
            }
            
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if(element.textContent !== '' || element.textContent !== '0') {
                if (elem.type === 'block') {
                    formBody[elem.id] = element.textContent;
                } else if (elem.type === 'input') {
                    if(element.value > 0) {
                        formBody[elem.id] = element.value;
                    }
                    
                }
            }
            

        });

        if (checkValidate(formElements)) {
            loadText.classList.add('loader');
            statusBlock.append(loadText);
            form.append(statusBlock);
            sendData(formBody)
                .then(data => {
                    statusBlock.innerHTML = successText;
                    setTimeout(()=>statusBlock.innerHTML = '',3000);
                    formElements.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });
        } else {
            alert('Данные не валидны');
        }
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitForm();

        });
    } catch (error) {
        console.log(error.message);
    }



















};