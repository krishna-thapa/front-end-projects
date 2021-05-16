"use strict";
// Tuples
// In an array you can change the type of the elements even once it is 
// declared
let arr = ['ryu', 25, true];
let arr1 = ['ryu', 25, true];
arr[0] = false;
arr1[0] = false;
arr[1] = 'mario';
arr1[1] = 'mario';
arr = [true, 'mario', 25];
arr1 = [true, 'mario', 25];
// Types are fixed with tuples
let tup = ['ryu', 25, true];
// WRONG
// tup[0] = false;
// RIGHT
tup[0] = 'mario';
// WRONG
//tup[1] = 'mario';
// WRONG
// tup = [true, 'mario', 25];
let student;
student = ['yoshi', 30];
// WRONG
// student = [30, 'mario']
