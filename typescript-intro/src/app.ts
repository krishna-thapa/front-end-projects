import { InvoiceApp } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

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
const form: HTMLFormElement = document.querySelector('.new-item-form') as HTMLFormElement

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // Using tuples to declare the type of an array
  let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new InvoiceApp(...values);  // values should be the tuple or else won't work in normal array
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'start');

});
