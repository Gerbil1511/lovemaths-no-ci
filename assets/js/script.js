// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition");
});



/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */ 

// run game
function runGame(gameType) {
    // creates two random numbers between 1 and 25 (even possibility of all numbers appearing)
    // using Math.ceil(Math.random() * 25) would do the same but 25 is less likely to appear
    let num1 = Math.floor(Math.random() *25) +1;
    let num2 = Math.floor(Math.random() *25) +1;

    if (gameType === "addition") {
        displayAdditionQ(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

// check answer
function checkAnswer() {

}

// calculate correct answer
function calculateCorrectSAnswer() {

}

// increment score
function incrementScore() {

}

// incremet wrong answer
function incrementWrongAnswer() {

}

// display addition q
function displayAdditionQ(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

// display subtract q
function displaySubtactQ() {

}

// display mulitply q
function displayMultiplyQ() {

}
// display divide q
function displayDivideQ() {

}