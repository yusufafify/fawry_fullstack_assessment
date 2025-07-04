"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price, // per unit
    stock // available quantity
    ) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    reduceStock(qty) {
        this.stock -= qty;
    }
}
exports.Product = Product;
