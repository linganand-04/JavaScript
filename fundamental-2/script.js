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

/*
const calcTip = bill => 50 && bill <= 300 ? bill*0.15 : bill*0.2 

const bills = [125,555,44]

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

console.log(bills,tips);

// Doesn't Work..
// const total = [bills.values+tips.values]

const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]

console.log(`Total = ${total}`);
*/

// 012 - INTRODUCTION TO OBJEECTS...

/*
const lian = ["linga", "anand", 2025-2004,"webdeveloper", ["anand","lian","saran"]];

console.log(lian[4][2]);

lian[5] = "li"

const lian1 = {
  firstname:'linga',
  lastname:'anand',
  age:2025-2004,
  desgination:'Webdeveloper',
  friends:['anand','lian','saran']
}
console.log(lian1.friends[0]);
*/

// 013 - DOT VS. BRACKET NOTATIONS...
/*
const lian1 = {
  firstname:'linga',
  lastname:'anand',
  age:2025-2004,
  desgination:'Webdeveloper',
  friends:['Anand','Srikanth','Rizwan']
}

console.log(lian)

console.log(lian1)

const Namekey = "name";

console.log(lian1['first'+Namekey]);
console.log(lian1['last'+Namekey]);

lian1.location = "ponneri"
console.log(lian1);


 const screen =  prompt("Choose anyone from firstname, lastname, age, designation, friends")

 if (lian1[screen]) {
  console.log(lian1[screen]);
 }else{
  console.log("Invalid Options..Choose anyone from firstname, lastname, age, designation, friends");
 }
 console.log(screen);

 // If you add like this to object.. Use both options..

 lian1.github = "linganand-04"
 lian1['instagram'] = "linganand_04"
 console.log(lian1);
 
 // If you add like this to array.. must declare index of array..
   
 lian[-1]= "instagram" // End of the array..
 console.log(lian);

// Chanllenge 

// Lian has 4 friends and his close friends is Anand

console.log(lian1.friends);

const closefrnd = lian1.friends.includes("Anand")

if (closefrnd) {
  console.log("Anand is close frnd to lian");
}else{
  console.log("Check Properly...");
}
console.log(closefrnd);

// Another opions...
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

// 014 - OBJECTS METHODS

/*
const lian1 = {
  firstname:'linga',
  lastname:'anand',
  birthyear:2004,
  desgination:'Webdevelopment',
  friends:['anand','lian','saran'],
  hasDriverLicense: true,

  // calcAge : function(birthYear){
  //   return 2025 - this.birthyear
  // }
  
  // calcAge : function(){
    //   console.log(this);
    //   return 2025 - this.birthyear;
    // }

    calcAge : function(){
      this.age = 2025 - this.birthyear;
      return this.age;
    },
    getsummary: function(){
      return `${lian1.firstname} is a ${lian1.calcAge(this.age)}-years old ${lian1.desgination}, and he has ${lian1.hasDriverLicense ? 'a' : 'no'} driver's license`
    }
  }
  // console.log(lian1.calcAge(2004)); // 1st Function works..

  // console.log(lian1.calcAge(this.age));

  //Challenge 

  // "Lian is a 21-years old Webdeveloper, and he has a/no  driver's license"

// OPTION 2
// console.log(`${lian1.firstname} is a ${lian1.calcAge(this.age)}-years old ${lian1.desgination}, and he has ${lian1.hasDriverLicense ? 'a' : 'no'} driver's license`);
  
console.log(lian1.getsummary());

*/

// 015 - Chanllenge - 3

/*

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks: 

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI(the same method on both objects). Store the BMI value to a property, and also return it from the method 

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!" 

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

*/

/*
// Solution - 1
// From Own Idea Code 
const mark = {
  fullname:"Mark Miller",
  mass:78,
  height:1.69
}

const john = {
  fullname:"John Smith",
  mass:92,
  height:1.95
}

const calcBMI = (mass,height)=>mass/height**2;

console.log(`${mark.fullname}'s BMI (${calcBMI(mark.mass,mark.height).toFixed(2)}) is higher than ${john.fullname}'s (${calcBMI(john.mass,john.height).toFixed(2)})!`);
*/

