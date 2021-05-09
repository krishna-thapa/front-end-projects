import { HasFormatter } from '../interfaces/HasFormatter.js'

export class InvoiceApp implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) { }

  // method for this class, getting from an interface
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`
  }
}