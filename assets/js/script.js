// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName("button");

//     for(let button of buttons) {
//         button.addEventListener("click", function() {
//             if (this.getAttribute("data-type") === "submit") {
//                 alert("You clicked Submit!");
//             } else {
//                 let gameType = this.getAttribute("data-type");
//                 alert(`You clicked ${gameType}`);
//             }
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            let gameType = this.getAttribute("data-type");
            if (gameType) {
                alert(`You clicked ${gameType}`);
            } else if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            }
        });
    }
});

// run game
function runGame() {

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
function displayAdditionQ() {

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