"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows.*/

let countp1 = '';
let countp12 = '';

for (let i = 1; i <= 10; i++){
    countp1 += " " + i
}
for (let i = 10; i >= 1; i--){
    countp12 += " " + i 
}

printOut('Count one: ' + countp1);
printOut('Count two: ' + countp12);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the
"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the
number once the "while" loop has completed. You do not need to print anything while the "while" loop is in
progress.*/

const awnserNumber = 45
let guessNumber = 0
while (awnserNumber != guessNumber){
    guessNumber = Math.ceil(Math.random() *60 ) 
}

printOut("Guessed Number " + guessNumber.toString());



printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the
Date.now() function to measure time.*/

const awnserNumber2 = 45
let guessNumber2 = 0
let guessCount = 0
const startTime = Date.now()
while (awnserNumber2 != guessNumber2){
    guessNumber2 = Math.ceil(Math.random() * 1000000 )
    guessCount++
}
const endTime = Date.now()
const time = endTime - startTime
printOut("Guessed Number " + guessNumber2.toString());
printOut("Guessed Count " + guessCount.toString());
printOut("Time in milliseconds " + time.toString());

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
○ HINT: A prime number is any natural number greater than 1 that is only divisible by itself and
1. The number 1 is not a prime. (See Wikipedia on primes or ask your AI).*/

let primeNumbers = [];
for (let i = 2; i < 200; i++){
    let isPrime = true;
    for (let j = 2; j < i; j++){
        if (i % j === 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        primeNumbers.push(i);
    }
}
printOut("Prime numbers between 1 and 200: " + primeNumbers.join(", "));

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the
second cell, and so on.
○ Hint: Use what we call nested loops. This is a "for" loop within another "for" loop.
Use the provided printOut function to print each row with its sets of columns; remember to place this in
the right level of the nested for loops. The output should look like this:
K1R1 K2R1 K3R1 K4R1 K5R1 K6R1 K7R1 K8R1 K9R1
K1R2 K2R2 K3R2 K4R2 K5R2 K6R2 K7R2 K8R2 K9R2
K1R3 K2R3 K3R3 K4R3 K5R3 K6R3 K7R3 K8R3 K9R3
K1R4 K2R4 K3R4 K4R4 K5R4 K6R4 K7R4 K8R4 K9R4
K1R5 K2R5 K3R5 K4R5 K5R5 K6R5 K7R5 K8R5 K9R5
K1R6 K2R6 K3R6 K4R6 K5R6 K6R6 K7R6 K8R6 K9R6
K1R7 K2R7 K3R7 K4R7 K5R7 K6R7 K7R7 K8R7 K9R7*/

let rows = 7;
let columns = 9;
for (let i = 1; i <= rows; i++){
    let rowOutput = "";
    for (let j = 1; j <= columns; j++){
        rowOutput += "K" + j + "R" + i + " ";
    }
    printOut(rowOutput);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive).
For each grade, print the student's grade (A to F) based on the point distribution provided:
○ A: 89% – 100%
○ B: 77% – 88%
○ C: 65% – 76%
○ D: 53% – 64%
○ E: 41% – 52%
○ F: 0% – 40%
Sorting Challenge (Bonus): Sort and print the 5 grades in descending order (from A to F) without using
an array. You can use a for loop and a do/while loop to achieve this.
Hint for Success: If you successfully complete the sorting challenge, you'll unlock a valuable hint for Part
9 of "DAT101: Mandatory assignment 4.1" that will make it easier to solve. The learning outcomes remain
the same, but this hint will give you a head start!*/

let studentGrades = [];
for (let i = 0; i < 5; i++){
    let grade = Math.floor(Math.random() * 236) + 1;
    let letterGrade = "";
    if (grade >= 89){
        letterGrade = "A";
    }
    else if (grade >= 77){
        letterGrade = "B";
    }
    else if (grade >= 65){
        letterGrade = "C";
    }
    else if (grade >= 53){
        letterGrade = "D";
    }
    else if (grade >= 41){
        letterGrade = "E";
    }
    else {
        letterGrade = "F";
    }
    studentGrades.push({grade: grade, letter: letterGrade});
    printOut("Student " + (i + 1) + ": " + grade + " (" + letterGrade + ")");
}
// Sorting the grades in descending order
studentGrades.sort((a, b) => {
    if (a.letter < b.letter) return 1;
    if (a.letter > b.letter) return -1;
    return 0;
});
printOut("Sorted Grades:");
for (let i = 0; i < studentGrades.length; i++){
    printOut("Student " + (i + 1) + ": " + studentGrades[i].grade + " (" + studentGrades[i].letter + ")");
}
// Sorting Challenge (Bonus): Sort and print the 5 grades in descending order (from A to F) without using
// an array. You can use a for loop and a do/while loop to achieve this.
let sortedGrades = "";
for (let i = 0; i < studentGrades.length; i++){
    let grade = studentGrades[i].grade;
    let letterGrade = studentGrades[i].letter;
    if (i === 0){
        sortedGrades += "Student " + (i + 1) + ": " + grade + " (" + letterGrade + ")";
    }
    else {
        sortedGrades += ", Student " + (i + 1) + ": " + grade + " (" + letterGrade + ")";
    }
}
printOut("Sorted Grades without using an array:");
printOut(sortedGrades);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Simulate 6 dice and print how many "throws" it takes to get:
● 1 2 3 4 5 6 (full straight)
● 3 pairs
● 2 of a kind and 4 of a kind (tower)
● All the same (Yahtzee)*/

let fullStraight = false;
let threePairs = false;
let twoOfAKind = false;
let fourOfAKind = false;
let yahtzee = false;
let throwsCount = 0;
while (!fullStraight || !threePairs || !twoOfAKind || !fourOfAKind || !yahtzee){
    throwsCount++;
    let dice = [];
    for (let i = 0; i < 6; i++){
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
    let counts = {};
    for (let i = 0; i < dice.length; i++){
        if (counts[dice[i]]){
            counts[dice[i]]++;
        }
        else {
            counts[dice[i]] = 1;
        }
    }
    if (Object.keys(counts).length === 6){
        fullStraight = true;
    }
    if (Object.values(counts).includes(3)){
        threePairs = true;
    }
    if (Object.values(counts).includes(2) && Object.values(counts).includes(4)){
        twoOfAKind = true;
        fourOfAKind = true;
    }
    if (Object.values(counts).includes(5)){
        yahtzee = true;
    }
}
printOut("It took " + throwsCount + " throws to get:");
if (fullStraight){
    printOut("Full Straight");
}
if (threePairs){
    printOut("Three Pairs");
}
if (twoOfAKind){
    printOut("Two of a Kind and Four of a Kind");
}
if (fourOfAKind){
    printOut("Four of a Kind");
}
if (yahtzee){
    printOut("Yahtzee!!");
}

printOut(newLine);