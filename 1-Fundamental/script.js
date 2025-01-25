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

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

////////////////////////////////////
// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

/*
// ******************************** //
// ****** Coding Challenge #3 ***** //
// ******************************** //

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

// const scoreDolphins = ((96+108+89)/3);
// const scoreKoalas = ((88+91+110)/3);

// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins>scoreKoalas){
//   console.log("Dolphins won the Trophy 😎");
// }
// else if(scoreKoalas>scoreDolphins){
//   console.log("Koalas won the Trophy 😎");
// }
// else if(scoreKoalas === scoreDolphins){
//   console.log("Both are won the Trophy 🏳");
// }
// else{
//   console.log("No one won the Trophy!");
// }

// Bonus 1 //

// const scoreDolphins = ((97+112+101)/3);
// const scoreKoalas = ((109+95+123)/3);

// const scoreequal = (scoreDolphins===scoreKoalas)

// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins>scoreKoalas && scoreDolphins >= 100){
//   console.log("Dolphins won the Trophy 😎");
// }
// else if(scoreKoalas>scoreDolphins && scoreKoalas >=100 ){
//   console.log("Koalas won the Trophy 😎");
// }
// else if(scoreKoalas === scoreDolphins && scoreequal >=100 ){
//   console.log("Both are won the Trophy 🏳");
// }
// else{
//   console.log("No one won the Trophy!");
// }

// ******* SWITCH STATEMENTS ******** //

// const day = "sunday";

// switch (day) {
//   case "monday":
//     console.log("Thinga kelaimai tirudanai pidithom");
//     break;
//   case "tuesday":
//     console.log("Seevai kelaimai jail ku ponnan");
//     break;
//   case "wednesday":
//     console.log("Pudhan kelaimai pudhi vandhathu");
//     break;
//   case "thursday":
//     console.log("Veelai kelaimai vidudalai aanan");
//     break;
//   case "friday":
//     console.log("Velli kelaimai v2ku ponnan");
//     break;
//   case "saturday" :
//   case "sunday" :
//     console.log("saputu tu paduthan");
//     break
//   default:
//     console.log("Plz enter valid options");
//     break;
// }

//  Now, lets try in switch statements in if, else if and else  //

// const day = "sunday";

// if(day==="monday"){
//   console.log("Thinga kelaimai tirudanai pidithom") 
// }
// else if(day === "tuesday"){
//   console.log("Seevai kelaimai jail ku ponnan");
// }
// else if(day === "wednesday"){
//   console.log("Pudhan kelaimai pudhi vandhathu")
// }
// else if(day === "thursday"){
//   console.log("Veelai kelaimai vidudalai aanan")
// }
// else if(day === "friday"){
//   console.log("Velli kelaimai v2ku ponnan")
// }
// else if(day === "saturday" || "sunday"){
//   console.log("saputu tu paduthan")
// }
// else{
//   console.log("Plsz..Enter valid options");
// }

// ************************************ //
// ******* CODING CHALLENGE - 4 ******* //
// ************************************ //
/*

Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%. 

Your tasks: 

1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!) 

2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25” 

Test data: 

§ Data 1: Test for bill values 275, 40 and 430 

Hints: 

§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉 
 
GOOD LUCK 😀 

*/

let bill = 40;

const tip = bill<=300 && bill>=50 ? bill*0.15 : bill*0.2

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill+tip}`);





