'use strict';

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const roll = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const holdbtn = document.querySelector('.btn--hold');
const totalScore1 = document.querySelector('#score--0');
const totalScore2 = document.querySelector('#score--1');

let currentScoreP1 = 0;
let currentScoreP2 = 0;

// Player 1
const curScoreP1 = document.querySelector('#current--0');

// Player 2
const curScoreP2 = document.querySelector('#current--1');

const dummy = function () {
  const player1or2 = player1.classList.contains('player--active');
  console.log(player1or2);
  var img = Math.floor(Math.random() * 6) + 1;
  // console.log(img);

  // Roll the Dice...
  diceImg.src = `img/dice-${img}.png`;

  if (img !== 1) {
    console.log('play');

    // Player1 or Player2
    function addscore(score) {
      return player1or2 ? (currentScoreP1 += score) : (currentScoreP2 += score);
    }
    player1or2
      ? (curScoreP1.textContent = addscore(img))
      : (curScoreP2.textContent = addscore(img));
    console.log(img);
  }

  // Switch the player
  else {
    if (player1or2) {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else {
      player1.classList.add('player--active');
      player2.classList.remove('player--active');
    }
    console.log(currentScoreP1);

    player1or2 ? (currentScoreP1 = 0) : (currentScoreP2 = 0);
    player1or2
      ? (curScoreP1.textContent = currentScoreP1)
      : (curScoreP2.textContent = currentScoreP2);
    console.log('Switch the player..');
  }
};

roll.addEventListener('click', dummy);

holdbtn.addEventListener('click', function () {
  let holdP1orP2 = player1.classList.contains('player--active');

  if (holdP1orP2) {
    console.log('Player1');
    currentScoreP1 = totalScore1.textContent =
      Number(totalScore1.textContent) + currentScoreP1;
    currentScoreP1 = 0;
    console.log(currentScoreP1);
    curScoreP1.textContent = 0;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else {
    console.log('Player2');
    currentScoreP2 = totalScore2.textContent =
      Number(totalScore2.textContent) + currentScoreP2;
    currentScoreP2 = 0;
    console.log(currentScoreP2);
    curScoreP2.textContent = 0;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }
});

newGame.addEventListener('click', function () {
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  totalScore1.textContent = 0;
  totalScore2.textContent = 0;
  curScoreP1.textContent = 0;
  curScoreP2.textContent = 0;
  diceImg.src = `img/dice-5.png`;
});
