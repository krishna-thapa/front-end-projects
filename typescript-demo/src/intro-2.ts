// Function basics

let greet: Function

greet = () => {
  console.log(' hello world');
}

// Only defined of type function
// greet = 'hello';

// ? makes optional type
// If no return then the type is void type
const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
  // c becomes undefined if not passed
}

add(5, 10); // don't have to pass c as it is optional

// Can pass parameter with default values, no need to make them as optional
const subtract = (a: number = 10, b: number = 5) => {
  return a - b;
}

// TS infer the return type of the function
let result = subtract  // return type pof number

// Cannot pass the other type 
// result = ''


// Type aliases
type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`)
}

type objWithName = { name: string, uid: StringOrNum };
const greetHello = (user: objWithName) => {
  console.log(`${user.name} says hello`)
}

const greetWorld = (user: objWithName) => {
  console.log(`${user.name} says world`)
}

// Function signatures
let greetVoid: (a: number, b: number) => void;

// Using the function signature to create a custom function
greetVoid = (first: number, second: number) => {
  console.log(first + second)
}

// Function signature with return type
let calc: (a: number, b: number, c: string) => number;
calc = (first: number, second: number, operator: string) => {
  if (operator === 'add') {
    return first + second;
  } else {
    return first - second;  // IMP: have to have else to return num
  }
}

// function with an object parameter
let logPerson: (obj: { name: string, age: number }) => void
type person = { name: string, age: number };

logPerson = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`)
}