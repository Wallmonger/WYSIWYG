let myScreen = document.getElementById("whatISee");
let myText = document.getElementById("whatIWrote");
let progressBar = document.getElementById("progressBar")
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let darkMode = document.getElementById("darkMode");
let moveYourBody = document.getElementById("moveyourbody");
let deleteText = document.getElementById("deleteText");



/* correction */ 

function mirroir() {
    let resultat = myText.value;
    myScreen.innerHTML = resultat;
}

function bloubiboulga () {
    

        //compteur
        console.log(myText.value.length)
        keyPressListener = myText.value.length;
        
        const maxLengthText = 200;
        let pourcentageBarValue = keyPressListener/2
        let pourcentageBar = pourcentageBarValue + "%"
        progressBar.style.width = pourcentageBar;
        
        // SI LA VALEUR EST DEPASSÉ

         if (keyPressListener >= maxLengthText) {
            alert("S'IL VOUS PLAIT CALMEZ-VOUS");
        };

        // Couleurs de barre

        if (keyPressListener <= 100) {
            progressBar.style.backgroundColor = "green";
        } else if (keyPressListener >= 101 && keyPressListener.length <= 170) {
            progressBar.style.backgroundColor = "orange"
        }
        else {
            progressBar.style.backgroundColor = "red";
        };
        
}




/*
myText.addEventListener("keyup", (e) => {
    

    //compteur
    keyPressListener = e.target.value;
    console.log(keyPressListener.length);
    numberCount = keyPressListener.length;
    
    const maxLengthText = 200;
    const pourcentageBarValue = (keyPressListener.length/2)
    const pourcentageBar = pourcentageBarValue + "%"
    progressBar.style.width = pourcentageBar;
    
    // SI LA VALEUR EST DEPASSÉ
     if (keyPressListener.length >= maxLengthText) {
        alert("S'IL VOUS PLAIT CALMEZ-VOUS");
    };
    // Couleurs de barre
    if (keyPressListener.length <= 100) {
        progressBar.style.backgroundColor = "green";
    } else if (keyPressListener.length >= 101 && keyPressListener.length <= 170) {
        progressBar.style.backgroundColor = "orange"
    }
    else {
        progressBar.style.backgroundColor = "red";
    };
    
    

}); */
// ANIMMOUSE
myText.addEventListener("mouseover", (e) => {
   console.log("okokokokokokokoko")
   myText.classList.add("mickey");
   
})

myText.addEventListener("mouseout", (e) => {
    myText.classList.remove("mickey");

});

//DARKMODE

darkMode.addEventListener("click", () => {
    if (darkMode.innerHTML === "Dark Mode") {
        darkMode.innerHTML = "Light Mode"
    } else {
        darkMode.innerHTML = "Dark Mode"
    };
   if (myText.className === "lightmode") {
   myText.classList.replace("lightmode", "darkmode");
   myScreen.classList.replace("lightmode", "darkmode");
   document.body.style.backgroundColor = "black";
   
} else {
    myText.classList.replace("darkmode", "lightmode");
   myScreen.classList.replace("darkmode", "lightmode")
   document.body.style.backgroundColor = "grey";
}
})


// Boutons


bold.addEventListener("click", () => {
    myText.value = myText.value + "<strong></strong>";
    
});


italic.addEventListener("click", () => {
    myText.value = myText.value + "<em></em>"
});


underline.addEventListener("click", () => {
    myText.value = myText.value + "<u></u>"
});

deleteText.addEventListener("click", () => {
    myText.value = null;
});

myText.addEventListener("keyup", mirroir)
myText.addEventListener("keyup", bloubiboulga)