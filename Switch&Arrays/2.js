/*
2. Write a program that shows text representation of a day in a week for a 
number input from 1 to 7. All other cases output a message explaining that
 input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.
*/

const day = parseInt(prompt("Please enter numbers from 1 to 7"));

switch(day) {
  case 1:
    console.log('Today is monday');
    break;
  case 2:
    console.log('Today is tuesdayy');
    break;
  case 3:
    console.log('Today is wednesday');
    break;
  case 4:
    console.log('Today is thursday');
    break;
  case 5:
    console.log('Today is friday');
    break;
  case 6:
    console.log('Today is saturday');
    break;
  case 7:
    console.log('Today is sunday');
    break;
  default:
    console.log('Input must be a number between 1 and 7');
}
