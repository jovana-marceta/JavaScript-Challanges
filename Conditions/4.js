/*
Task 4: Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
*/

const someVariable = 22;

const checkIfNumber = someNumber => typeof someNumber === 'number' ? 'type is number' : 'type is not number';
const checkIsDividible = someNumber => someNumber % 2 === 0 ? someNumber / 2 : 'x';

console.log(checkIfNumber(someVariable), checkIsDividible(someVariable));
