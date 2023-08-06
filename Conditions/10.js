/*
Task 10. Write a JavaScript program to check a given integer
is within 20 of 100 or 400, and print range in which number belongs.
Sample Input: 13			Sample Input: 34			Sample Input: 256
Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400
*/

let someNumber = 15;

const result =
someNumber > 20 && someNumber < 99
  ? '20 ⇔ 100'
  : someNumber > 100 && someNumber < 400
  ? '100 ⇔ 400'
  : '-';

console.log(result);