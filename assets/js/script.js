// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
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


/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
// check answer
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

        if (isCorrect) {
            alert("Hey! You got it right! :D");
            incrementScore();
        } else {
            alert(`Awwww...you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
            incrementWrongAnswer();
        }

        // Personally added by me - Clear the answer box
    document.getElementById("answer-box").value = "";
        // Call runGame with the next game type
        runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
// calculate correct answer
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 *  Gets the current score from the DOM, increments it by 1
 * (you can use innerText or textConent, they are interchangeable)
 */
// increment score
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM, increments it by 1
 * (you can use innerText or textConent, they are interchangeable)
 */
// incremet wrong answer
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

// display addition q (you can use innerText or textConent, they are interchangeable)
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