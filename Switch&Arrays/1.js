/*
1. Write a program that shows text representation of a day in a week for a 
number input from 1 to 7. Print output in console. 
For input 1, output should be “Monday”.\
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
    console.log('Please type numbers between 1 and 7 for desirable day of the week');
}