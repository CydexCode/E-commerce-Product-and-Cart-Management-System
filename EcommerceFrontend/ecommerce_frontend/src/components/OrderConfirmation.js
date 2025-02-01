import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { placeOrder } from '../redux/actions';

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      return;
    }

    const orderData = {
      items: cartItems,
      totalAmount,
      orderDate: new Date().toISOString()
    };

    dispatch(placeOrder(orderData));
    setOrderPlaced(true);
    
    // Navigate to home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="order-success">
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your purchase.</p>
        <p>You will be redirected to the home page in a few seconds...</p>
      </div>
    );
  }

  return (
    <div className="order-container">
      <h2>Order Confirmation</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button onClick={() => navigate('/')} className="continue-shopping-btn">
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <h3>{item.productName}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price per item: ${item.price}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))}
          <div className="order-summary">
            <h3>Total Amount: ${totalAmount}</h3>
            <button 
              onClick={handlePlaceOrder}
              className="place-order-btn"
              disabled={cartItems.length === 0}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderConfirmation;