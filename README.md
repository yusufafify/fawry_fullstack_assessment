# Fawry Assessment - E-commerce Checkout System

## 📋 Project Overview

This is a TypeScript-based e-commerce checkout system developed as part of the Fawry assessment. The system demonstrates object-oriented programming principles with features like product management, shopping cart functionality, customer handling, and checkout processing with shipping calculations.

## 🎯 Project Purpose

The system simulates a complete e-commerce checkout workflow including:
- Product catalog management with different product types
- Shopping cart operations (add/remove items)
- Customer management with balance tracking
- Checkout process with validation and payment
- Shipping calculations based on product weight
- Product expiry validation
- Inventory management

## ✨ Features

### Core Features
- **Product Management**: Support for different product types (Normal, Expirable, Shippable)
- **Shopping Cart**: Add/remove items with quantity validation
- **Customer System**: Customer profiles with balance management
- **Checkout Process**: Complete order processing with validation
- **Shipping Service**: Weight-based shipping calculations
- **Inventory Control**: Stock quantity management and validation
- **Expiry Validation**: Automatic filtering of expired products

### Product Types
1. **Normal Products**: Basic products with name, price, and quantity
2. **Expirable Products**: Products with expiration dates
3. **Shippable Products**: Products with weight for shipping calculations
4. **Expirable & Shippable Products**: Combined features

## 🗂️ Project Structure

```
fawry_assessment/
├── index.ts                      # Main entry point with test 
├── package.json                  # Project dependencies and 
├── tsconfig.json                 # TypeScript configuration
├── README.md                     # Project documentation
├── build/                        # Compiled JavaScript files
│   ├── index.js
│   └── interfaces/
│       ├── index.js
│       ├── cart/
│       │   ├── cart.js
│       │   └── types.js
│       ├── checkout/
│       │   └── checkout.js
│       ├── customer/
│       │   └── customer.js
│       └── product/
│           ├── product.js
│           └── types.js
└── interfaces/                   # TypeScript source files
    ├── index.ts                  # Main exports
    ├── cart/
    │   ├── cart.ts              # Shopping cart implementation
    │   └── types.ts             # Cart-related type definitions
    ├── checkout/
    │   └── checkout.ts          # Checkout and shipping logic
    ├── customer/
    │   └── customer.ts          # Customer management
    └── product/
        ├── product.ts           # Product classes and 
        └── types.ts             # Product-related interfaces
```

## 🔧 Technical Architecture

### Class Hierarchy
```
Product (Abstract Base Class)
├── NormalProduct
├── ExpirableShippableProduct (implements Expirable, Shippable)
└── ShippableProducts (implements Shippable)
```

### Key Components

#### 1. Product System (`interfaces/product/`)
- **Product** (Abstract): Base class with common properties (name, price, quantity)
- **ExpirableShippableProduct**: Products with expiration dates and shipping weight
- **ShippableProducts**: Products that can be shipped (have weight)
- **NormalProduct**: Basic products without special properties

#### 2. Shopping Cart (`interfaces/cart/`)
- **Cart**: Manages cart items with quantity validation
- **CartItem**: Type definition for cart items

#### 3. Customer Management (`interfaces/customer/`)
- **Customer**: Handles customer information and balance management

#### 4. Checkout System (`interfaces/checkout/`)
- **Checkout**: Main checkout process with validation
- **ShippingService**: Handles shipping calculations and notifications

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yusufafify/fawry_fullstack_assessment.git
   cd fawry_fullstack_assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Application

#### Option 1: Using npm scripts (Recommended)
```bash
# Build and run the application
npm run test

# Or build and start separately
npm run build
npm start
```

#### Option 2: Manual compilation
```bash
# Compile TypeScript to JavaScript
npx tsc

# Run the compiled JavaScript
node build/index.js
```

### Available Scripts

- `npm run build` - Compile TypeScript files to JavaScript
- `npm start` - Run the compiled application
- `npm run test` - Build and run the application (same as build + start)

## 📊 Test Cases

The application includes comprehensive test cases that demonstrate various scenarios:

1. **Successful Checkout**: Normal checkout with sufficient balance
2. **Insufficient Budget**: Checkout failure due to low customer balance
3. **Expired Product Handling**: Automatic filtering of expired items
4. **Empty Cart**: Error handling for empty cart scenarios
5. **High Weight Items**: Shipping cost calculations for heavy items
6. **Low Budget Customer**: Testing with customers having minimal balance
7. **Mixed Valid/Invalid Items**: Handling carts with both valid and expired items
8. **Large Quantity Orders**: Testing with bulk quantities

## 💡 Business Rules

### Pricing & Shipping
- **Shipping Rate**: $10 per kilogram
- **Stock Validation**: Items must be in stock before checkout
- **Expiry Validation**: Expired products are automatically filtered out
- **Balance Validation**: Customer must have sufficient balance for total amount

### Checkout Process
1. Validate cart is not empty
2. Check product availability and expiry
3. Calculate subtotal and shipping costs
4. Validate customer balance
5. Process payment and update inventory
6. Generate shipping notification and receipt

## 🛠️ Development

### Code Style
- Written in TypeScript with strict type checking
- Object-oriented design with inheritance and interfaces
- Modular architecture with clear separation of concerns
- Comprehensive error handling and validation

### Key Design Patterns
- **Abstract Factory**: Product class hierarchy
- **Strategy Pattern**: Different product types with varying behaviors
- **Composition**: Cart containing multiple cart items
- **Service Pattern**: Separate shipping service

## 📈 Example Usage

```typescript
// Create customer
const customer = new Customer("Youssef Ahmed", 1000);

// Create products
const cheese = new ExpirableShippableProduct("Cheese", 200, 10, futureDate, 0.4);
const milk = new ExpirableShippableProduct("Milk", 50, 25, futureDate, 0.2);

// Create cart and add items
const cart = new Cart();
cart.addItem(cheese, 2);
cart.addItem(milk, 3);

// Process checkout
const checkout = new Checkout();
checkout.checkout(customer, cart);
```

## 🔍 Sample Output

```
** Shipment notice **
2X Cheese  400g
3X Milk  200g
Total package weight: 1.2kg

** Checkout receipt **
2x Cheese   200
3x Milk   50
-------------------------
Subtotal: 550
Shipping: 12
Amount: 562
New balance: 438
```




**Note**: This project demonstrates TypeScript OOP principles, design patterns, and e-commerce domain modeling for Fawry assessment purposes.
