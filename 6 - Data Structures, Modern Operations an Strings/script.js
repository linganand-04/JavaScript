'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ startIndex, mainIndex, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },
  dish: function (ing1, ing2, ing3) {
    console.log(
      `Here is Your Delicious Curd Rice with ${ing1}, ${ing2}, ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients, otherIngredients);
    // .toString().replaceAll(',',''));
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1
console.log(gk,fieldPlayers);

// 3
const allPlayers = [...players1,...players2]
console.log(allPlayers);

// 4 
const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final);

// 5
const {odds:{team1,x: draw,team2} } = game
console.log(team1,draw,team2);




////////////////////////
// 009 -  Logical Assignment Operators
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

////////////////////////
// 008 - Nullish coalesing Operator
/*
const guestsExp1 = restaurant.guests || 10; // check any truthy value..if it is exist return the data
console.log(guestsExp1);

const guestsExp2 = restaurant.guests && 10;
console.log(guestsExp2); // check both values.. if both are tuthy values.. return the data.. else falsey return the falsey value..

// Nullish : null and undefined ( NOT 0 or '' )
const guestsCorrect = restaurant.guests ?? 10;
console.log(guestsCorrect);
*/

////////////////////////
// 007 - Short Circuiting ( && and )
/*
// use ANY data type, return ANY data type, Short circuiting

console.log('----- OR -----');

console.log(3 || 'Lian');
console.log(true || 0);
console.log( '' || 'Lian');
console.log(undefined || null); 
console.log( '' || undefined);

// restaurant.guests = 23 // When give u value = 0 return the another value... because #ZERO and #0 are not a Truthy values.. 

// const guests1 = restaurant.guests ? restaurant.guests : 10
// console.log(guests1);

// const guests2 = restaurant.guests || 10
// console.log(guests2);

console.log('----- AND -----');

console.log(0 && 'Lian');
console.log(3 && 'Lian');
console.log(true && 0);

console.log('hello' && 23 && null && 'jonas');

if(restaurant.orderPizza){
  restaurant.orderPizza('Mushroon','spinch','lausse')
}

restaurant.orderPizza && restaurant.orderPizza('Mushroon','spinch','lausse')
*/

////////////////////////
// 006 - Patterns and Parameters
/*
// 1) Destructuring

// SPREAD, because on RIGHT SIDE of =

const arr = [1, 2, ...[4, 5]];
console.log(arr);

// REST, because on LEFT SIDE of =

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // a =1 , b=2, others = [3,4,5]

const [Pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(Pizza, Risotto, otherFood);
// ***** HOW ITS WORK ***** //

// OUTPUT : Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Pizza, , Risotto, = Pizza Risotto // EXPLAIN.. Skip the middle value...

// otherFood = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// ********* END ********** //

// 2) Functions..

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)sum =  sum + numbers[i]
    console.log(sum);
  console.log(numbers);
};

add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 6, 7);

const x =[23,5,6]

add(...x)

restaurant.orderPizza('mushroom', 'maida','vegetables')
*/

////////////////////////
// 005 Spead Operators (...)
/*

const arr = [2, 3, 4];
const badArr = [0, 1, arr];
const newArr = [0, 1, arr[0], arr[1], arr[2]];

console.log(newArr);
console.log(badArr);

// Now, we use Spread Operators to Achieve..

const sprArr = [0,1,...arr]
console.log(`This is Spread Operators.. ${sprArr}`);

const newmenu = [...restaurant.mainMenu,'Burger']
console.log(newmenu);

// Copy newmenu

const copyNewmenu = [...restaurant.mainMenu]
console.log(copyNewmenu);

// Join 2 Arrays..

const menu = [...restaurant.starterMenu,'Burger',...restaurant.mainMenu]
console.log(menu);

// Iterables  : string, array, maps, sets, NOT a Object
const str = 'Ling'
console.log(...str); // Don't Use for Strings..Spread Operators..

// We can't use `` in Spread operators.. 
// console.log(`${...str}anand`); 

// REAL WORLD EXAMPLES..
const ingredients = [
// prompt(`Let's Make Curd Rice! Ingredients 1?`),prompt(`Ingredients 2?`),prompt(`Ingredients 3?`)
]

////////////// Normally We did like this..
restaurant.dish(ingredients[0],ingredients[1],ingredients[2])

////////////// But, Now we know about Spread Operators...
restaurant.dish(...ingredients)

// Objects..

const newRestaurant = {foundedIn:1840,...restaurant,founder:'Lian'}

console.log(newRestaurant);

const copyRestaurant = {...restaurant}

console.log(copyRestaurant);

copyRestaurant.name = "Sangi Mangi"

console.log(copyRestaurant.name);
console.log(restaurant.name);

*/

////////////////////////
// 004 - Destructing Objects..
/*
restaurant.orderDelivery({
  startIndex : 2,
  mainIndex : 2,
  time : `7:00 PM` ,
  address : `48, Thayuman Street, Ponneri - 601204`,
})
*/

////////////////////////
// 003 - Destructing Arrays..

/*
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

const [a1, b2, c3] = arr;

console.log(a1, b2, c3);

// Getting first and second element
const [fir, sec] = restaurant.categories;
console.log(fir, sec);

// Getting first and third element
let [main, , , secondary] = restaurant.categories;
console.log(main, secondary);

// *****  Invert the Elements  *****
// const temp = main
// main = secondary
// secondary  = temp
// console.log([main,secondary])

[main, secondary] = [secondary, main];

console.log([main, secondary]);

// Return the two values using function...
// console.log(restaurant.order(2,0));

const [starter, mainCourse] = restaurant.order(2, 2);
console.log(starter, mainCourse);

// Nested Destructing Array

const nested = [5, 6, [7, 8]];
// const [i, , j] = nested
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default

const [p = 1, q = 10, r = 1] = [5];
console.log(p, q, r);

// Destructuring Array //

const { name, starterMenu, openingHours } = restaurant;

console.log({ name, starterMenu, openingHours });

const {
  name: restaurantname,
  starterMenu: menu,
  openingHours: hours,
} = restaurant;

console.log({ name, menu, hours });

const {
  fri: { open, close },
} = openingHours;

console.log(open, close);
*/

///////////////////////////////////////
// PALIDROME

/*
const check = function (pal) {
  let nor = pal.toLowerCase().split('');
  let a = nor.join('');
  let b = nor.reverse().join('');

  if (a === b) {
    console.log(`${pal} is Palidrome`);
  } else {
    console.log(`${pal} is not a Palidrome`);
  }
};
check('Dad');
*/

///////////////////////////////////////
// DIGITIAL CLOCk

/*

function clock() {
const hours = new Date().getHours()
const minutes = new Date().getMinutes()
const seconds = new Date().getSeconds()
console.log(`${hours}:${minutes}:${seconds}`);
}
setInterval(clock,1000)

*/
