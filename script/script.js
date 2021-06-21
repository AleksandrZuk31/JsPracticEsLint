

window.addEventListener('DOMContentLoaded', () => {

    // Timer
    const deadline = '22 june 2021';
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds =  document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
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
        console.log(intViewportWidth);
        if (intViewportWidth > 768) {

            const btnMenu = document.querySelector('.menu'),
                menu = document.querySelector('menu'),
                closeBtn = document.querySelector('.close-btn'),
                menuItems = menu.querySelectorAll('ul>li');

            const handlerMenu = () => {
                const width = document.documentElement.clientWidth;
                console.log(1);
                if (menu.style.left === '0px') {
                    console.log(1);
                    const start = Date.now();
                    const timer = setInterval(() => {
                        const timePassed = Date.now() - start;
                        menu.style.left = timePassed + 'px';
                        if (timePassed > width) {
                            clearInterval(timer);
                        }
                    }, 10);
                } else {
                    console.log(0);
                    menu.style.left = '0px';
                }
            };

            btnMenu.addEventListener('click', handlerMenu);
            closeBtn.addEventListener('click', handlerMenu);
            menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
        }

    };

    toggleMenu();

    // popup

    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            closePopupBtn = document.querySelector('.popup-close');


        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            });
        });
        closePopupBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };

    togglePopup();
});
