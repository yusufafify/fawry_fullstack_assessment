"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
console.log("=== FAWRY ASSESSMENT TEST CASES ===\n");
// Test customers with different budgets
const customer1 = new interfaces_1.Customer("Youssef", 2000);
const customer2 = new interfaces_1.Customer("Ahmed", 500);
const customer3 = new interfaces_1.Customer("Sara", 100);
// Test dates
const futureDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
const pastDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // 7 days ago
// Test products with different properties
const cheese = new interfaces_1.ExpirableShippableProduct("Cheese", 200, 10, futureDate, 0.4);
const expiredCheese = new interfaces_1.ExpirableShippableProduct("Expired Cheese", 200, 10, pastDate, 0.4);
const biscuits = new interfaces_1.ExpirableShippableProduct("Biscuits", 150, 15, futureDate, 0.7);
const milk = new interfaces_1.ExpirableShippableProduct("Milk", 50, 25, futureDate, 0.2);
const heavyItem = new interfaces_1.ExpirableShippableProduct("Heavy Item", 100, 10, futureDate, 2.0);
console.log("=== TEST CASE 1: Successful Checkout ===");
const cart1 = new interfaces_1.Cart();
cart1.addItem(cheese, 3);
cart1.addItem(biscuits, 4);
const checkoutProcess1 = new interfaces_1.Checkout();
checkoutProcess1.checkout(customer1, cart1);
console.log("\n=== TEST CASE 2: Insufficient Budget ===");
const cart2 = new interfaces_1.Cart();
cart2.addItem(cheese, 4);
cart2.addItem(biscuits, 8);
const checkoutProcess2 = new interfaces_1.Checkout();
try {
    checkoutProcess2.checkout(customer2, cart2);
}
catch (error) {
    console.log(error);
}
console.log("\n=== TEST CASE 3: Expired Product (Should be filtered out) ===");
const cart3 = new interfaces_1.Cart();
cart3.addItem(cheese, 2);
cart3.addItem(expiredCheese, 3); // This should be filtered out
cart3.addItem(milk, 5);
const checkoutProcess3 = new interfaces_1.Checkout();
try {
    checkoutProcess3.checkout(customer1, cart3);
}
catch (error) {
    console.log(error);
}
console.log("\n=== TEST CASE 4: Empty Cart ===");
const cart4 = new interfaces_1.Cart();
const checkoutProcess4 = new interfaces_1.Checkout();
try {
    checkoutProcess4.checkout(customer1, cart4);
}
catch (error) {
    console.log(error);
}
console.log("\n=== TEST CASE 5: High Weight Items (Testing shipping costs) ===");
const cart5 = new interfaces_1.Cart();
cart5.addItem(heavyItem, 3);
cart5.addItem(milk, 2);
const checkoutProcess5 = new interfaces_1.Checkout();
try {
    checkoutProcess5.checkout(customer1, cart5);
}
catch (error) {
    console.log(error);
}
console.log("\n=== TEST CASE 6: Customer with Very Low Budget ===");
const cart6 = new interfaces_1.Cart();
cart6.addItem(milk, 1); // Cheapest item
const checkoutProcess6 = new interfaces_1.Checkout();
try {
    checkoutProcess6.checkout(customer3, cart6);
}
catch (error) {
    console.log(error);
}
console.log("\n=== TEST CASE 7: Mixed Valid and Invalid Items ===");
const cart7 = new interfaces_1.Cart();
cart7.addItem(cheese, 2);
cart7.addItem(expiredCheese, 2); // Should be filtered
cart7.addItem(biscuits, 1);
cart7.addItem(milk, 3);
const checkoutProcess7 = new interfaces_1.Checkout();
try {
    checkoutProcess7.checkout(customer2, cart7);
}
catch (error) {
    console.log(error);
}
console.log("\n=== TEST CASE 8: Large Quantity Test ===");
const cart8 = new interfaces_1.Cart();
cart8.addItem(milk, 15); // Testing with larger quantities
const checkoutProcess8 = new interfaces_1.Checkout();
try {
    checkoutProcess8.checkout(customer1, cart8);
}
catch (error) {
    console.log(error);
}
console.log("\n=== All test cases completed! ===");
