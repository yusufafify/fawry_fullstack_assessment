"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = exports.ShippingService = void 0;
class ShippingService {
    ship(items) {
        if (items.length === 0)
            return;
        console.log(`** Shipment notice **`);
        let totalW = 0;
        const shipableProductsQuantities = new Map();
        items.forEach((item) => {
            if (shipableProductsQuantities.get(item.getName())) {
                shipableProductsQuantities.set(item.getName(), {
                    quantity: shipableProductsQuantities.get(item.getName()).quantity + 1,
                    weight: item.getWeight(),
                });
            }
            else {
                shipableProductsQuantities.set(item.getName(), {
                    quantity: 1,
                    weight: item.getWeight(),
                });
            }
            totalW += item.getWeight();
        });
        for (const [key, value] of shipableProductsQuantities) {
            console.log(`${value.quantity}X ${key}  ${value.weight * 1000}g`);
        }
        console.log(`Total package weight: ${totalW.toFixed(1)}kg\n`);
    }
}
exports.ShippingService = ShippingService;
class Checkout {
    checkout(customer, cart) {
        if (cart.isCartEmpty()) {
            throw new Error(`Error: Cart is empty\n`);
        }
        // 1) Validate stock & expiry
        for (const { product, quantity } of cart.getCartItems()) {
            if (this.checkForProductExpiary(product)) {
                throw new Error(`Error: ${product.getName()} is expired, please remove it from the cart\n`);
            }
            if (this.checkForProductAvailability(product, quantity)) {
                throw new Error(`Error: ${product.getName()} is out of stock during checkout\n`);
            }
        }
        // 2) Build shipping list & compute subtotal
        const toShip = [];
        let subtotal = 0;
        for (const { product, quantity } of cart.getCartItems()) {
            subtotal += product.getPrice() * quantity;
            if ("getWeight" in product) {
                for (let i = 0; i < quantity; i++) {
                    toShip.push(product);
                }
            }
        }
        // 3) Shipping fee @ $10 per kg
        const RATE_PER_KG = 10;
        const totalWeight = toShip.reduce((sum, it) => sum + it.getWeight(), 0);
        const shippingFee = totalWeight * RATE_PER_KG;
        const total = subtotal + shippingFee;
        if (customer.getBalance() < total) {
            throw new Error(`Error: Insufficient balance\n`);
        }
        // 4) All good → charge & reduce stock
        customer.deduct(total);
        cart
            .getCartItems()
            .forEach(({ product, quantity }) => product.reduceQuantityInStock(quantity));
        // 5) Ship & print receipt
        new ShippingService().ship(toShip);
        console.log(`** Checkout receipt **`);
        cart.getCartItems().forEach(({ product, quantity }) => {
            console.log(`${quantity}x ${product.getName()}   ${product.getPrice()}`);
        });
        console.log(`-------------------------`);
        console.log(`Subtotal: ${subtotal}`);
        console.log(`Shipping: ${shippingFee}`);
        console.log(`Amount: ${total}`);
        console.log(`New balance: ${customer.getBalance()}\n`);
    }
    checkForProductAvailability(product, quantity) {
        return quantity > product.getQuantityInStock();
    }
    checkForProductExpiary(product) {
        return "isExpired" in product && product.isExpired();
    }
}
exports.Checkout = Checkout;
