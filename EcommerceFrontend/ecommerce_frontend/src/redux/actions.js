export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_CART = 'FETCH_CART';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const PLACE_ORDER = 'PLACE_ORDER';
export const CLEAR_CART = 'CLEAR_CART';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';

export const fetchProducts = () => ({ type: FETCH_PRODUCTS });
export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});
export const fetchCart = () => ({ type: FETCH_CART });
export const fetchCartSuccess = (cartItems) => ({
  type: FETCH_CART_SUCCESS,
  payload: cartItems
});
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});
export const updateCartQuantity = (cartItemId, newQuantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { cartItemId, newQuantity }
});
export const removeFromCart = (cartItemId) => ({
  type: REMOVE_FROM_CART,
  payload: cartItemId
});
export const placeOrder = (orderData) => ({
  type: PLACE_ORDER,
  payload: orderData
});
export const clearCart = () => ({
  type: CLEAR_CART
});
export const placeOrderSuccess = () => ({
  type: PLACE_ORDER_SUCCESS
});