let digicodeContainer = document.getElementById("digicode-input-container");




var buttonNumbers = [1,2,3,4,5,6,7,8,9,"*",0,"#"];


for (let i = 0; i < buttonNumbers.length; i++) {
    
    let randomIndexValue = buttonNumbers[Math.floor(Math.random() * buttonNumbers.length)]
    buttonNumbers.splice(randomIndexValue, 1);
    i--;
    console.log(buttonNumbers);
    
    
    
}

