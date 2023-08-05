/*
Task 9: Write a JavaScript program to check two given numbers and print “true” 
if one of the number is 50 or if their sum is 50.
*/

const checkNumbers = (num1, num2) => (num1 === 50 || num2 === 50 || num1 + num2 === 50) ? 'true' : 'false';

console.log(checkNumbers(40, 10));