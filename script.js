console.log("hello world");

const rps = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return rps[Math.floor(Math.random()*rps.length)];
}

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase()===computerSelection.toUpperCase()){
        return "Game Drawn!!!";
    }else if(playerSelection.toUpperCase()==="ROCK"){
         if(computerSelection.toUpperCase()==="PAPER"){
             computerScore++;
             return "You Lose! Paper beat Rock";
         }else if(computerSelection.toUpperCase()==="SCISSORS"){
             playerScore++;
             return "You Win! Rock Beat Scissors";
         }  
    }else if(playerSelection.toUpperCase()==="PAPER"){
         if(computerSelection.toUpperCase()==="ROCK"){
             playerScore++;
             return "You Win! Paper beat Rock";
         }else if(computerSelection.toUpperCase()==="SCISSORS"){
             computerScore++;
             return "You Lose! Scissors Beat Paper";
         }  
    }else if(playerSelection.toUpperCase()==="SCISSORS"){
         if(computerSelection.toUpperCase()==="PAPER"){
             playerScore++;
             return "You Win! Scissors beat Paper";
         }else if(computerSelection.toUpperCase()==="ROCK"){
             computerScore++;
             return "You Lose! Rock Beats Scissors";
         }  
    }
}

function game(){
  for(let i = 1; i <=5; i++){
      let playerSelect = prompt("Rock,Paper or Scissors!!!");
      let computerSelect = computerPlay();
      console.log(playRound(playerSelect,computerSelect));    
  }
  if(playerScore>computerScore){
      console.log("Congratualtions!!!You win");
  }else if(playerScore<computerScore){
      console.log("Computer Wins!!!");
  }else{
      console.log("Nobody Won!!!");
  }

}

game();