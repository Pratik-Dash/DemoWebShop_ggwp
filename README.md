# TypeScript Automation Framework with Playwright to test DemoWebShop App

## 📌 Overview

This repository contains test automation framework using Playwright for an eCommerce shopping application. The framework automates key user workflows such as user registration, login, product search, cart management, checkout, and order confirmation.

## 🚀 Key Technologies
- **Playwright**: Reliable end-to-end testing
- **TypeScript**: Type-safe test development
- **Page Object Model**: Maintainable test structure
- **HTML Reports**: Detailed test execution insights

## 📂 Project Structure
```bash
project-root/
├── pages/ # Page Object classes
│ ├── checkout.page.ts
│ ├── registration.page.ts
│ └── cart.page.ts
│ └── common.ts
├── tests/ # Test specifications
│ ├── register.spec.ts
│ └── checkout.spec.ts
├── playwright.config.ts # Playwright configuration
└── package.json # Project dependencies
```

## ⚙️ Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/Pratik-Dash/DemoWebShop_ggwp.git
   cd DemoWebShop_ggwp
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Install Playwright Browsers**
   ```bash
   npm playwright install
   ```
## 🧪 Running Tests

**Run All Tests**
```bash
npx playwright test
```

**Run Specific Test**
```bash
npx playwright test tests/checkout.spec.ts
```

**Run With UI Mode**
```bash
npx playwright test --ui
```

## 🧩 Test Scenarios covered

**✅ User Registration and login**  
- Register a new user successfully  
- Verify error messages for invalid inputs  


**✅ Product Search**  
- Search for a product and validate search results  

**✅ Shopping Cart**  
- Add and remove items from the cart  

**✅ Checkout**  
- Complete an order successfully  

**✅ Order Confirmation**  
- Validate order confirmation message  
