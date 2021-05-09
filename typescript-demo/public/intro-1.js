"use strict";
var character = 'mario';
var age = 30;
var isBlackBelt = false;
// You cannot assign different type to String type
// character = 20;
// age = 'yoshi';
// Assign the type for the function parameter
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(1));
// Arrays
var names = ['luigi', 'mario', 'yoshi'];
// Cannot assign number in array of string
// names.push(2);
names[0] = 'peach';
// Mixed array can have any types
var mixed = ['ken', 4, 9, false, 'mario'];
mixed.push('ryu');
mixed.push(45);
mixed[0] = false;
// objects
var ninja = {
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
var nameString;
var ageNumber;
var isLoggedIn;
nameString = 'mario';
// with an empty array, you can use push methods
var namesArray = [];
// Mixed array: Union type
var mixedArray = [];
mixedArray.push(23);
mixedArray.push('mario');
// Cannot push the boolean
// mixedArray.push(true);
var mixedVar;
mixedVar = 123;
mixedVar = 'mario';
// In object
var ninjaOne;
// It has to be object type
// ninjaOne = 'mario';
ninjaOne = { name: 'mario' };
// Create a class
var ninjaTwo;
// create an object of a class
ninjaTwo = {
    name: 'yoshi',
    age: 34,
    isMaster: false
};
// Any type: be careful while using any type
var anyAge = 25;
anyAge = true;
anyAge = 'Twenty';
var anyArray = [];
anyArray.push(true);
anyArray.push('mario');
anyArray.push(123);
var anyObject;
anyObject = {
    name: 123,
    age: 'Twenty'
};
