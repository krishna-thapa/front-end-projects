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

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new InvoiceApp(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'start');  

});
