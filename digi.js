let digicodeContainer = document.getElementById("digicode-input-container");
let digicodeScreen = document.getElementById("digicodeScreen");
let deleteNumbers = document.getElementById("deleteNumbers");
let helpNumbers = document.getElementById("help");
let reloadNumbers = document.getElementById("reloadNumbers")

let buttonNumbers = [];

function addNumbers() {
   let randomNumber = Math.floor(Math.random() * 10); 
   if (buttonNumbers.includes(randomNumber)) {
      
      addNumbers();
      
   } else {
   buttonNumbers.push(randomNumber); }
}


for (var i = 0; i<10; i++) {
       addNumbers();
};


for (var z = 0; z<10; z++) {
   let button = document.createElement("div");
   button.classList.add("digibutton");
   button.setAttribute("id", "button" + z)
   button.innerHTML = buttonNumbers[z];
   digicodeContainer.appendChild(button);
};



let buttonForClick = document.getElementById("button0");
let buttonForClick1 = document.getElementById("button1");
let buttonForClick2 = document.getElementById("button2");
let buttonForClick3 = document.getElementById("button3");
let buttonForClick4 = document.getElementById("button4");
let buttonForClick5 = document.getElementById("button5");
let buttonForClick6 = document.getElementById("button6");
let buttonForClick7 = document.getElementById("button7");
let buttonForClick8 = document.getElementById("button8");
let buttonForClick9 = document.getElementById("button9");

function clicking(buttonname) {
   buttonname.addEventListener("click", (e) => {
      
      digicodeScreen.innerHTML = digicodeScreen.innerHTML + buttonname.innerHTML;

      console.log(digicodeScreen.innerHTML);
      if (digicodeScreen.innerHTML.length === 5) {
         digicodeScreen.innerHTML = "4 MAX"; 
      }
      else if (digicodeScreen.innerHTML.length === 6) {
         digicodeScreen.innerText = null;
      }
      else if (digicodeScreen.innerHTML === "8999") {
         digicodeScreen.innerHTML = "BRAVO !";
         digicodeScreen.style.background = "yellow";
      } else if (digicodeScreen.innerHTML === "666") {
         digicodeScreen.innerHTML = "vade retro satanas";
         digicodeScreen.style.background = "red";
         digicodeScreen.style.fontSize = "3rem"
      }
      else {
         digicodeScreen.style.background = "skyblue"
      }
     
   })
   
   
}



deleteNumbers.addEventListener("click", () => {
   digicodeScreen.innerHTML = null;
   
})

helpNumbers.addEventListener("click", () => {
   digicodeScreen.innerHTML = "9k - 1";
   digicodeScreen.style.fontSize = "5rem"
})

reloadNumbers.addEventListener("click", () => {
   location.reload();
})

clicking(buttonForClick);
clicking(buttonForClick1);
clicking(buttonForClick2);
clicking(buttonForClick3);
clicking(buttonForClick4);
clicking(buttonForClick5);
clicking(buttonForClick6);
clicking(buttonForClick7);
clicking(buttonForClick8);
clicking(buttonForClick9);



