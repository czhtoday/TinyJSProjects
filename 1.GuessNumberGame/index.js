const minNum = 1;
const maxNum = 99;
const answer = Math.floor(Math.random() * (maxNum - minNum)) + minNum


let attempts = 0;
let guess;
let running;


function startGame(){
  running = true;
  while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
      window.alert("Please enter a number.");
    }
    else if(guess < minNum || guess > maxNum){
      window.alert(`You need to guess a num between ${minNum} - ${maxNum}`);
    }
    else {
      attempts++;
      if(guess<answer){
        window.alert("go larger");
      }
      else if (guess>answer){
        window.alert("go smaller");
      }
      else{
        window.alert(`You made it! It takes you ${attempts} attempts to finish!`)
        running = false;
      }
    }
  }
}

