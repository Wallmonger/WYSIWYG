let digicodeContainer = document.getElementById("digicode-input-container");




let buttonNumbers = [];

function addNumbers() {
   let randomNumber = Math.floor(Math.random() * 10); 
   if (buttonNumbers.includes(randomNumber)) {
      console.log("déja dedans");
      addNumbers();
      
   } else {
   buttonNumbers.push(randomNumber); }
}


for (var i = 0; i<10; i++) {
       addNumbers();
};


for (var z = 0; z<10; z++) {
   let div = document.createElement("div");
   div.classList.add("digibutton")
   div.innerHTML = buttonNumbers[z];
   digicodeContainer.appendChild(div);
}






console.log(buttonNumbers)

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


