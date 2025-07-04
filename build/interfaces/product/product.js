"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalProduct = exports.ShippableProducts = exports.ExpirableShippableProduct = exports.Product = void 0;
//Abstract Base Class for shared Product methods and variables
class Product {
    constructor(name, price, // per unit
    quantity // available quantity
    ) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    reduceQuantityInStock(qty) {
        this.quantity -= qty;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getQuantityInStock() {
        return this.quantity;
    }
}
exports.Product = Product;
class ExpirableShippableProduct extends Product {
    constructor(name, price, quantity, expiry, weightKg) {
        super(name, price, quantity);
        this.expiry = expiry;
        this.weightKg = weightKg;
    }
    // Expirable
    isExpired() {
        return new Date() > this.expiry;
    }
    getWeight() {
        return this.weightKg;
    }
}
exports.ExpirableShippableProduct = ExpirableShippableProduct;
class ShippableProducts extends Product {
    constructor(name, price, quantity, weightKg) {
        super(name, price, quantity);
        this.weightKg = weightKg;
    }
    getWeight() {
        return this.weightKg;
    }
}
exports.ShippableProducts = ShippableProducts;
class NormalProduct extends Product {
}
exports.NormalProduct = NormalProduct;
