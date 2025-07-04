"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    getName() {
        return this.name;
    }
    getBalance() {
        return this.balance;
    }
    deduct(amount) {
        this.balance -= amount;
    }
}
exports.Customer = Customer;
