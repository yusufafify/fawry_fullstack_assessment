import { Expirable, Shippable } from "./types";

//Abstract Base Class for shared Product methods and variables
export abstract class Product {
  constructor(
    protected name: string,
    protected price: number, // per unit
    protected quantity: number // available quantity
  ) {}

  reduceQuantityInStock(qty: number) {
    this.quantity -= qty;
  }

  getName(): string {
    return this.name;
  }
  getPrice(): number {
    return this.price;
  }

  getQuantityInStock(): number {
    return this.quantity;
  }
}

export class ExpirableShippableProduct
  extends Product
  implements Expirable, Shippable
{
  constructor(
    name: string,
    price: number,
    quantity: number,
    private expiry: Date,
    private weightKg: number
  ) {
    super(name, price, quantity);
  }

  // Expirable
  isExpired(): boolean {
    return new Date() > this.expiry;
  }

  getWeight(): number {
    return this.weightKg;
  }
}

export class ShippableProducts extends Product implements Shippable {
  constructor(
    name: string,
    price: number,
    quantity: number,
    private weightKg: number
  ) {
    super(name, price, quantity);
  }

  getWeight(): number {
    return this.weightKg;
  }
}

export class NormalProduct extends Product {}
