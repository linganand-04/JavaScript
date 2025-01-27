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

const guessNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = guessNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🙄 No Number';
  } else if (guessNumber === guess) {
    document.querySelector('.message').textContent = '💥 Correct Number..';
  } else if (guessNumber < guess) {
    document.querySelector('.message').textContent = 'Too High..📈';
  } else if (guessNumber > guess) {
    document.querySelector('.message').textContent = 'Too Low..📉';
  }
});
