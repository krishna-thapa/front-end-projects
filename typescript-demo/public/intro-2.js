"use strict";
// Function basics
var greet;
greet = function () {
    console.log(' hello world');
};
// Only defined of type function
// greet = 'hello';
// ? makes optional type
// If no return then the type is void type
var add = function (a, b, c) {
    console.log(a + b);
    // c becomes undefined if not passed
};
add(5, 10); // don't have to pass c as it is optional
// Can pass parameter with default values, no need to make them as optional
var subtract = function (a, b) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 5; }
    return a - b;
};
// TS infer the return type of the function
var result = subtract; // return type pof number
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greetHello = function (user) {
    console.log(user.name + " says hello");
};
var greetWorld = function (user) {
    console.log(user.name + " says world");
};
// Function signatures
var greetVoid;
// Using the function signature to create a custom function
greetVoid = function (first, second) {
    console.log(first + second);
};
// Function signature with return type
var calc;
calc = function (first, second, operator) {
    if (operator === 'add') {
        return first + second;
    }
    else {
        return first - second; // IMP: have to have else to return num
    }
};
// function with an object parameter
var logPerson;
logPerson = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
