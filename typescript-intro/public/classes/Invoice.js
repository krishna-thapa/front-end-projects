export class InvoiceApp {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // method for this class, getting from an interface
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
