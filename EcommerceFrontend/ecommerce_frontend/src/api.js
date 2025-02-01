import axios from 'axios';

const BASE_URL = 'http://localhost:5132/api';

export const api = {
  getProducts: () => axios.get(`${BASE_URL}/products`),
  getCart: () => axios.get(`${BASE_URL}/cart`),
  addToCart: (cartItem) => axios.post(`${BASE_URL}/cart`, cartItem),
  updateCartQuantity: (cartItemId, newQuantity) => 
    axios.put(`${BASE_URL}/cart/update-quantity/${cartItemId}?newQuantity=${newQuantity}`),
  removeFromCart: (cartItemId) => axios.delete(`${BASE_URL}/cart/${cartItemId}`),
  placeOrder: (orderData) => axios.post(`${BASE_URL}/orders`, orderData),
  clearCart: () => axios.post(`${BASE_URL}/cart/clear`)
};