import { combineReducers } from 'redux';
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_CART_SUCCESS,
  CLEAR_CART
} from './actions';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CART_SUCCESS:
      return action.payload;
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  products: productsReducer,
  cart: cartReducer
});