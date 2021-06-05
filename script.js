
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const header = document.querySelector("#header");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const button = document.getElementById("play");

const rps = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return rps[Math.floor(Math.random()*rps.length)];
}

let computerSelec = "";

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase()===computerSelection.toUpperCase()){
        return "Game Drawn!!!";
    }else if(playerSelection.toUpperCase()==="ROCK"){
         if(computerSelection.toUpperCase()==="PAPER"){
             computerScore++;
             computerScore_span.textContent = `${computerScore}`;
             gameStatus(playerScore, computerScore); 
             return "You Lose! Paper beat Rock";
         }else if(computerSelection.toUpperCase()==="SCISSORS"){
             playerScore++;
             userScore_span.textContent = `${playerScore}`;
             gameStatus(playerScore, computerScore); 
             return "You Win! Rock Beat Scissors";
         }  
    }else if(playerSelection.toUpperCase()==="PAPER"){
         if(computerSelection.toUpperCase()==="ROCK"){
             playerScore++;
             userScore_span.textContent = `${playerScore}`;
             gameStatus(playerScore, computerScore); 
             return "You Win! Paper beat Rock";
         }else if(computerSelection.toUpperCase()==="SCISSORS"){
             computerScore++;
             computerScore_span.textContent = `${computerScore}`;
             gameStatus(playerScore, computerScore); 
             return "You Lose! Scissors Beat Paper";
         }  
    }else if(playerSelection.toUpperCase()==="SCISSORS"){
         if(computerSelection.toUpperCase()==="PAPER"){
             playerScore++;
             userScore_span.textContent = `${playerScore}`;
             gameStatus(playerScore, computerScore); 
             return "You Win! Scissors beat Paper";
         }else if(computerSelection.toUpperCase()==="ROCK"){
             computerScore++;
             computerScore_span.textContent = `${computerScore}`;
             gameStatus(playerScore, computerScore); 
             return "You Lose! Rock Beats Scissors";
         }  
    }
}

    function gameStatus(pScore,cScore) {
    if(pScore>cScore&&pScore===5){
    header.textContent = "Player Wins!!!!";
    header.classList.add("green");
    rock_div.removeEventListener("click", game);
     paper_div.removeEventListener("click", game);
     scissors_div.removeEventListener("click", game);
     button.style.visibility = "visible";
   }else if(cScore>pScore && cScore===5){
     header.textContent = ":( Computer Wins :(";
     header.classList.add("red");
     rock_div.removeEventListener("click", game);
     paper_div.removeEventListener("click", game);
     scissors_div.removeEventListener("click", game);
     button.style.visibility = "visible";
 }
    }
    
    function game() {
        computerSelec = computerPlay();
        let result = playRound(this.id,computerSelec);
        result_div.textContent = result;
    }
    
    rock_div.addEventListener("click", game);
    // rock_div.addEventListener("click", function(){
    //     computerSelec = computerPlay();
    //     let result = playRound("rock",computerSelec);
    //     result_div.textContent = result;
    //     gameStatus(playerScore, computerScore);        
    // });
    button.addEventListener("click", refreshPage);   
    paper_div.addEventListener("click", game);
    
    scissors_div.addEventListener("click", game);  
    function refreshPage() {
        window.location.reload();
    }
    