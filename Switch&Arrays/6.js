/*
Write a program that for a string input of a grade from “A”-“F” outputs 
a proper info message about that grade in the following manner:
A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"",
F - "Failed". Input different from letters A-F outputs a message "Unknown grade".
*/

// 1: Solution with using switch

// const grades = prompt("Please enter your grade").toUpperCase();

// switch (grades) {
//   case "A":
//     console.log("Good job");
//     break;
//   case "B":
//     console.log("Pretty good");
//     break;
//   case "C":
//     console.log("Passed");
//     break;
//   case "D":
//     console.log("Not so good");
//     break;
//   case "F":
//     console.log("Failed");
//     break;
  
//   default:
//     console.log("Unknown grade");
//     break;
// }


// 2. SOLUTION WITH ARRAY
const grades = ['A', 'B', 'C', 'D', 'F'];
const messages = ['Good job', 'Pretty good', 'Passed', 'Not so good', 'Failed'];

const inputGrade = prompt("Please enter your grade").toUpperCase();

const index = grades.indexOf(inputGrade);

index !== -1 ? console.log(messages[index]) : console.log("Unknown grade");