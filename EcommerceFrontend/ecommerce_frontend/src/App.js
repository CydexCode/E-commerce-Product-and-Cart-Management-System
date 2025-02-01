import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation';
import './styles.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <nav>
            <Link to="/" className="nav-link">
              <HomeIcon /> Home
            </Link>
            <Link to="/cart" className="nav-link">
              <ShoppingCartIcon /> Cart
            </Link>
            <Link to="/order" className="nav-link">
              <ReceiptIcon /> Order
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<OrderConfirmation />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;