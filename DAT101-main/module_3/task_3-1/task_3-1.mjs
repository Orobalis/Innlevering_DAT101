"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* 
- Part 1 ok
Complete the given "if" in the task_3-1.mjs file at part 1, statement so that it matches this: If I wake up at
exactly 7 o'clock then I can catch the bus to school. Run the program with different values of wake-up time
(6, 7, 8).
Print out to the HTML page the expression statement you made.

- Part 2 ok
Extend part 1 to match this "if" and "else" statement: "If I wake up at exactly 7 o'clock, I can take the bus to
school, otherwise I have to take the car to school". Run the program with different values of wake-up time
(6, 7, 8)

- Part 3
Extend part 2 to expand more options: “If I wake up at exactly 7 o'clock, I can take the bus to school,
otherwise if I wake up exactly at 8 o'clock, I can take the train to school, otherwise I have to take the car to
school”. Run the program with a different value of wake-up time (7, 8).*/

let wakeUpTime = 6;
printOut("If i wake up at " + wakeUpTime.toString()); 

if (wakeUpTime === 7){
  printOut("Må ta buss ");
} else if (wakeUpTime === 8){
  printOut('Må ta tog.');
} else {
  printOut('Må ta bil');
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/*'
Part 4
Write an if statement that checks whether an integer variable is negative or positive, print the text
"Positive" or "Negative" accordingly. Run the program with different types of values for the variable to
check the if statement.

part 5
Change part 4 to print “Positive”, “Negative” or “Zero” accordingly. Run the program with different types of
values for the variable to check the "if" statement.
*/
let soda = Math.random(0);
const emtey = 0;
if (soda = 0){
printOut('There is more soda ! :)')
} else {
  printOut('There i s no more soda . :(')
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* ¨
Imagine you have a photo editing profession. And you have a website where people can upload pictures
for you to work on. However, the images must be 4MP or larger, if they are smaller, you cannot use them.
Create a variable that holds a generated random integer between 1 and 8 (inclusive). Use this variable to
simulate the uploaded image size and print it. Then create an if statement that prints out “Thank you” if the
size is equal to or greater than the limit. Otherwise, print out "The image is too small"
 */

let imageSize = Math.floor(Math.random() * 8) + 1;
printOut("The image size is: " + imageSize.toString() + " MP");
if (imageSize >= 4){
  printOut("Thank you for the image");
} else {
  printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
//part 7 Expand part 6 to exclude if the image size is larger or equal to 6MP, then print out “Image is too large”.
/* Put your code below here!*/

imageSize = Math.floor(Math.random() * 8) + 1;
printOut("The image size is: " + imageSize.toString() + " MP");
if (imageSize >= 4 && imageSize < 6){
  printOut("Thank you for the image");
}
else if (imageSize >= 6){
  printOut("Image is too large");
}
else {
  printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* 
Use this code:
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
Print if monthName contains “r”: “You must take vitamin D” else “You do not need to take vitamin D”
*/



const monthList =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  printOut("The month is: " + monthName); 
  if (monthName.includes("r")){
    printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D");
  }
  let daysInMonth;
  switch (monthName) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      daysInMonth = 31;
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      daysInMonth = 30;
      break;
    case "February":
      daysInMonth = 28; // Vis det ikke er skuddår
      break;
  }
  printOut("The month " + monthName + " has " + daysInMonth + " days.");

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
part 9
Expand exercise 8 to print how many days there are in the current month. And do not use date object.
*/

const monthList2 =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];
  const noOfMonth2 = monthList2.length;
  const monthName2 = monthList2[Math.floor(Math.random() * noOfMonth2)];
  printOut("The month is: " + monthName2); 
  if (monthName2.includes("r")){
    printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D");
  }
  let daysInMonth2;
  switch (monthName2) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      daysInMonth2 = 31;
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      daysInMonth2 = 30;
      break;
    case "February":
      daysInMonth2 = 28; // Igjen, vis det ikke er skuddår
      break;
  }
  printOut("The month " + monthName2 + " has " + daysInMonth2 + " days.");

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* 
Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from
March through May, but in April you have temporary premises in the building next door. Use the month
constant in exercise 8 to inform the status of your gallery in that month.
*/

const monthList3 =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];
  const noOfMonth3 = monthList3.length;
  const monthName3 = monthList3[Math.floor(Math.random() * noOfMonth3)];
  printOut("The month is: " + monthName3); 
  if (monthName3.includes("r")){
    printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D");
  }
  let daysInMonth3;
  switch (monthName3) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      daysInMonth3 = 31;
      break;
    case "April":
      daysInMonth3 = 30; // Temporarily in the building next door
      break;
    case "June":
    case "September":
    case "November":
      daysInMonth3 = 30;
      break;
    case "February":
      daysInMonth3 = 28; // Igjen, vis det ikke er skuddår
      break;
  }
  printOut("The month " + monthName3 + " has " + daysInMonth3 + " days.");
  if (monthName3 === "March" || monthName3 === "May"){
    printOut("The gallery is closed for refurbishment.");
  } else if (monthName3 === "April"){
    printOut("The gallery is temporarily in the building next door.");
  } else {
    printOut("The gallery is open.");
  }
  
printOut(newLine);
