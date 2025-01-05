'use strict'

/* // 003 FUNCTIONS // 

function logger() {
  console.log('Hey Bro..')
}

// Calling / running / invoking 

logger()
logger()
logger()

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


