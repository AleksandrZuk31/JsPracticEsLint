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

    if (purifyName.value === /^\w{2,}$/ && purifyPhone.value === /^\+?[78]([-()]*\d){10}$/ &&
        purifyMail.value === /^\w+@\w+\.\w{2,}$/) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            formSelect(form);
        });

    }

    if (purifyName.value === /^\w{2,}$/ && purifyPhone.value === /^\+?[78]([-()]*\d){10}$/ &&
        purifyMail.value === /^\w+@\w+\.\w{2,}$/) {
        formPopup.addEventListener('submit', event => {
            event.preventDefault();
            formPopup.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            formSelect(formPopup);
        });
    }

    if (purifyName.value === /^\w{2,}$/ && purifyPhone.value === /^\+?[78]([-()]*\d){10}$/ &&
        purifyMail.value === /^\w+@\w+\.\w{2,}$/ && purifyMessage.value === /^\w{2,}$/) {
        formFooter.addEventListener('submit', event => {
            event.preventDefault();
            formFooter.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            formSelect(formFooter);
        });

    }

};

export default sendForm;