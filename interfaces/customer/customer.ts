export class Customer {
  constructor(private name: string, private balance: number) {}
  getName(): string {
    return this.name;
  }

  getBalance(): number {
    return this.balance;
  }

  deduct(amount: number) {
    this.balance -= amount;
  }
}
