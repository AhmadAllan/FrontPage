let round = 0;
let playerScore = 0;
let computerScore = 0;

// generate computer choice
function getComputerChoice (){
   let num = Math.floor(Math.random() * (3 - 1 + 1) + 1);

   if (num === 1) {
    return 'rock';
   } else if (num === 2){
    return 'paper';
   } else {
    return 'scissor';
   }

}


function play(playerSelection) {
    // Generate a random choice for the computer
    const computerSelection= getComputerChoice();
    
    // Change the image for the palyer
    const player = document.getElementById('player');
    player.src = `image/RPS/${playerSelection}L.png`;

    // Change the image for the computer
    const computer = document.getElementById('computer');
    computer.src = `image/RPS/${computerSelection}R.png`;
    // Update the score in HTML
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;


    //wait until image change
    setTimeout(() => {

      // Determine the winner of the round
      if (playerSelection === computerSelection) {
        alert(`Round ${round}: It's a tie!`);
      } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
                playerSelection === 'paper' && computerSelection === 'rock' ||
                playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        
        alert(`Round ${round}: You win! ${playerSelection} beats ${computerSelection}`);
      } else {
        computerScore++;

        alert(`Round ${round}: You lose! ${computerSelection} beats ${playerSelection}`);
      }
    }, 500);

  
    // Check if it's the last round
    if (round === 5) {
      // Show the final score and the winner
      let winner = '';
      if (playerScore > computerScore) {
        winner = 'You win!';
      } else if (playerScore < computerScore) {
        winner = 'Computer wins!';
      } else {
        winner = "It's a tie!";
      }
      alert(`Final score:\nYou: ${playerScore}\nComputer: ${computerScore}\n${winner}`);
  
      // Ask if the player wants to play again
      const playAgain = confirm('Do you want to play again?');
      if (playAgain) {
        // Reset the scores and the round counter
        window.location.reload();
      } else {
        window.location.href = "/home/ahmad/odinProject/FrontPage/index.html"
      }
    } else {
      // Increase the round counter
      round++;
    }
  }
  