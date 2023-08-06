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
let p1=0;
let cpu=0;
let draw=0;

game() //the main function to run

function game() {
    for (i = 1; i <= 5; i++) { //defines five rounds game
        function getComputerChoice() { //function to run the computer choice
            x = Math.floor(Math.random() * 3) //returns 0,1 or 2
            return choice[x] //returns a random computer output
        }
        computerSelection = getComputerChoice() //stores computer choice
        playerSelection = prompt('rock paper or scissors?').toLowerCase() //player prompt
        playRound(playerSelection, computerSelection) //function deciding the winner between the players
    }
    if (cpu>p1 && cpu>=draw || draw>=p1 && cpu>p1){
        return console.log('you lost the game')}
        else if (p1>cpu && p1>=draw || draw>=cpu && p1>cpu)
        {
            return console.log('you won the game')
        }    
        else {
                console.log('DRAW')
            }
        
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        draw++;
        return console.log("draw")
    }

    else if ((playerSelection === choice[0] && computerSelection === choice[1]) ||
        (playerSelection === choice[1] && computerSelection === choice[2])) {
        cpu++;
        return console.log('you lost');
    }

    else { 
        p1++;
        return console.log('you won') }
}