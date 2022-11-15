const validate = () => {
    
    const form1 = document.querySelector('#form1');
    const form2 = document.querySelector('#form2');
    const form3 = document.querySelector('#form3');

    const validateForm = (form) => {
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            if(input.type === 'text') {
                input.addEventListener('input', (e) => {
                    e.target.value = e.target.value.replace(/^[^а-яА-Я-\s]+$/, '');
                });
            }
            if(input.type === 'email') {
                input.addEventListener('input', (e) => {
                    e.target.value = e.target.value.replace(/^[^a-zA-Z0-9@*_!`\.\'-]+$/, '');
                });
            }
            if(input.type === 'tel') {
                input.addEventListener('input', (e) => {
                    e.target.value = e.target.value.replace(/^[^0-9()-]+$/, '');
                });
            }
        });
    };
    validateForm(form1);
    validateForm(form2);
    validateForm(form3);
    




};

export default validate;