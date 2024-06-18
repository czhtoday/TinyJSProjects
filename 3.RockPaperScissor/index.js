const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(event, playerChoice){
  // pick a random number between 0~2 to make a decision for AI 
  const computerChoice = choices[Math.floor(Math.random() * 3)]
  let result = "";
  // if same pose
  if(playerChoice === computerChoice){
    result = "Draw!"
  }
  else{
    switch(playerChoice){
      case "rock": 
        result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
        break;
      case "scissors":
        result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
        break;
    }
  }
 
  computerDisplay.textContent = `AI: ${computerChoice}`;
  playerDisplay.textContent = `Player: ${playerChoice}`;
  resultDisplay.textContent = result;
  // when click on icon, flash the color
  event.target.classList.add("newColor");
  console.log(event.target);
  setTimeout(()=>{
    event.target.classList.remove("newColor");
  }, 300);
  // firstly remove existing look.
  resultDisplay.classList.remove("greenText", "redText");
  // according to the result, make changes
  switch(result){
    case "You Win!":
      resultDisplay.classList.add("greenText");
      playerScore+=1
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You Lose!":
      resultDisplay.classList.add("redText");
      computerScore+=1;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}

