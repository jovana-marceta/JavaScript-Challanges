/*
Task 2. Write a conditional statement to find the largest of five numbers. 
Display the result in the console.
Sample numbers: -5, -2, -6, 0, -1 
Output: 0 
*/

const randomNumbers = [-5, -2, -6, 0, -1, 10, 20, 200];
let largest = randomNumbers[0];

for (let num of randomNumbers) {
  largest = num > largest ? num : largest;
}

console.log(largest);