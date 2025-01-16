'use strict'

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

/*

Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”

Test data:
1. Data 1: Test for bill values 275, 40 and 430

Hints:
2. To calculate 20% of a value, simply multiply it by 20/100 = 0.2
1. Value X is between 50 and 300, if it's >= 50 && <= 300 
*/






