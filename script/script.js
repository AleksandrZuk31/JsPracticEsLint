window.addEventListener('DOMContentLoaded', () => {

    // Timer
    const deadline = '26 june 2021';

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
            menu.addEventListener('click', (event) => {
                let target = event.target;
                if (target.tagName === ('A')) {
                    handlerMenu();
                } else if (target.classList.contains('close-btn')) {
                    handlerMenu();
                }
                return;
            });
            header.addEventListener('click', (event) => {
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

        popup.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
            }
            if (!target) {
                popup.style.display = 'none';
            }

        })

    };

    togglePopup();

    // табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
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

        tabHeader.addEventListener('click', (event) => {
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

});