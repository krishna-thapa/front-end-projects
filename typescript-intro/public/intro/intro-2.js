"use strict";
// Function basics
let greet;
greet = () => {
    console.log(' hello world');
};
// Only defined of type function
// greet = 'hello';
// ? makes optional type
// If no return then the type is void type
const add = (a, b, c) => {
    console.log(a + b);
    // c becomes undefined if not passed
};
add(5, 10); // don't have to pass c as it is optional
// Can pass parameter with default values, no need to make them as optional
const subtract = (a = 10, b = 5) => {
    return a - b;
};
// TS infer the return type of the function
let result = subtract; // return type pof number
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetHello = (user) => {
    console.log(`${user.name} says hello`);
};
const greetWorld = (user) => {
    console.log(`${user.name} says world`);
};
// Function signatures
let greetVoid;
// Using the function signature to create a custom function
greetVoid = (first, second) => {
    console.log(first + second);
};
// Function signature with return type
let calc;
calc = (first, second, operator) => {
    if (operator === 'add') {
        return first + second;
    }
    else {
        return first - second; // IMP: have to have else to return num
    }
};
// function with an object parameter
let logPerson;
logPerson = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
