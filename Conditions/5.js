/*
Task 5. Write a program that compares two numbers and displays the larger. Display the result in the console.
*/

const getNumbersCompared = (num1, num2) => {
  const result = num1 > num2 ? num1 : num2;
  console.log(`Greather number is: ${result}`);
}

getNumbersCompared(100, 3);
