//Planning Stage:
//  -The program doesnt have interface at this point
//  -The user can place their input through a promopt message
//  -The desired output will show if the user won or lost on console
//  -To reach that output the input will be compared to the computer input
//  and show the winner and loser of the game

//The psudocode would go as follows:
//  -Computer will have a random built in function input between three 
//  choices
//  -The human will type the desired input on the prompt function
//  -The result will show afterwards by comparison of choices using
//  if statements

const choice = ['rock', 'paper', 'scissors'] //create an array with 3 choices
let x; //the index value to choose from the choice array
let computerSelection; //the variable that defines the cpu choice
let playerSelection; //the variable that defines the player choice
let p1 = 0; //player variable win count
let cpu = 0; //cpu variable win count

game() //the main function to run

function game() {
    for (i = 1; i <= 5; i++) { //defines five rounds game
        if (cpu ===3)  { //display game result if either player wins 3 rounds first
            i=6;
            return console.log('YOU LOST 3 ROUNDS!') 
        }
        else if (p1 == 3) {
            i=6;
            return console.log('YOU WON 3 ROUNDS!')
        }
        function getComputerChoice() { //function to run the computer choice
            x = Math.floor(Math.random() * 3) //returns 0,1 or 2
            return choice[x] //returns a random computer output
        }
        computerSelection = getComputerChoice() //stores computer choice
        // console.log(computerSelection) to show the cpu choice
        playerSelection = prompt('rock paper or scissors?').toLowerCase() //player prompt
        playRound(playerSelection, computerSelection) //function deciding the winner between the players
    }
    if (cpu > p1)  { //display game result message
        return console.log(`YOU LOST!\nFinal Score is ${p1} to ${cpu}`)
    }
    else if (cpu < p1) {
        return console.log(`YOU WON! \nFinal Score is ${p1} to ${cpu}`)
    }
    else {
        console.log('DRAW!')
    
    }
}

function playRound(playerSelection, computerSelection) { //count win, lose rounds and display result per round
    if (playerSelection === computerSelection) {
        return console.log("draw")
    }

    else if ((playerSelection === choice[0] && computerSelection === choice[1]) ||
        (playerSelection === choice[1] && computerSelection === choice[2]) ||
        (playerSelection == choice[2]) && (computerSelection == choice[0])) {
        cpu++;
        return console.log(`you lost, ${computerSelection} beats ${playerSelection}\nScore is ${p1} to ${cpu}`);
    }

    else if ((playerSelection === choice[0] && computerSelection === choice[2]) ||
        (playerSelection == choice[1]) && (computerSelection == choice[0]) ||
        (playerSelection === choice[2] && computerSelection === choice[1])) {
        p1++;
        return console.log(`you won, ${playerSelection} beats ${computerSelection}
        \nScore is ${p1} to ${cpu}`)
    }
    else {
        return console.log('wrong input')
    }}