export const checkValidate = elems => {
    let status = true;

    elems.forEach(elem => {
        switch (elem.getAttribute('name')) {
            case 'user_name':
                if (/^[а-яё]{2,}/gi.test(elem.value.trim())) return;
                break;
            case 'user_phone':
                if(elem.value.length === 18) return;
                break;
            case 'user_email':
                if(/^[a-z\d-\_\.!`*']+@[a-z\d-\_\.!`*']+\.[a-z]{2,3}$/gi.test(elem.value.trim())) return;
                break;
            default: return;
        }

        status = false;
        elem.classList.add('error');

    });

    return status;
};