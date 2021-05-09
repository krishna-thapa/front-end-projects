const anchor: HTMLAnchorElement | null = document.querySelector('a');

// Can add ? to make it optional as it can have null
console.log(anchor?.href);

// anchor can either be element or null
// Add ! at the end to avoid null when you are sure 
// that it will have HTML DOM element value
const anchorWithValue = document.querySelector('a')!;
console.log(anchorWithValue.href);

// querySelector can infer the type depend on html tag
// const form: HTMLFormElement = document.querySelector('form')!;

// While using class name, use explicity type definition 
const form: HTMLFormElement = document.querySelector('.new-item-form') as HTMLFormElement

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
});

// Classes in Typescript
class Invoice {
  readonly client: string; // Cannot have setter
  private details: string; // Cannot access outside the class
  public amount: number; // default 

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  // method for this class
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`
  }
}

// Instantiate the class
const invOne = new Invoice('mario', 'work on mario website', 300);
const invTwo = new Invoice('luigi', 'work on luigi website', 400);

// Create an array for objects of Invoice class
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  // Cannot assess inv.details (its private)
  console.log(inv.client, inv.amount, inv.format());
})

// Better way to declare class with access modifier in constructor
class InvoiceBetter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) { }

  // method for this class
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`
  }
}

// Interface
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'mario',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spend ', amount);
    return amount;
  }
}

const greetPerson = (person: IsPerson) => {
  console.log('hello', person.name);
}
greetPerson(me)