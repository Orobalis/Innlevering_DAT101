"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Use JavaScript to calculate the following expression, ensuring the result is -34:
2 + 3 * 2 - 4 * 6 
Display both the original expression and the modified expression (with parentheses) along with their
results on the HTML page*/

let p1_number1 = (2 + 3 * 2 - 4 * 6 );
let p1_number2 = (2 + (3 * (2 - 4)) * 6 );

printOut('2 + (3 * (2 - 4)) * 6 = ' + p1_number2.toString());

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

const millinInches = 25.4;
const millinMeters = 1000;
const meters = 25;
const centimeter = 34
const exactawnser =(( millinMeters * meters) + (centimeter * 10)) / millinInches;

printOut(exactawnser.toFixed(2).toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* oppgave: konverter 3 dager, 14 min, 45 sec til minutter.*/ 

const secundsinMinutes = 60;
const minnutsinHoure = 60;
const hoursinDay = 24;

const part3_awnser =((hoursinDay * 3 * minnutsinHoure) + 14 + (secundsinMinutes / 45));


printOut("Antall minutter " + part3_awnser.toFixed(1));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives.!*/

const numberofMinuts = 6322.52;
let part4_calc = numberofMinuts / (60 * 24);
const part4_days = Math.floor ( part4_calc);
printOut('Dager: ' + part4_days);

part4_calc = part4_calc - part4_days;
part4_calc = part4_calc * hoursinDay;
const part4_hours = Math.floor (part4_calc);
printOut('Hours: ' + part4_hours);

part4_calc = part4_calc - part4_hours;
part4_calc = part4_calc * minnutsinHoure;
const part4_minuts = Math.floor (part4_calc);
printOut('Minuts: ' + part4_minuts);

part4_calc = part4_calc - part4_minuts;
part4_calc = part4_calc * secundsinMinutes;
const part4_secunds = Math.floor (part4_calc);
printOut('Secunds: ' + part4_secunds);
 

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars".!*/

const NOK = 76 / 8.6;
const USD = 8.6 / 76;

let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut(amountUSD + ' dollar is ' + amountNOK + ' koroner.');

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text.*/

let text_6 = "There is much between heaven and earth that we do not understand.";
printOut('The Lenght is ' + text_6.length.toString());
printOut('Cahracter nr 19 is  '+ text_6.charAt(19));
printOut('The characters form 35 and onwards are: ' + text_6.substring(35, 43));
printOut('"Earth" startsa at index ' + text_6.charAt(33, 37));


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Comparison, print the values for the following expressions (evaluate whether the statements are true):
* Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false?*/

let x = 5
let y = 3
if (5 > 3)
printOut('True');
else printOut('False');

let b1 = (5 > 3);
let p7text_1 = b1.toString();
printOut('Is 5 greater than 3? Awnser: ' + p7text_1);

let b2 = (7==7);
let p7text_2 = b2.toString();
printOut('Is 7 greater than or equal to 7? Awnser: ' + p7text_2);

let b3 = ("a" > "b");
let p7text_3 = b3.toString();
printOut('Is "a" greater than "b"? Awnser: ' + p7text_3);

let b4 = ("1" < "a");
let p7text_4 = b4.toString();
printOut('Is "1" less than "a"? Awnser: ' + p7text_4);

let b5 = ("2500" < "abcd");
let p7text_5 = b5.toString();
printOut('Is "2500" less than "abcd"? Awnser: ' + p7text_5);

let b6 = ("Arne" != "Thomas");
let p7text_6 = b6.toString();
printOut('Is "Arna" less than "Thomas"? Awnser: ' + p7text_6);

let b7 = ( 2 == 5);
let p7text_7 = b7.toString();
printOut('(2 equals 5) is this statement true? ' + p7text_7);

let b8 = ( 'abcd' >= 'bcd');
let p7text_8 = b8.toString();
printOut('"abcd" is greater than "bcd") is this statement false? ' + p7text_8);


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Convert and print the following expressions:
* from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number*/

let p8_tall1 = Number("254");
let p8_text1 = p8_tall1.toString();
printOut(p8_text1);

let p8_tall2 = Number("57.23");
let p8_text2 = p8_tall2.toString();
printOut(p8_text2);

let p8_tall3 = Number("25 Korner");
let p8_text3 = p8_tall3.toString();
printOut(p8_text3);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).*/

let p9 = Math.floor(Math.random() * 360);
let p9_text = p9.toString();

printOut(p9_text);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Use modulus (%) to calculate how many weeks and days are in 131 days.*/


let p10_days = (131 % 7);
let p10_tekst = p10_days.toString();

let p10_weeks = Math.trunc(131 / 7);
let p10_tekst2 = p10_weeks.toString()

printOut("Uker: " + p10_tekst2 + " Dager: " + p10_tekst);


printOut(newLine);