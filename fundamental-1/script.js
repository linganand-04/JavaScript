let js = "good";

// if(js === "good") alert("Javascript is Fun!!!")
// console.log(28+34+31-19-10);

// let fname = "linganand"

// console.log(fname);

// var lname = "lian"

// console.log(lname);

// Math operator

// How to find current age //

/*
let findage = new Date().getFullYear();
console.log(findage);

let dob = 2004;
let yage = "Your age is ";
let age = findage - dob;

console.log( yage + age);
*/

// Math operator //
/*
const now = 2024;
const ageLian = now - 2004;
const ageAm = now - 2005;

console.log(ageLian , ageAm); // ( 20 19 )

console.log( ageLian / 10 , ageAm * 2 , 8**2 ); // ( 2 38 64 )

const fname = 'Ling';
const lname = 'anand'

console.log(fname + lname); // if you want space between the name see below..
console.log(fname + " " + lname);
*/

/*
// Assignment Operator //

let x = 10+5 // 15
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x ++ ; // x = x+1 = 101
console.log(x);

x --;  //  x = x-1 = 100
console.log(x);

x --;  //  x = x-1 = 99
console.log(x);

*/

// Comparsion operators //
/*
console.log(ageLian > ageAm); // ( 20 > 19)
console.log(ageAm >= 19);
console.log(ageAm >= 20);

const isfullAge = ageAm >= 19;

console.log(now - 2004 > now - 2005);
*/

// Operators Procedence

/*
const now = 2024;
const ageLian = now - 2004;
const ageAm = now - 2005;

console.log(now - 2004 > now - 2005);

let x,y;

x = y = 55 - 10 - 15; // 55 - 10 = 45 , 45 - 15 = 30 //  x = y = 30 , x = 30

console.log(x,y);

let a = 20
let b = 10

const avg = ( a + b ) / 2; // right to left = (a + b) = 20 + 10 = 30 , ( a + b) / 2 = 30/2 = 15...

//  const avg =  a + b  / 2; // left to right = b/2 = 10 /2 = 5 , a + b = 20 + 5 = 25..

console.log(avg);
*/

// *************************************
// CODING CHALLENGE - 1
// *************************************

/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).

Your tasks:
 1. Store Mark's and John's mass and height in variables
 
 2. Calculate both their BMIs using the formula (you can even implement both versions)
 
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:

 Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

 Data 2: Marks weights 95 kg and is 1.88 m tall. John 
 weights 85 kg and is 1.76 m tall.

*/

/*
// BMI = mass / height ** 2;

let markweg = 78;
let markhei = 1.69;

let Johnwei = 95;
let johnhei = 1.88;

let johnbmi = Johnwei / johnhei ** 2;
let markbmi = markweg / markhei ** 2;

console.log("John = " + johnbmi);
console.log("Mark = " + markbmi);

let markHigherBMI = johnbmi > markbmi;

console.log(markHigherBMI);

*/

// *************************************
// STRING AND TEMPLATE LITERALS
// *************************************

/*

const firstname = 'Linganand';
const dob = 2004;
const year = new Date().getFullYear();
const job = 'Developer';

const lian = ("I'm " + firstname + ", a " + (year - dob) + " years old " + job + "!" );

console.log(lian);

// Now try alternate way to achieve!!!

// Template Literals

const newlian = `I'm ${firstname} , a ${year-dob} years old ${job}!!!`;

console.log(newlian);

// How to print multiple lines..

console.log(`How to \n\print \n\Multiple values`);

*/

// *************************************
// IF & ELSE STATEMENTS
// *************************************

/*
const age = 10;

if (age>=18) {
  console.log("Lian is ready to vote ✔");
}

else{
  const year = 18 - age  
  console.log(`Lian is not ready to vote. Waiter for ${year} years 🤭`);
}

// -----------------------------------

const biryear = 2004;

let century;
if (biryear<=2000) {
  century = 20;
}
else{
  century = 19
}

console.log(century);

*/

/*

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/


// *************************************
// CODING CHALLENGE - 1
// *************************************

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 
*/

// BMI = mass / height ** 2;/
/*

///////////////////////////////////////////
let markweg = 78;
let markhei = 1.69;

let Johnwei = 95;
let johnhei = 1.88;

let johnbmi = Johnwei / johnhei ** 2;
let markbmi = markweg / markhei ** 2;

console.log("John = " + johnbmi);
console.log("Mark = " + markbmi);

let markHigherBMI = markbmi > johnbmi;


console.log(markHigherBMI);

if(markHigherBMI){
  console.log(`Mark's BMI (${markbmi.toFixed(1)}) is higher than John's (${johnbmi.toFixed(1)})!`);
}
else{
  console.log(`John's BMI is higher than Mark's!`);
}
///////////////////////////////////

*/



