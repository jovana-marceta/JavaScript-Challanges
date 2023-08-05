/*
Task 8. Write a JavaScript program to compute the sum of the two given integers.
If the two values are same, then returns triple their sum.
*/

const sum = (num1, num2) => {
  const result = num1 + num2;
  return num1 === num2 ? result * 3: result;
}

console.log(sum(2, 7));