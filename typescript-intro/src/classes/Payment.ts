import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ) { }

  // method for this class, getting from an interface
  format() {
    return `${this.recipient} is owed £${this.amount} for ${this.details}`
  }
}