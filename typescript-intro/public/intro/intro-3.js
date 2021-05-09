"use strict";
const anchor = document.querySelector('a');
// Can add ? to make it optional as it can have null
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
// anchor can either be element or null
// Add ! at the end to avoid null when you are sure 
// that it will have HTML DOM element value
const anchorWithValue = document.querySelector('a');
console.log(anchorWithValue.href);
// querySelector can infer the type depend on html tag
// const form: HTMLFormElement = document.querySelector('form')!;
// While using class name, use explicity type definition 
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// Classes in Typescript
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // method for this class
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
// Instantiate the class
const invOne = new Invoice('mario', 'work on mario website', 300);
const invTwo = new Invoice('luigi', 'work on luigi website', 400);
// Create an array for objects of Invoice class
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    // Cannot assess inv.details (its private)
    console.log(inv.client, inv.amount, inv.format());
});
// Better way to declare class with access modifier in constructor
class InvoiceBetter {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // method for this class
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const me = {
    name: 'mario',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spend ', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
