const toggleMenu = () => {

    let isOpenMenu = false;
    const menu = document.querySelector('menu'),
        header = document.querySelector('header');

    const handlerMenu = () => {
        if (window.innerWidth > 768) {
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
        } else {
            if (!isOpenMenu) {
                const widthMenu = document.documentElement.clientWidth;
                menu.style.left = widthMenu + 'px';
                isOpenMenu = true;
            } else {
                isOpenMenu = false;
                menu.style.left = '0px';
            }
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

};
export default toggleMenu;