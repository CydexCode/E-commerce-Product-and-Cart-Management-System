import createSagaMiddleware from 'redux-saga';
import { call, put, takeLatest, all } from '@redux-saga/core/effects';
import { api } from '../api';
import {
    FETCH_PRODUCTS,
    FETCH_CART,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    PLACE_ORDER,
    fetchProductsSuccess,
    fetchCartSuccess,
    fetchCart,
    placeOrderSuccess,
    clearCart
  } from './actions';

function* fetchProductsSaga() {
  try {
    const response = yield call(api.getProducts);
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function* fetchCartSaga() {
  try {
    const response = yield call(api.getCart);
    yield put(fetchCartSuccess(response.data));
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

function* addToCartSaga(action) {
  try {
    yield call(api.addToCart, action.payload);
    yield put(fetchCart());
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

function* updateCartQuantitySaga(action) {
  try {
    const { cartItemId, newQuantity } = action.payload;
    yield call(api.updateCartQuantity, cartItemId, newQuantity);
    yield put(fetchCart());
  } catch (error) {
    console.error('Error updating cart quantity:', error);
  }
}

function* removeFromCartSaga(action) {
  try {
    yield call(api.removeFromCart, action.payload);
    yield put(fetchCart());
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}

function* placeOrderSaga(action) {
    try {
      yield call(api.placeOrder, action.payload);
      yield call(api.clearCart);
      yield put(placeOrderSuccess());
      yield put(clearCart());
    } catch (error) {
      console.error('Error placing order:', error);
    }
  }

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_PRODUCTS, fetchProductsSaga),
    takeLatest(FETCH_CART, fetchCartSaga),
    takeLatest(ADD_TO_CART, addToCartSaga),
    takeLatest(UPDATE_CART_QUANTITY, updateCartQuantitySaga),
    takeLatest(PLACE_ORDER, placeOrderSaga),
    takeLatest(REMOVE_FROM_CART, removeFromCartSaga)
  ]);
}

