import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts, addToCart } from '../redux/actions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.products);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    const cartItem = {
      id: 0,
      productId: product.id,
      productName: product.name,
      price: product.price,
      quantity: 1
    };
    dispatch(addToCart(cartItem));
    
    // Show success message
    setSuccessMessage(`${product.name} added to cart successfully!`);
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Available Products</h2>
      <button onClick={() => navigate('/cart')} className="cart-btn">
      <ShoppingCartIcon /> 
      </button>

      {/* Success Message */}
      {successMessage && (
        <div className="success-message">
          <span>{successMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold">Price: ${product.price}</p>
            <p className="text-sm text-gray-500">Stock: {product.quantityInStock}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="add-to-cart-btn"
            >
              Add to Cart  
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;