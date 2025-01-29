'use strict';

/*
console.log(document.querySelector('.message').textContent);

console.log(
  (document.querySelector('.message').textContent = 'Correct Answer...')
);

console.log((document.querySelector('.number').textContent = 13));

console.log((document.querySelector('.score').textContent = 19));

document.querySelector('.guess').value;
console.log((document.querySelector('.guess').value = 24));
*/

let guessNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
// document.querySelector('.number').textContent = guessNumber;

// Reset the GAME
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.background = '#222';
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  const guess = Number((document.querySelector('.guess').value = ''));
});
// --------------

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').style.background = '#222';

  // if there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🙄 No Number';
    displayMessage('🙄 No Number');
  }

  if (guess <= 0) {
    // document.querySelector('.message').textContent = 'Between 1 and 20 ⚠';
    displayMessage('Between 1 and 20 ⚠');
    document.querySelector(
      'body'
    ).style.background = `linear-gradient(rgb(143, 47, 47), black)`;
  }

  // when player wins
  else if (guessNumber === guess) {
    // document.querySelector('.message').textContent = '💥 Correct Number..';
    displayMessage('💥 Correct Number..');
    document.querySelector('.number').textContent = guessNumber;
    document.querySelector('body').style.backgroundColor = '#163825';
    document.querySelector('body').style.background = '#163825';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guessNumber !== guess) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guessNumber < guess ? 'Too High..📈' : 'Too Low..📉';
      displayMessage(guessNumber < guess ? 'Too High..📈' : 'Too Low..📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the Game..☠';
      displayMessage('You lost the Game..☠');
      document.querySelector('.number').textContent = guessNumber;
      document.querySelector('body').style.backgroundColor = '#7A2020';
      document.querySelector('body').style.background = '#7A2020';
    }
  }

  /*
  // when guess is too high
  else if (guessNumber < guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High..📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game..☠';
      document.querySelector('.number').textContent = guessNumber;
      document.querySelector('body').style.backgroundColor = '#7A2020';
    }
  }

  // when guess is too low
  else if (guessNumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low..📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game..☠';
      document.querySelector('.number').textContent = guessNumber;
      document.querySelector('body').style.backgroundColor = '#7A2020';
    }
  }
  */
  if (guess > 20) {
    console.log(guess);
    // document.querySelector('.message').textContent = 'Between 1 and 20 ⚠';
    displayMessage('Between 1 and 20 ⚠');
    document.querySelector(
      'body'
    ).style.background = `linear-gradient(rgb(143, 47, 47), black)`;
  }
});
