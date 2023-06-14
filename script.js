let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}.`;

function pickComputerMove() {
  let randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1/3) computerMove = 'rock';

  if(randomNumber >= 1/3 && randomNumber < 2/3) computerMove = 'paper';

  if(randomNumber >= 2/3 && randomNumber < 1) computerMove = 'scissors';

  return computerMove;
}

function playGame(playerMove) {

  let computerMove = pickComputerMove();

  let result = '';

  if(playerMove === 'rock') {
    if(computerMove === 'rock') result = 'Tie';
    if(computerMove === 'paper') result = 'You lose';
    if(computerMove === 'scissors') result = 'You win';
  } 

  if(playerMove === 'paper') {
    if(computerMove === 'rock') result = 'You win';
    if(computerMove === 'paper') result = 'Tie';
    if(computerMove === 'scissors') result = 'You lose';
  }

  if(playerMove === 'scissors') {
    if(computerMove === 'rock') result = 'You lose';
    if(computerMove === 'paper') result = 'You win';
    if(computerMove === 'scissors') result = 'Tie';
  }

  if(result === 'You win') score.wins += 1;
  if(result === 'You lose') score.losses += 1;
  if(result === 'Tie') score.ties += 1;

  localStorage.setItem('score', JSON.stringify(score));
  console.log(score);

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon" alt="">
  <img src="images/${computerMove}-emoji.png" class="move-icon" alt=""> computer`;

}

function updateScoreElement() {
  
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function reset() {

  score.wins = 0;
  score.losses = 0;
  score.ties = 0
  localStorage.removeItem('score');

  updateScoreElement();
  
  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-moves').innerHTML = '';

}