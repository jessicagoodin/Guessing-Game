// DECLARING USER POINTS VARIABLE

// let userPoints = 0;

// STARTING BY DECLARING FUNC THAT RETURNS PROMISE

const enterNumber = () => {
    return new Promise((resolve, reject) => {
        const userNumber = Number(window.prompt("Enter a number between 1 and 6:")); // prompt to get user's number
        let randomNumber = Math.floor(Math.random() * 6 + 1); // random between 1 and 6 to compare to user's number
    
        if (isNaN(userNumber)) { // if input isn't a number,
            reject(new Error("Wrong input type.")); // reject and throw error.
        }

        if (userNumber === randomNumber) {
            resolve({
                points: 2,
                randomNumber,
            });  
        } else if (userNumber === randomNumber - 1 || userNumber === randomNumber + 1) {
            resolve({
                points: 1,
                randomNumber,
            });
        } else {
            resolve({
                points: 0,
                randomNumber,
            });
        }
    });
}; 

// ANOTHER FUNC TO ASK IF USER WANTS TO CONTINUE

const continueGame = () => {
    return new Promise((resolve) => {
        if (window.confirm("Do you want to continue?")) {  // if they select yes and it's true,
            resolve(true);
        } else {
            resolve(false);
        }
    });
}

// A FUNCTION THAT HANDLES THE GUESS

const handleGuess = async () => {
    try {
        const result = await enterNumber(); // now instead of using .then, we get the result directly 
    
        alert(`AI rolled a ${result.randomNumber}. You've received ${result.points} points.`)
        
        // asking player if they want to continue using continueGame
        const isContinuing = await continueGame();
        
        if (isContinuing) {
                handleGuess(); // if yes, we run handleGuess again
        } else {
            alert("Game is over!"); // if no, alert shows game ends.
        } 
    } catch (error) { // using try, catch syntax instead of catch method
        alert(error);
    }
};

handleGuess(); // run handleGuess function again



// VARIABLES FOR GUESSED NUMBER AND FORM
// const form = document.getElementById('form');
// const number = document.getElementById('number');

// // STORING PLAYER'S INPUT 

// form.onsubmit = function() {
//     let guess = parseInt(number.value);
//     return guess;
// }

// RANDOM NUMBER BETWEEN 1 AND 6 STORED IN VARIABLE

let opponentNumber = Math.floor(Math.random() * 7);

