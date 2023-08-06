//Planning Stage:
//  -The program doesnt have interface at this point
//  -The user can place their input through a promopt message
//  -The desired output will show if the user won or lost
//  -To reach that output the input will be compared to the computer input
//  and show the winner and loser of the game
//  -The game will be played from the console

//The psudocode would go as follows:
//  -Computer will have a random built in function input between three 
//  choices
//  -The human will type the desired input on the prompt function
//  -The result will show afterwards by comparison of choices using
//  if statements

let choice=['rock','paper','scissors']

function getComputerChoice(){
    let x = Math.floor(Math.random()*3) //returns 0,1 or 2
    return choice[x] //returns a random computer output
}


  