'use strict';
const text = document.querySelector('.h3');
let luck = '';

function showLuck() {
    luck = luck + ' suerte✨'
    text.innerHTML = luck;
    if (luck === 3000) {
        clearInterval(times);
    }
}
const timer = setInterval(showLuck, 1000);