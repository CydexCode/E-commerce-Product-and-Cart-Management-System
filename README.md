# Product and Cart Management System

A modern shopping cart application built with React, Redux Saga, and Material UI. Features include product listing, cart management, and order processing with a clean, responsive UI.

Demo : 

**User Guid:** [[https://github.com/yourusername/react-shopping-cart](https://github.com/CydexCode/E-commerce-Product-and-Cart-Management-System)]


## Features

🛍️ Product listing with dynamic updates  
🛒 Shopping cart with quantity management  
✅ Order confirmation flow  
💻 Responsive design for all devices  
🎯 State management with Redux & Redux Saga  
🎨 Material UI icons and components  
✨ Clean and intuitive user interface  
🧪 Comprehensive test coverage  

---

## Installation

### Clone the repository:
```bash
git clone https://github.com/CydexCode/E-commerce-Product-and-Cart-Management-System.git
cd react-shopping-cart
```

### Install dependencies:
```bash
npm install
```

### Start the development server:
```bash
npm start
```

### Start the backend API (requires separate setup):
```bash
# Follow backend setup instructions in backend/README.md
```

---

## Required Dependencies

```json
{
  "dependencies": {
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "@mui/icons-material": "^5.11.0",
    "@mui/material": "^5.11.0",
    "axios": "^1.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.4.5",
    "redux": "^4.2.0",
    "redux-saga": "^1.2.2"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^14.4.3",
    "jest": "^29.3.1",
    "redux-mock-store": "^1.5.4",
    "redux-saga-test-plan": "^4.0.6"
  }
}
```

---

## Project Structure

```bash
src/
├── components/
│   ├── Cart.js
│   ├── OrderConfirmation.js
│   └── ProductList.js
├── redux/
│   ├── actions.js
│   ├── reducers.js
│   ├── sagas.js
│   └── store.js
├── api/
│   └── index.js
├── __tests__/
│   ├── components/
│   └── redux/
├── styles.css
└── App.js
```

---

## Features in Detail

### Product List
- Display available products
- Add to cart functionality
- Stock status
- Price information
- Success notifications

### Shopping Cart
- Adjust item quantities
- Remove items
- Item subtotals
- Cart total
- Removal confirmation

### Order Processing
- Order summary
- Total calculation
- Order confirmation
- Success notification
- Auto-redirect after order placement

---

## API Endpoints

```javascript
const BASE_URL = 'http://localhost:5132/api';

// Available endpoints:
GET    /products               // Fetch all products
GET    /cart                   // Get cart items
POST   /cart                   // Add item to cart
PUT    /cart/update-quantity/:id  // Update item quantity
DELETE /cart/:id               // Remove item from cart
POST   /orders                 // Place order
POST   /cart/clear             // Clear cart
```

---

## Testing

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm test -- --coverage
```

---

## Styling

The application uses a combination of custom CSS and Material UI components. Custom styles are maintained in `styles.css` with specific styling for:

- Navigation bar
- Product cards
- Cart items
- Order confirmation
- Success messages
- Responsive layouts

---

## Contributing

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit changes:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Push to branch:
   ```bash
   git push origin feature/my-feature
   ```
5. Submit a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

## Acknowledgments

- **Material UI** for the component library  
- **Redux team** for state management tools  
- **React Testing Library** for testing utilities  
- **All contributors** who have helped improve this project  

---

## Contact

**Project Link:** [[https://github.com/yourusername/react-shopping-cart](https://github.com/CydexCode/E-commerce-Product-and-Cart-Management-System)]

⭐ Remember to **star** this repository if you found it helpful!
