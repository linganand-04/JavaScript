"use strict";

/* // 003 FUNCTIONS // 

function logger() {
  console.log('Hey Bro..')
}

// Calling / running / invoking 

logger() // Hey Bro..
logger() // Hey Bro..
logger() // Hey Bro..

function juicemaker(apple,orange){
  console.log(apple, orange);
  let juice = `${apple} apple makes juice, ${orange} organge makes juice`;
  return juice
}

const applejuice = juicemaker(3,0)
console.log(applejuice);


const orangejuice = juicemaker(0,5)
console.log(orangejuice);

*/

/*

// 004 FUNCTION DECLARATION VS FUNCTIONS EXPRESSIONS //

// FUNCTION DECLARATION -- 

// IF YOU DECLARE VARIABLES IN BEFORE THE FUNCTION OR AFTER THE FUNCTIONS BOTH ARE WORK..

function findage1(birthYear) {
  return 2025 - birthYear;
}

const lianage =  findage1(2004)

// FUNCTION EXPRESSIONS

// IF WORKS ONLY AFTER THE FUNCTIONS DECLARE THE VARIABLES.. ELSE YOU HAVE ERROR IN YOUR CODE

const findage2 = function(birthYear){
  return 2025- birthYear
}

const digoage = findage2(2002);

console.log(lianage,digoage);

// KNOW THE SYNTAX AND DIFFERCE BETWEEN BOTH...

*/

// 005 - ARROW FUNCTIONS //

// Arrow function //
/*
const findage3 =  birthYear => 2025 - birthYear;

const age3 = findage3(2004)
console.log(age3);

const Retirement = (birthYear, firstname) =>{
  console.log(birthYear,firstname);
  
  const age = 2025 - birthYear;
  const Retireage = 65-age;
  return `${firstname} is wait for retirement and work for ${Retireage} years..`
}

console.log(Retirement(2004,'Linganand'));
console.log(Retirement(2002,'Dineshgokul'));
*/

// 006 - FUNCTION CALLING ANOTHER FUNCTIONS //
/*
function cutFruitPieces (fruits) {
   return fruits * 4;
}

function juicemaker(apple,orange){

  const applepieces = cutFruitPieces(apple);
  const orangepieces = cutFruitPieces(orange)

  let juice = `${applepieces} apple makes juice, ${orangepieces} organge makes juice`;
  return juice
}
console.log(juicemaker(2,3));
*/

// 007 - REVIEWING FUNCTION //
/*
const calcage =  function(birthYear){
  return 2025 - birthYear;
}

const Retirement = function(dob, firstname){  
  const age = calcage(dob);
  const Retireage = 65-age;

  if (Retireage > 0) {
    return Retireage;
  }
  else{
    return -1;
  }
}

console.log(Retirement());

// *** END *** 007 - REVIEWING FUNCTION //
*/

/*
Coding Challenge #4

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".

4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.

5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

*/

// const DolphinAvg = (44+23+71)/3;
// const KoalasAvg = (65+54+49)/3

/*
const calcAverage = (a,b,c) => (a+b+c)/3
console.log(calcAverage(10,10,10));

// TEST 1!

let DolphinsScore = calcAverage(44,23,71);
let KoalasScore = calcAverage(65,54,49);
console.log(DolphinsScore,KoalasScore);

function checkWinner (avgDolhins,avgKoalas){
  avgDolhins = DolphinsScore;
  avgKoalas = KoalasScore;
  if (avgDolhins >=  2 * avgKoalas) {
    console.log(`Dophins win (${DolphinsScore} vs. ${KoalasScore})`);
  }
  else if(avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${DolphinsScore} vs. ${KoalasScore})`);
  }
  else{
    console.log("No is win");
  }
}

checkWinner(DolphinsScore,KoalasScore)

// TEST 2

DolphinsScore = calcAverage(85,54,41);
KoalasScore = calcAverage(23,34,27);
console.log(DolphinsScore,KoalasScore);

checkWinner(DolphinsScore,KoalasScore)

*/

// 008 INTRODUCTION TO ARRAYS
/*
const friend1 = "Linganand";
const friend2 = "Sanjay";
const friend3 = "Arun";
const friend4 = "Balaji";

const friend = ["Linganand", "Sanjay", "Arun", "Balaji"];

console.log(friend);

console.log(friend[0]);
console.log(friend[3]);
console.log(friend[1]);

const years = new Array(2004, 2004, 2004, 2005);
console.log(years);

console.log(friend.length);

console.log(friend[friend.length - 1]);

friend[3] = "Mathan Raj";
console.log(friend);

// If you try to change the value of array..First check the variables..
// If const variables do not change the value

// friend = ["paiya", "dei"]
// console.log(friend);

const firstname = "Linga";
const ling = [firstname, "Lian", 2025 - 2004, friend];
console.log(ling);

console.log(ling.length);

// Exercise

const calcage = function (birthyear) {
  return 2025 - birthyear;
};

const y = [2024, 2020, 2016, 2005, 2004];

console.log(y);

const age1 = calcage(y[0]);
const age2 = calcage(y[1]);
const age3 = calcage(y.length - 1);

const age = [calcage(y[0]), calcage(y[2]), calcage(y[3]), y[3]];
*/

// 011 - BASIC ARRAY OPERATIONS (METHODS)
/*
const friend = ["Linganand", "Sanjay", "Arun", "Balaji"];
console.log(friend);

// Add elements
friend.push("Mathan"); // Add - Mathan at end of array
console.log(friend);

friend.unshift("Gokul"); // Add - Gokul at start of the array
console.log(friend);

// Remove elements

friend.pop();
console.log(friend); // Remove - last array elements from the friend

friend.shift();
console.log(friend); 

const popped = friend.shift();
console.log(popped); 

console.log(friend);

// Remember that indexOf is case sensistive 

console.log(friend.indexOf("Sanjay")); // Check the "Sanjay" in a array friends = ans. 0

// if doesn't exist = ans. -1

// Remember that includes is case sensistive 

console.log(friend.includes("Arun")); // true
console.log(friend.includes("arun")); // false

if (friend.includes("balaji")) {
  console.log("Balaji is your friend list");
}
else{
  console.log(`Balaji is Stranger..`);
}
*/

// 011 - CHALLENGE #2

/*

Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.

Your tasks:

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data below

3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip 

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)

*/

// const calcTip = function (bill) {
//   return bill => 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 ;
// }

const calcTip = bill => 50 && bill <= 300 ? bill*0.15 : bill*0.2 

const bills = [125,555,44]

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

console.log(bills,tips);

// Doesn't Work..
// const total = [bills.values+tips.values]

const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]

console.log(`Total = ${total}`);

