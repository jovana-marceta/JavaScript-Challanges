/*
Task 6: Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit 
Sample Input: 60°C
Output : 60°C is 140 °F
*/

const convertToFahrenheit = celsius => {
  let f = (9 * celsius / 5) + 32;
  return `${celsius}°C is ${f}°F`;
}

console.log(convertToFahrenheit(60));