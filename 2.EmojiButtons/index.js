let Buttons = document.querySelectorAll(".myButtons");

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", event=>{
  Buttons.forEach(button=>{
    button.classList = "";
    button.classList.add("disabled");
    button.classList.add("myButtons");
  });
  Buttons[0].textContent = "Happy Face";
  Buttons[1].textContent = "Sad Face";
  Buttons[2].textContent = "Mad Face";
  Buttons[3].textContent = "Sleepy Face";
})

Buttons.forEach(button => {
  button.classList.add("disabled");
})


Buttons[0].addEventListener("click", event=>{
  if(event.target.classList.contains("green")){
    event.target.textContent += "😊"
  }
  else{
    event.target.classList.replace("disabled", "green");
  }
});

Buttons[1].addEventListener("click", event=>{
  if(event.target.classList.contains("blue")){
    event.target.textContent += "😭"
  }
  else{
    event.target.classList.replace("disabled", "blue");
  }
});

Buttons[2].addEventListener("click", event=>{
  if(event.target.classList.contains("red")){
    event.target.textContent += "😠"
  }
  else{
    event.target.classList.replace("disabled", "red");
  }
});

Buttons[3].addEventListener("click", event=>{
  if(event.target.classList.contains("yellow")){
    event.target.textContent += "🥱"
  }
  else{
    event.target.classList.replace("disabled", "yellow");
  }
});



Buttons.forEach(button=>{
  button.addEventListener("mouseover", event=>{
    event.target.classList.toggle("hover");
  });
});

Buttons.forEach(button=>{
  button.addEventListener("mouseout", event=>{
    event.target.classList.toggle("hover");
  });
});
