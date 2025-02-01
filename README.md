# Product and Cart Management System

A modern Product and Cart Management System built with .NET , React, Redux Saga, and Material UI. Features include product listing, cart management, and order processing with a clean, responsive UI.

Demo : 

https://github.com/user-attachments/assets/3515ff38-fde8-4e46-a596-a8c30dd215db


**User Guid:** [[https://github.com/CydexCode/E-commerce-Product-and-Cart-Management-System/wiki/User-Guide](https://github.com/CydexCode/E-commerce-Product-and-Cart-Management-System/wiki/User-Guide)]


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
cd ecommerce_frontend
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
├── __tests__/
│   ├── components/
│   └── redux/
├── App.js
├── index.js
├── api.js
├── styles.css
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

## Known Issues

- Product images are not being fetched from the backend data entities.
- Cart state persistence is not implemented; refreshing the page clears the cart.

---

## Limitations

- After placing an order, the user is automatically redirected to the home page without an option to review the order details.
- No user authentication is implemented; all users share the same session state.
- The application currently does not support multiple currencies or localization.

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
