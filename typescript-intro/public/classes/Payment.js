export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // method for this class, getting from an interface
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
