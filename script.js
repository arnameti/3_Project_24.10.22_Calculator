'use strict';

const calcButtons = document.querySelector('.calculator__buttons');
const calcTitle = document.querySelector('.calculator__title');

const displayNumbers = (clickedButton, displayedValue) => {
    if (clickedButton.classList.contains('number')) {
        calcTitle.textContent = calcTitle.textContent === '0' ? clickedButton.value : displayedValue + clickedButton.value;
    }
};

const addDecimal = (displayedValue, clickedButton) => {
    if (!displayedValue.includes('.')) {
        if (clickedButton.value === 'decimal') calcTitle.textContent = `${displayedValue}.`;
    }
};

const resetAll = (clickedButton) => {
    if (clickedButton.value === 'clear') calcTitle.textContent = '0';
};

calcButtons.addEventListener('click', function (e) {
    const clicked = e.target.closest('.button');

    if (!clicked) return;

    const displayedValue = calcTitle.textContent;

    displayNumbers(clicked, displayedValue);

    addDecimal(displayedValue, clicked);

    resetAll(clicked);
});