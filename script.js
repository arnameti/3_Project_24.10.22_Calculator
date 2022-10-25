'use strict';

const calcButtons = document.querySelector('.calculator__buttons');
const calcTitle = document.querySelector('.calculator__title');

calcButtons.addEventListener('click', function (e) {
    const clicked = e.target.closest('.button')

    if (!clicked) return;

    const displayValue = calcTitle.textContent;

    calcTitle.textContent = calcTitle.textContent === '0' ? clicked.value : displayValue + clicked.value;
});