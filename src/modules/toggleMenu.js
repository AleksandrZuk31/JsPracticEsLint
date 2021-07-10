const toggleMenu = () => {

    const checkAnimate = () => {

        let isOpenMenu = false;
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

    };

    if (window.innerWidth > 768) {
        console.log(1);
        checkAnimate();
    } else {
        return;
    }

    window.addEventListener('resize', () => {
        console.log(2);
        if (window.innerWidth > 768) {
            console.log(3);
            checkAnimate();
        } else {
            return;
        }

    });

    // let animate = false;

    // const checkAnimate = () => {
    //     console.log(animate);
    //     if (animate) {
    //         console.log(4, animate);

    //         let isOpenMenu = false;
    //         const menu = document.querySelector('menu'),
    //             header = document.querySelector('header');

    //         const handlerMenu = () => {
    //             const width = document.documentElement.clientWidth;
    //             if (!isOpenMenu) {
    //                 const start = Date.now();
    //                 const timer = setInterval(() => {
    //                     const timePassed = Date.now() - start;
    //                     menu.style.left = timePassed + 'px';
    //                     if (timePassed > width) {
    //                         clearInterval(timer);
    //                     }
    //                 }, 10);
    //                 isOpenMenu = true;
    //             } else {
    //                 isOpenMenu = false;
    //                 menu.style.left = '0px';
    //             }
    //         };
    //         menu.addEventListener('click', event => {
    //             const target = event.target;
    //             if (target.tagName === ('A')) {
    //                 handlerMenu();
    //             } else if (target.classList.contains('close-btn')) {
    //                 handlerMenu();
    //             }
    //             return;
    //         });
    //         header.addEventListener('click', event => {
    //             let target = event.target;
    //             if (target.classList.contains('menu')) {
    //                 handlerMenu();
    //             } else {
    //                 target = target.closest('.menu');
    //             }
    //             if (target !== null) {
    //                 handlerMenu();
    //             }
    //             return;
    //         });
    //     } else {
    //         return;
    //     }
    // };

    // if (window.innerWidth > 768) {
    //     animate = true;
    //     console.log(1);
    //     checkAnimate();
    // } else {
    //     animate = false;
    // }
    // window.addEventListener('resize', () => {
    //     console.log(2);
    //     if (window.innerWidth > 768) {
    //         animate = true;
    //         console.log(3);
    //         checkAnimate();
    //         return;
    //     } else {
    //         animate = false;
    //         console.log(5);

    //         console.log(animate, 'animate');
    //         checkAnimate();
    //         return;

    //     }
    // });
};

export default toggleMenu;