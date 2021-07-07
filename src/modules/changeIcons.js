'use strict';

const changeIcons = () => {
    const command = document.querySelector('.command'),
        commandRow = command.querySelector('.row');

    const image = commandRow.querySelectorAll('img');
    let picture;
    for (let i = 0; i < image.length; i++) {
        const img = image[i];

        img.addEventListener('mouseenter', e => {
            picture = img.src;
            e.target.src = e.target.dataset.img;
        });

        img.addEventListener('mouseout', e => {
            e.target.src = picture;
        });
    }
};

export default changeIcons;