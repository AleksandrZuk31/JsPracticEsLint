const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMesage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById('form1'),
        formPopup = document.getElementById('form3'),
        formFooter = document.getElementById('form2');

    const statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 2 rem;';
    statusMessage.style.cssText = 'color: green';

    const postData = formData => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    });

    const purifyName = document.getElementsByName('user_name'),
        purifyMail = document.getElementsByName('user_email'),
        purifyPhone = document.getElementsByName('user_phone'),
        purifyMessage = document.getElementById('form2-message');

    purifyMail.forEach(elem => {
        elem.setAttribute('required', true);
    });

    purifyName.forEach(event => {
        event.value = '';
    });

    purifyMail.forEach(event => {
        event.value = '';
    });

    purifyPhone.forEach(event => {
        event.value = '';
    });

    purifyMessage.value = '';

    const formSelect = elem => {
        const formData = new FormData(elem);
        postData(formData)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMesage;
            })
            .catch(error => {
                statusMessage.textContent = errorMessage;
                console.log(error);
            });
    };

    form.addEventListener('submit', event => {

        const purifyNameForm = document.getElementById('form1-name'),
            purifyMailForm = document.getElementById('form1-email'),
            purifyPhoneForm = document.getElementById('form1-phone');

        if (purifyNameForm.value.length > 2 && purifyMailForm.value.length > 5 && purifyPhoneForm.value.length > 10) {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            formSelect(form);
        } else {
            return;
        }
    });

    formPopup.addEventListener('submit', event => {
        const purifyNamePopup = document.getElementById('form3-name'),
            purifyMailPopup = document.getElementById('form3-email'),
            purifyPhonePopup = document.getElementById('form3-phone');

        if (purifyNamePopup.value.length > 2 && purifyMailPopup.value.length > 5 &&
            purifyPhonePopup.value.length > 10) {
            event.preventDefault();
            formPopup.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            formSelect(formPopup);
        } else {
            return;
        }
    });

    formFooter.addEventListener('submit', event => {
        const purifyNameFooter = document.getElementById('form2-name'),
            purifyMailFooter = document.getElementById('form2-email'),
            purifyPhoneFooter = document.getElementById('form2-phone');

        if (purifyNameFooter.value.length > 2 && purifyMailFooter.value.length > 5 &&
            purifyPhoneFooter.value.length > 10) {

            event.preventDefault();
            formFooter.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            formSelect(formFooter);
        } else {
            return;
        }
    });

};

export default sendForm;