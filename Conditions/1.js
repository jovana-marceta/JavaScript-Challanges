/*
Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2 
Output: The sign is - 
*/

const findProductOfNumbers = (num1, num2, num3) => {
  const product = num1 * num2 * num3;
  return product > 0 ? 'Sign is +' : product < 0 ? 'Sign is -' : 'Sign is 0';
}

console.log(findProductOfNumbers(3, -7, 2));