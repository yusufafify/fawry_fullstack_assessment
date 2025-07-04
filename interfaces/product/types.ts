// Products that can expire implement this:
export interface Expirable {
  isExpired(): boolean;
}

// Products that can be shipped implement this:
export interface Shippable {
  getName(): string;
  getWeight(): number; // in kilograms
}
