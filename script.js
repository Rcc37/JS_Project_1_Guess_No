'use strict';

/*
//.message is a class in HTML
console.log(document.querySelector('.message').textContent);

//we can also set the content of the perticular
document.querySelector('.message').textContent = '🎉 Correct Number!'; //changed the content

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; //chnaged the value of a input field
console.log(document.querySelector('.guess').value);
*/

//Event listener

let secretNumber = Math.trunc(Math.random() * 20) + 1; //math.trunc removes decimal
//math.random gives values btw 0 & 1
//+1 beacuse if we *20 the value 20 wont be included

console.log(document.querySelector('.number').textContent);

let score = 20;
console.log(score);

let highScore = 0;
console.log(highScore);

//this funtion can be called insted of repeating the use of below code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //convert string to number

  console.log(guess, typeof guess);

  //what if there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number';
    displayMessage('⛔️ No number');

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';

    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //guess is wrong(do not repeat yourself principle)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';

      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💥 You Lost the game!';

      displayMessage('💥 You Lost the game!');

      document.querySelector('.score').textContent = 0;
    }
  }

  //     //when guess is too high
  //     } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too High!';

  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You Lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too Low!';

  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You Lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//as-soon as the event happens which is on click the js engine calls the function defined inside the eventlistner

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  //   document.querySelector('.message').textContent = 'Start guessing...';

  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
