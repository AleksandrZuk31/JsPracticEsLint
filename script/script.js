window.addEventListener('DOMContentLoaded', () => {

    // Timer
    const deadline = '04 july 2021';

    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        }

        function updateClock() {
            const timer = getTimeRemaining();

            if (timer.hours < 10) {
                timerHours.textContent = '0' + timer.hours;
            } else {
                timerHours.textContent = timer.hours;
            }

            if (timer.minutes < 10) {
                timerMinutes.textContent = '0' + timer.minutes;
            } else {
                timerMinutes.textContent = timer.minutes;
            }

            if (timer.seconds < 10) {
                timerSeconds.textContent = '0' + timer.seconds;
            } else {
                timerSeconds.textContent = timer.seconds;
            }

            if (timer.timeRemaining > 0) {
                setInterval(getTimeRemaining, 1000, deadline);
            } else {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }

        }
        updateClock();
    }

    setInterval(countTimer, 0, deadline);

    //меню
    const toggleMenu = () => {
        const intViewportWidth = window.innerWidth;
        let isOpenMenu = false;
        if (intViewportWidth > 768) {

            const menu = document.querySelector('menu'),
                header = document.querySelector('header');

            const handlerMenu = () => {
                const width = document.documentElement.clientWidth;
                if (!isOpenMenu) {
                    const start = Date.now();
                    const timer = setInterval(() => {
                        const timePassed = Date.now() - start;
                        menu.style.left = timePassed + 'px';
                        if (timePassed > width) {
                            clearInterval(timer);
                        }
                    }, 10);
                    isOpenMenu = true;
                } else {
                    isOpenMenu = false;
                    menu.style.left = '0px';
                }
            };
            menu.addEventListener('click', event => {
                const target = event.target;
                if (target.tagName === ('A')) {
                    handlerMenu();
                } else if (target.classList.contains('close-btn')) {
                    handlerMenu();
                }
                return;
            });
            header.addEventListener('click', event => {
                let target = event.target;
                if (target.classList.contains('menu')) {
                    handlerMenu();
                } else {
                    target = target.closest('.menu');
                }
                if (target !== null) {
                    handlerMenu();
                }
                return;
            });

        } else {
            return;
        }

    };

    toggleMenu();

    // popup

    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn');

        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            });
        });

        popup.addEventListener('click', event => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
            }
            if (!target) {
                popup.style.display = 'none';
            }

        });

    };

    togglePopup();

    // табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }

        };

        tabHeader.addEventListener('click', event => {
            let target = event.target;

            target = target.closest('.service-header-tab');
            if (target) {

                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };

    tabs();

    //слайдер

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            slider = document.querySelector('.portfolio-content'),
            dotsList = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval;

        const createDot = () => {

            const li = document.createElement('li');
            li.classList.add('dot');
            dotsList.append(li);
        };

        for (let i = 0; i < slide.length; i++) {
            createDot();
        }

        const dot = document.querySelectorAll('.dot');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {
            event.preventDefault();

            const target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);
    };
    slider();

    // иконки

    const changeIcons = () => {
        const command = document.querySelector('.command'),
            commandRow = command.querySelector('.row');

        const image = commandRow.querySelectorAll('img');

        for (let i = 0; i < image.length; i++) {
            const img = image[i];
            let item;
            img.addEventListener('mouseenter', e => {
                this.item = img.src;
                event.target.src = event.target.dataset.img;
            });

            img.addEventListener('mouseout', e => {
                event.target.src = this.item;
            });
        }
    };
    changeIcons();

    // поля ввода

    const verifyCalc = () => {
        const calcItem = document.querySelectorAll('.calc-item');
        for (i = 1; i < calcItem.length; i++) {
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

        userName.onblur = function () {
            if (userName.value.replace(/[\dA-Za-z?"+=/*()\\]/g, '')) {
                blur(userName.value);
                userName.value = footerValue;
                const letter = userName.value[0].toUpperCase();
                userName.value = (letter + userName.value.substring(1));
            }
        };
        userMessage.onblur = function () {
            if (userMessage.value = userMessage.value.replace(/[\dA-Za-z?"+=/*()\\]/g, '')) {
                blur(userMessage.value);
                userMessage.value = footerValue;
            }
        };
        userEmail.onblur = function () {
            if (userEmail.value = userEmail.value.replace(/[А-яа-яЁё?"+=/*()\\]/g, '')) {
                blur(userEmail.value);
                userEmail.value = footerValue;
            }
        };
        userPhone.onblur = function () {
            if (userPhone.value = userPhone.value.replace(/[А-яа-яЁёA-Za-z?"=/*()\\]/g, '')) {
                blur(userPhone.value);
                userPhone.value = footerValue;
            }
        };
    };

    verifyFooter();

    // калькулятор

    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = Math.round(price * typeValue * squareValue * countValue * dayValue);
            }

            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', event => {
            const target = event.target;

            if (target.matches('select') || target.matches('input')) {
                countSum();
            }

        });

    };

    calc(100);

    // send-ajax-form

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

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    outputData();
                } else {
                    errorData(request.status);
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));

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
        };

        const formSelect = () => {
            const formData = new FormData(form);
            let body = {};

            for (let val of formData.entries()) {
                body[val[0]] = val[1];
            }

            postData(body, () => {
                statusMessage.textContent = successMesage;
            }, (error) => {
                statusMessage.textContent = errorMessage;
                console.log(error);
            });
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            formSelect();
        });

        formPopup.addEventListener('submit', (event) => {
            event.preventDefault();
            formPopup.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            formSelect();
        });

        formFooter.addEventListener('submit', (event) => {
            event.preventDefault();
            formFooter.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            formSelect();
        });

    };

    sendForm();

});