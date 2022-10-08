let digicodeContainer = document.getElementById("digicode-input-container");
let digicodeScreen = document.getElementsByClassName("digicodescreen")



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
   let button = document.createElement("button");
   button.classList.add("digibutton");
   button.innerHTML = buttonNumbers[z];
   digicodeContainer.appendChild(button);
};



buttonForClick = document.querySelector(".digicode")

buttonForClick.addEventListener("click", (e) => {
   console.log("ok");
   digicodeScreen.innerText = "bro"
})




/*
let newArray = [];

function addToArray () {
    while (newArray < 9) {
       let random =  Math.floor(Math.random() * 10);
       console.log(random);
       newArray.push(random)
    }
}
addToArray();
console.log(newArray) */


