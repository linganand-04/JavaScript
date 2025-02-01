'use strict';

const ScoreP1El = document.querySelector('#score--0');
const ScoreP2El = document.querySelector('#score--1');
const currScoreP1El = document.querySelector('#current--0');
const currScoreP2El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

ScoreP1El.textContent = 0;
ScoreP2El.textContent = 0;

let currScore = 0;

rollBtn.addEventListener('click', function () {
  let diceImg = Math.floor(Math.random() * 6) + 1;
  diceEl.src = `img/dice-${diceImg}.png`;

  // If dice = !1
  if (diceImg !== 1) {
    console.log(diceImg);

    currScore += diceImg;
    currScoreP1El.textContent = currScore;
  }
});
