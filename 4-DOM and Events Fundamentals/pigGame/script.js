'use strict';

const roll = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');

const dummy = function () {
  var img = Math.floor(Math.random() * 6) + 1;
  console.log(img);

  diceImg.src = `img/dice-${img}.png`;
};

roll.addEventListener('click', dummy);
