/*
Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 
*/

const numbers = [0, -1, 4];
numbers.sort((a, b) => b - a);

console.log(numbers);