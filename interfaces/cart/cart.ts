import { Product } from "../product/product";
import type { CartItem } from "./types";

export class Cart {
  private cartItems: CartItem[] = [];

  addItem(product: Product, qty: number): void {
    if (qty <= 0) {
      throw new Error(
        `Cannot add non‐positive quantity for ${product.getName()}`
      );
    }

    if (qty > product.getQuantityInStock()) {
      throw new Error(
        `Cannot add ${qty} of ${product.getName()}: only ${product.getQuantityInStock()} in stock`
      );
    }

    const existing = this.cartItems.find((ci) => ci.product === product);
    if (existing) {
      existing.quantity += qty;
    } else {
      this.cartItems.push({ product, quantity: qty });
    }
  }

  getCartItems(): readonly CartItem[] {
    return this.cartItems;
  }

  isCartEmpty(): boolean {
    return this.cartItems.length === 0;
  }
}
