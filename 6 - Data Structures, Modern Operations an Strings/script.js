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
  dish : function(ing1,ing2,ing3){
    console.log(`Here is Your Delicious Curd Rice with ${ing1}, ${ing2}, ${ing3}`);
  }
};

//

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

// Normally We did like this..
restaurant.dish(ingredients[0],ingredients[1],ingredients[2])

// But, Now we know about Spread Operators...
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
