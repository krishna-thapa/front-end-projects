"use strict";
let character = 'mario';
let age = 30;
let isBlackBelt = false;
// You cannot assign different type to String type
// character = 20;
// age = 'yoshi';
// Assign the type for the function parameter
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(1));
// Arrays
let names = ['luigi', 'mario', 'yoshi'];
// Cannot assign number in array of string
// names.push(2);
names[0] = 'peach';
// Mixed array can have any types
let mixed = ['ken', 4, 9, false, 'mario'];
mixed.push('ryu');
mixed.push(45);
mixed[0] = false;
// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30,
    isMaster: false
};
ninja.age = 40;
// isMaster has a type of boolean
// ninja.isMaster = 'hello';
// Cannot create a new additional property of an existing object
// ninja.skills = [23];
// Have to have same property of the initial created object
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 45,
    isMaster: true
};
// explicit types
let nameString;
let ageNumber;
let isLoggedIn;
nameString = 'mario';
// with an empty array, you can use push methods
let namesArray = [];
// Mixed array: Union type
let mixedArray = [];
mixedArray.push(23);
mixedArray.push('mario');
// Cannot push the boolean
// mixedArray.push(true);
let mixedVar;
mixedVar = 123;
mixedVar = 'mario';
// In object
let ninjaOne;
// It has to be object type
// ninjaOne = 'mario';
ninjaOne = { name: 'mario' };
// Create a class
let ninjaTwo;
// create an object of a class
ninjaTwo = {
    name: 'yoshi',
    age: 34,
    isMaster: false
};
// Any type: be careful while using any type
let anyAge = 25;
anyAge = true;
anyAge = 'Twenty';
let anyArray = [];
anyArray.push(true);
anyArray.push('mario');
anyArray.push(123);
let anyObject;
anyObject = {
    name: 123,
    age: 'Twenty'
};
