let myScreen = document.getElementById("whatISee");
let myText = document.getElementById("whatIWrote");
let progressBar = document.getElementById("progressBar")
let progressBarBorder = document.querySelector(".progressBarBorder");

let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let darkMode = document.getElementById("darkMode");
let deleteText = document.getElementById("deleteText");
let h1n1 = document.getElementsByTagName('h1')
let arrow = document.getElementById("arrow")
let turnAround = document.getElementById("turnAround")
let boxes = document.querySelector(".mastermind");




                                                //ECRIRE LE TEXTE DANS UNE DIV
function mirroir() {
    let resultat = myText.value;
    myScreen.innerHTML = resultat;
    }
                                               // LIMITER LE TEXTE, PROGRESS BAR
function bloubiboulga () {
    

        //compteur
        
        keyPressListener = myScreen.innerText.length;
        keyPressListener.maxLengthText = 200;
        const maxLengthText = 200;
        let pourcentageBar = keyPressListener/2 + "%"
        progressBar.style.width = pourcentageBar;
        
         //SI LA VALEUR EST DEPASSÉ
 
         if (keyPressListener > 200) {
            alert("S'IL VOUS PLAIT CALMEZ-VOUS");

            // bloquer l'écriture sans les balises vu que balises ne comptent pas dans les 200
            myText.setAttribute("maxlength", "200")
              
        };

        // Couleurs de barre

        if (keyPressListener <= 100) {
            progressBar.style.backgroundColor = "green";
        } else if (keyPressListener >= 101 && keyPressListener <= 170) {
            progressBar.style.backgroundColor = "orange"
        }
        else {
            progressBar.style.backgroundColor = "red";
        };
        
        
};



// ANIMMOUSE
myText.addEventListener("mouseover", (e) => {
   myText.style.cursor = "progress";
   myText.classList.add("mickey");
   
})

myText.addEventListener("mouseout", (e) => {
    myText.classList.remove("mickey");
    

});

myText.addEventListener('focusin', () => {
    myScreen.classList.add("mickey");
    arrow.classList.replace("ohmanbasic", "ohman")
})

myText.addEventListener('focusout', () => {
    myScreen.classList.remove("mickey");
    arrow.classList.replace("ohman", "ohmanbasic")
})




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
   document.body.style.backgroundColor = "lightgrey";
}
})


// Boutons


bold.addEventListener("click", () => {
    myText.value = myText.value + "<strong></strong>";
    myText.focus()
    
    
});


italic.addEventListener("click", () => {
    myText.value = myText.value + "<em></em>"
    myText.focus()
});


underline.addEventListener("click", () => {
    myText.value = myText.value + "<u></u>"
    myText.focus()
});

deleteText.addEventListener("click", () => {
    myText.value = null;
    myScreen.innerHTML = null;
    myText.focus()
    
});



myText.addEventListener("keyup", mirroir);

myText.addEventListener("keyup", bloubiboulga);

turnAround.addEventListener("click", () => {
    
    if (boxes === document.querySelector('.mastermind')) {
             boxes.classList.replace("mastermind", "mastermindalt");
             arrow.style.visibility = "hidden";
             
    }  else {
        boxes.classList.replace("mastermindalt", "mastermind")
        arrow.style.visibility = "visible"
    }
     
});





//merci délégué