// Solution - 2
// From Video Solution

/*
const mark = {
  fullname:"Mark Miller",
  mass:78,
  height:1.69,
  CalcBMI:function() {
    this.BMI = this.mass / this.height**2;
    return this.BMI
  }
}

const john = {
  fullname:"John Smith",
  mass:92,
  height:1.95,
  CalcBMI:function() {
    this.BMI = this.mass / this.height**2;
    return this.BMI
  }
}

mark.CalcBMI()
john.CalcBMI()

console.log(mark.BMI,john.BMI);

// John's BMI (28.3) is higher than Mark's (23.9)!

if(john.BMI>mark.BMI){
  console.log(`${john.fullname}'s BMI (${john.BMI}) is higher than ${mark.fullname}'s (${mark.BMI})`);
}else{
  console.log(`${mark.fullname}'s BMI (${mark.BMI}) is higher than ${john.fullname}'s (${john.BMI})`);
}

*/

// 016 - ITERATION FOR THE LOOP
/*
// For loops keep running while CONDITION is TRUE
for(let int=1; int<=10; int++ ){
  console.log(`Current Number is (${int}) next number is ${int+1}`);
}

// Two Tables in JavaScript..
for(let int=1; int<=10; int++ ){
  console.log(`2x${int}=${int*2}`);
}
*/

// 017 - LOOPING ARRAY, BREAKING AND COUNTINUING 
/*
const lian = [
  'linga',
  'anand',
  2025-2004,
  'Webdeveloper',
  ['Anand','Srikanth','Rizwan'],
  true
]

const type = [];

for (let i = 0; i <= lian.length-1; i++) {
  // Reading from lian array
  console.log(lian[i], typeof lian[i]);

  // Filling types array
  // types[i] = typesof lian[i];
  type.push(typeof lian[i]);
}

console.log(type);

const year = [2004,2005,2022,2010]
const age = [];

for(let i = 0; i<year.length; i++){
  age.push(2025-year[i])
}

console.log(age);

// Continue and break

console.log('--- ONLY STRINGS ---');
for (let i = 0; i <= lian.length; i++) {
  if(typeof lian[i] !== "string" ) continue
  console.log(lian[i], typeof lian[i]);
}
 
console.log('--- BREAK WITH NUMBERS ---');
for (let i = 0; i <= lian.length; i++) {
  if(typeof lian[i] === "number" ) break
  console.log(lian[i], typeof lian[i]);
}


// COLOURFUL OUTPUT IN DEVTOOLS - ITS WORKS ❤ 

// console.log(
//   '%c Demo status : %c loaded ',
//   `background: #ddd; color: #000; padding: 4px; border-radius: 2px`,
//   `background: #6f6; color: #000; padding: 4px; border-radius: 2px; margin-left: 1ch`
// );

*/


// 018 - LOOPING BACKWARDS AND LOOP IN LOOP


// THIS IS HARD CODE.. Don't do like this..❌

// for(let int=10; int>=0; int-- ){
//   console.log(`Current Number is (${int}) next number is ${int-1}`);
// }

// THIS IS DYNAMIC CODE... Use this one.. FOR ARRAY... ✔

const lian = [
  'linga',
  'anand',
  2025-2004,
  'Webdeveloper',
  ['Anand','Srikanth','Rizwan'],
  true
]

for(let i = lian.length-1; i>=0 ; i--  ){
  console.log(lian[i]);
}

// LOOPS IN LOOP..

for( let int = 1 ; int<=3; int++){
  console.log(`Exercise ${int}`);

  for( let j = 1; j <=5 ; j++){
    console.log(`Exercise ${int} for Say Hi..${j}`);
    
  }
}


