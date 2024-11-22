// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");

    // Add event listeners to each button
    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                // If the button is the submit button, check the answer
                checkAnswer();
            } else {
                // Otherwise, get the game type from the button's data-type attribute and start the game
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    // Start the game with the addition game type by default
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
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    // Display the question based on the game type
    if (gameType === "addition") {
        displayAdditionQ(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQ(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtactQ(num1, num2);
    } else if (gameType === "divide") {
        displayDivideQ(num1, num2);
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
        incrementScore(); // Increment the score if the answer is correct
    } else {
        alert(`Awwww...you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer(); // Increment the wrong answer tally if the answer is incorrect
    }

    /**
     * THIS CODE LINE PERSONALLY ADDED BY ME (not in the LMS runthrough)
    */
    // Clear the answer box for the next question
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
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];  
    } else if (operator === "/") {
        return [operand1 / operand2, "divide"];
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
// increment wrong answer
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

/**
 * 
 * To avoid negative number answers, the code checks if operand1 is greater than operand2. 
 * If it is, it assigns operand1 to document.getElementById("operand1").textContent; 
 * otherwise, it assigns operand2. 
 */
// display subtract q
function displaySubtactQ(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
}

// display multiply q
function displayMultiplyQ(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}

/**
 * 
 * This function shows the product of operand1 and operand2 as the first operand,
 * then the value of operand2 as the second operand, this ensureS that they divide as a 
 * whole number in the final answer with no remainder. 
 */
// display divide q
function displayDivideQ(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 * operand2;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}