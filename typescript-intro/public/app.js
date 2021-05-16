import { InvoiceApp } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// // Since docOne and docTwo are type of HasFormatter, any class that implements
// // HasFormatter can be store as value for those variables
// docOne = new InvoiceApp('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 300);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// While using class name, use explicity type definition 
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Using tuples to declare the type of an array
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new InvoiceApp(...values); // values should be the tuple or else won't work in normal array
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'start');
});
