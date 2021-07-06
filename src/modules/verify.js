const verify = () => {
    const verifyCalc = () => {
        const calcItem = document.querySelectorAll('.calc-item');
        for (let i = 1; i < calcItem.length; i++) {
            const field = calcItem[i];

            field.addEventListener('input', () => {
                field.value = field.value.replace(/\D/g, '');
            });
        }
    };

    verifyCalc();

    const verifyForm = () => {
        const userName = document.getElementById('form1-name'),
            userEmail = document.getElementById('form1-email'),
            userPhone = document.getElementById('form1-phone');

        userName.addEventListener('input', () => {
            userName.value = userName.value.replace(/[\dA-Za-z?"+=/\-*()\\]/g, '');
        });
        userEmail.addEventListener('input', () => {
            userEmail.value = userEmail.value.replace(/[А-яа-яЁё?"+=/*()\\]/g, '');
        });
        userPhone.addEventListener('input', () => {
            userPhone.value = userPhone.value.replace(/[А-яа-яЁёA-Za-z?"=/\-*()\\]/g, '');
        });
    };

    verifyForm();

    const verifyPopup = () => {
        const userName = document.getElementById('form3-name'),
            userEmail = document.getElementById('form3-email'),
            userPhone = document.getElementById('form3-phone');

        userName.addEventListener('input', () => {
            userName.value = userName.value.replace(/[\dA-Za-z?"+=/\-*()\\]/g, '');
        });
        userEmail.addEventListener('input', () => {
            userEmail.value = userEmail.value.replace(/[А-яа-яЁё?"+=/*()\\]/g, '');
        });
        userPhone.addEventListener('input', () => {
            userPhone.value = userPhone.value.replace(/[А-яа-яЁёA-Za-z?"=/\-*()\\]/g, '');
        });
    };

    verifyPopup();

    const verifyFooter = () => {
        const userName = document.getElementById('form2-name'),
            userMessage = document.getElementById('form2-message'),
            userEmail = document.getElementById('form2-email'),
            userPhone = document.getElementById('form2-phone');

        userName.addEventListener('input', () => {
            userName.value = userName.value.replace(/[\dA-Za-z?"+=/\-*()\\]/g, '');
        });
        userMessage.addEventListener('input', () => {
            userMessage.value = userMessage.value.replace(/[\dA-Za-z?"+=/*\\]/g, '');
        });
        userEmail.addEventListener('input', () => {
            userEmail.value = userEmail.value.replace(/[А-яа-яЁё?"+=/*()\\]/g, '');
        });
        userPhone.addEventListener('input', () => {
            userPhone.value = userPhone.value.replace(/[А-яа-яЁёA-Za-z?"=/\-*()\\]/g, '');
        });

        let footerValue;
        const blur = elem => {
            footerValue = elem.trim().replace(/^\-/, '').replace(/ {1,}/g, " ").replace(/\-{1,}/g, "-");
        };

        userName.onblur = function() {
            if (userName.value.replace(/[\dA-Za-z?"+=/*()\\]/g, '')) {
                blur(userName.value);
                userName.value = footerValue;
                const letter = userName.value[0].toUpperCase();
                userName.value = (letter + userName.value.substring(1));
            }
        };
        userMessage.onblur = function() {
            if (userMessage.value = userMessage.value.replace(/[\dA-Za-z?"+=/*()\\]/g, '')) {
                blur(userMessage.value);
                userMessage.value = footerValue;
            }
        };
        userEmail.onblur = function() {
            if (userEmail.value = userEmail.value.replace(/[А-яа-яЁё?"+=/*()\\]/g, '')) {
                blur(userEmail.value);
                userEmail.value = footerValue;
            }
        };
        userPhone.onblur = function() {
            if (userPhone.value = userPhone.value.replace(/[А-яа-яЁёA-Za-z?"=/*()\\]/g, '')) {
                blur(userPhone.value);
                userPhone.value = footerValue;
            }
        };
    };

    verifyFooter();
}

export default verify;