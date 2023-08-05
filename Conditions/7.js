/*
Task 7: Write a JavaScript program to get the difference between a given number and 13,
if the number is greater than 13 return double difference between that number and 13.
*/

const getDifference = someNumber => someNumber > 13 ? (someNumber - 13) * 2 : 13 - someNumber;

console.log(getDifference(20));