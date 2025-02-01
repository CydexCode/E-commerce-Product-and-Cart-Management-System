import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, updateCartQuantity, removeFromCart } from '../redux/actions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const [itemToDelete, setItemToDelete] = useState(null);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleUpdateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateCartQuantity(cartItemId, newQuantity));
  };

  const initiateRemoveItem = (item) => {
    setItemToDelete(item);
  };

  const confirmRemoveItem = () => {
    if (itemToDelete) {
      dispatch(removeFromCart(itemToDelete.id));
      setItemToDelete(null);
    }
  };

  const cancelRemoveItem = () => {
    setItemToDelete(null);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.productName}</h3>
              <p>Price: ${item.price}</p>
              <div className="quantity-control">
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                <input type="text" value={item.quantity} readOnly />
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <p>Total: ${item.price * item.quantity}</p>

              {itemToDelete && itemToDelete.id === item.id ? (
                <div className="remove-confirmation">
                  <p>Are you sure you want to remove {item.productName}?</p>
                  <div className="confirmation-buttons">
                    <button onClick={confirmRemoveItem} className="yes-btn">Yes</button>
                    <button onClick={cancelRemoveItem} className="no-btn">No</button>
                  </div>
                </div>
              ) : (
                <button className="remove-btn" onClick={() => initiateRemoveItem(item)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <h3>Total Amount: ${totalAmount}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
