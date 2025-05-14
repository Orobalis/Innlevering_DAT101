"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* 
Part 1 (3 points)
Create a function that takes no parameters and returns no values. Have it print today's date in the
Norwegian standard. Example: "Friday, October 18, 2019" Use an example from this resource:
toLocaleString , Use "no-NB" as an alias for the Norwegian language in the function call to
"toLocaleDateString"
*/

function printDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const norwegianDate = date.toLocaleDateString('no-NO', options);
    printOut(norwegianDate);
}
printDate();


printOut(newLine);
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*Part 2 (20 points)
Level Up Your Date Function: Take your "Today's Date" function from Task 1 and supercharge it! Not
only should it display today's date in elegant Norwegian fashion, but it also needs to return that date as a
powerful date object, ready for further manipulation.
The Hype Train is Leaving the Station: Craft a new function that calculates the number of days left until
the epic release of 2XKO, the highly-anticipated tag-team fighting game set in the League of Legends
universe, launching on May 14th, 2025.
Time for the Grand Reveal: Combine the might of your two functions to print today's date and the thrilling
countdown to 2XKO's debut. Feel free to add a bit of flair to your output - maybe a themed message or a
touch of visual excitement!
Remember:
● This task isn't just about coding; it's about harnessing the power of dates and functions to create
something both informative and engaging.
● Accuracy is key! Make sure your countdown is precise and your date formatting is impeccable.
● Creativity is encouraged! Let your passion for gaming and multimedia shine through in your output.
*/

function printDateAndCountdown() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const norwegianDate = today.toLocaleDateString('no-NO', options);
    const releaseDate = new Date('2025-05-14');
    const timeDiff = releaseDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    printOut(`Today's date: ${norwegianDate}`);
    printOut(`Days left until 2XKO release: ${daysLeft}`);
}
printDateAndCountdown();


printOut(newLine);
printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Part 3 (8 points)
Create a function that receives the radius of a circle and prints the diameter, circumference, and area.
*/

function calculateCircleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = Math.PI * diameter;
    const area = Math.PI * Math.pow(radius, 2);
    printOut(`Diameter: ${diameter}`);
    printOut(`Circumference: ${circumference}`);
    printOut(`Area: ${area}`);
}
calculateCircleProperties(5); // Example radius


printOut(newLine);
printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*Part 4 (8 points)
Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle.
*/

function calculateRectangleProperties(rectangle) {
    const width = rectangle.width;
    const height = rectangle.height;
    const circumference = 2 * (width + height);
    const area = width * height;
    printOut(`Circumference: ${circumference}`);
    printOut(`Area: ${area}`);
}
const rectangle = { width: 5, height: 10 }; // Example rectangle
calculateRectangleProperties(rectangle);


printOut(newLine);
printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Part 5 (12 points)
Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
numbers and print all three combinations as integers (no decimals). Design the function to take two
parameters: first the temperature, then the temperature type/id. Use these parameters to convert to the
other two temperature types and print them. Formula:
*/

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
function fahrenheitToKelvin(fahrenheit) {
    return fahrenheitToCelsius(fahrenheit) + 273.15;
}
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
function kelvinToFahrenheit(kelvin) {
    return (kelvinToCelsius(kelvin) * 9/5) + 32;
}
function convertTemperature(temperature, type) {
    let celsius, fahrenheit, kelvin;
    if (type === 'C') {
        celsius = temperature;
        fahrenheit = celsiusToFahrenheit(celsius);
        kelvin = celsiusToKelvin(celsius);
    } else if (type === 'F') {
        fahrenheit = temperature;
        celsius = fahrenheitToCelsius(fahrenheit);
        kelvin = fahrenheitToKelvin(fahrenheit);
    } else if (type === 'K') {
        kelvin = temperature;
        celsius = kelvinToCelsius(kelvin);
        fahrenheit = kelvinToFahrenheit(kelvin);
    } else {
        printOut("Unknown temperature type!");
        return;
    }
    printOut(`Celsius: ${Math.round(celsius)}`);
    printOut(`Fahrenheit: ${Math.round(fahrenheit)}`);
    printOut(`Kelvin: ${Math.round(kelvin)}`);
}
convertTemperature(25, 'C'); // Example: 25 degrees Celsius
convertTemperature(77, 'F'); // Example: 77 degrees Fahrenheit
convertTemperature(298, 'K'); // Example: 298 Kelvin


