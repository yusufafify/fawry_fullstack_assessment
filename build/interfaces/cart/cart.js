"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    constructor() {
        this.cartItems = [];
    }
    addItem(product, qty) {
        if (qty <= 0) {
            throw new Error(`Cannot add non‐positive quantity for ${product.getName()}`);
        }
        if (qty > product.getQuantityInStock()) {
            throw new Error(`Cannot add ${qty} of ${product.getName()}: only ${product.getQuantityInStock()} in stock`);
        }
        const existing = this.cartItems.find((ci) => ci.product === product);
        if (existing) {
            existing.quantity += qty;
        }
        else {
            this.cartItems.push({ product, quantity: qty });
        }
    }
    getCartItems() {
        return this.cartItems;
    }
    isCartEmpty() {
        return this.cartItems.length === 0;
    }
}
exports.Cart = Cart;
