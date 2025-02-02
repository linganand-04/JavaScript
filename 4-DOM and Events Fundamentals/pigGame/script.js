'use strict';

// Section
const SecPlayer1 = document.querySelector('.player--0');
const SecPlayer2 = document.querySelector('.player--1');
// Score => Main Score
const ScoreP1El = document.querySelector('#score--0');
const ScoreP2El = document.querySelector('#score--1');
// Current Score
const currScoreP1El = document.querySelector('#current--0');
const currScoreP2El = document.querySelector('#current--1');
// Roll the Dice..
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
// Restart Game..
const newBtn = document.querySelector('.btn--new');
// Hold the score => Current Score to Main Score
const holdBtn = document.querySelector('.btn--hold');

let score, activePlayer, currScore , playing;

function init() {
  
  score = [0, 0]; 
  activePlayer = 0;
  currScore = 0;
  playing = true;

  ScoreP1El.textContent = 0;
  ScoreP2El.textContent = 0;
  currScoreP1El.textContent = 0;
  currScoreP2El.textContent = 0;

  diceEl.classList.add('hidden');
  SecPlayer1.classList.add('player--active');
  SecPlayer1.classList.remove('player--winner');
  SecPlayer2.classList.remove('player--active');
  SecPlayer2.classList.remove('player--winner');
};

init();

function switchplayer() {
  currScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  SecPlayer1.classList.toggle('player--active');
  SecPlayer2.classList.toggle('player--active');
}


rollBtn.addEventListener('click', function () {
  let diceImg = Math.floor(Math.random() * 6) + 1;
  if (playing) {
    diceEl.src = `img/dice-${diceImg}.png`;
    diceEl.classList.remove('hidden');

    // If dice = !1
    if (diceImg !== 1) {
      currScore += diceImg;

      // We change score Dynamically..
      // currScoreP1El.textContent = currScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore;
    } else {
      // Switching the player..
      document.getElementById(`current--${activePlayer}`).textContent = 0;

      switchplayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to Main Score => Active Player score..
    score[activePlayer] += currScore;
    // 0[0] = 0 + currscore
    // score[1] =score[1] += currscore

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    document.getElementById(`current--${activePlayer}`).textContent = 0;

    // 2. Check if player's score >= 100
    if (score[activePlayer] >= 100) {
      // Finsih the GAME
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. Switch the player to another player..
      switchplayer();
    }
  }
});

newBtn.addEventListener('click', function(){
  init()
});
