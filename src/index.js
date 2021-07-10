

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeIcons from './modules/changeIcons';
import verify from './modules/verify';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import maskPhone from './modules/maskPhone';


// Timer
countTimer();

//меню
toggleMenu();

// popup
togglePopup();

// табы
tabs();

//слайдер
slider();

// иконки
changeIcons();

// поля ввода
verify();

// калькулятор
calc(100);

// send-ajax-form
sendForm();

// маска на телефон
maskPhone();