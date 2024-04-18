#! /usr/bin/env node
import inquirer from 'inquirer';
// computer will generate a random number
// user input for guessing number
// compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random()* 10 +1);/// f you dont want 0 we do value+1
const answer = await inquirer.prompt([{
name : "UserGuessTheNumber",
type : "number",
message : "Please Guess The Number Between 1 to 10 : ",
}]);
if(answer.UserGuessTheNumber === randomNumber){
    console.log("WOW! You Guess The Correct Number")}
    else{console.log("OOPS! You Guess The Wrong Number")}

    /// to make my file unique in my folder we go in package.jason we will ad 
//@sas/cli-number-guessing-game 
// after type add
/// publishconfig"{"access":"public"}
///bin:"index.js"