printOut(newLine);
printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Part 6 (12 points)
Create a function that calculates the price without VAT (sales tax). The function needs two arguments, one
for the price including VAT (gross amount) and one for the tax group in text (normal = 25%, food = 15%,
hotel, transport, and cinema = 10%). The text argument should not be case-sensitive. If the VAT group is
not correct, the text "Unknown VAT group!" should be printed. The function must return the price without
tax, i.e., the net price. Call the function four times with different gross amounts. One for each of the VAT
groups (25, 15, and 10) and one with an unknown group for example “goblins”. Tip: Use "NaN" to identify
that an unknown VAT group is returned from the function. Formula: net = (100 * gross) / (vat + 100).
*/

function calculatePriceWithoutVAT(gross, vatGroup) {
    let vat;
    switch (vatGroup.toLowerCase()) {
        case 'normal':
            vat = 25;
            break;
        case 'food':
            vat = 15;
            break;
        case 'hotel':
        case 'transport':
        case 'cinema':
            vat = 10;
            break;
        default:
            printOut("Unknown VAT group!");
            return NaN;
    }
    const net = (100 * gross) / (vat + 100);
    return net;
}
const grossNormal = 125; // Example gross amount for normal VAT
const grossFood = 115; // Example gross amount for food VAT
const grossHotel = 110; // Example gross amount for hotel VAT
const grossUnknown = 100; // Example gross amount for unknown VAT group
printOut(`Price without VAT (Normal): ${calculatePriceWithoutVAT(grossNormal, 'normal')}`);
printOut(`Price without VAT (Food): ${calculatePriceWithoutVAT(grossFood, 'food')}`);
printOut(`Price without VAT (Hotel): ${calculatePriceWithoutVAT(grossHotel, 'hotel')}`);
printOut(`Price without VAT (Unknown): ${calculatePriceWithoutVAT(grossUnknown, 'goblins')}`);


printOut(newLine);
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Part 7 (5 points)
Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the
distance. If more than one parameter is missing, return NaN.
*/

function calculateSpeed(distance, time) {
    if (distance === undefined && time === undefined) {
        return NaN;
    } else if (distance === undefined) {
        return time * speed;
    } else if (time === undefined) {
        return distance / speed;
    } else {
        return distance / time;
    }
}
const speed = 60; // Example speed
const distance = 120; // Example distance
const time = 2; // Example time
printOut(`Speed: ${calculateSpeed(distance, time)}`);
printOut(`Distance: ${calculateSpeed(undefined, time)}`);
printOut(`Time: ${calculateSpeed(distance, undefined)}`);
printOut(`Missing parameters: ${calculateSpeed(undefined, undefined)}`);


printOut(newLine);
printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Part 8 (5 points)
Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
maximum, make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out.
*/

function padString(text, maxSize, char, insertBefore) {
    if (text.length >= maxSize) {
        return text;
    }
    const padding = char.repeat(maxSize - text.length);
    return insertBefore ? padding + text : text + padding;
}
const text = "Hello";
const maxSize = 10;
const char = "*";
const insertBefore = true; // true for before, false for after
const paddedText = padString(text, maxSize, char, insertBefore);
printOut(`Padded text: ${paddedText}`);


printOut(newLine);
printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Part 9 (25 points)
From mathematics, we have the following expression:
1 + 2 = 3
4 + 5 + 6 = 7 + 8
9 + 10 + 11 + 12 = 13 + 14 + 15
16 + 17 + 18 + 19 + 20 = 21 + 22 + 23 + 24
25 + 26 + 27 + 28 + 29 + 30 = 31 + 32 + 33 + 34 + 35
Create a function or functions that can test this expression for 200 lines. If the test fails, print out where the
two sides are not equal and stop the loop. If all 200 lines are OK, print "Maths fun!".*/
function testMathExpression() {
    for (let i = 1; i <= 200; i++) {
        const leftSide = (i * (i + 1)) / 2;
        const rightSide = ((i + 1) * (i + 2)) / 2;
        if (leftSide !== rightSide) {
            printOut(`Test failed at line ${i}: ${leftSide} != ${rightSide}`);
            return;
        }
    }
    printOut("Maths fun!");
}
testMathExpression();


printOut(newLine);
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Part 10 (10 points)
Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 *
3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
Have the function call itself to calculate the result and print the final answer.
*/

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const number = 5; // Example number
const result = factorial(number);
printOut(`Factorial of ${number}: ${result}`);


printOut(newLine);