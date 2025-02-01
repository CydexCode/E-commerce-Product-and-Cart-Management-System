import { call, put } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { api } from '../../api';
import { fetchProductsSaga, fetchCartSaga, placeOrderSaga } from '../../redux/sagas';
import * as actions from '../../redux/actions';

describe('Sagas', () => {
  test('fetchProducts saga success', () => {
    const products = [{ id: 1, name: 'Test Product' }];

    return expectSaga(fetchProductsSaga)
      .provide([
        [call(api.getProducts), { data: products }]
      ])
      .put(actions.fetchProductsSuccess(products))
      .run();
  });

  test('fetchCart saga success', () => {
    const cartItems = [{ id: 1, productName: 'Test Product', quantity: 2 }];

    return expectSaga(fetchCartSaga)
      .provide([
        [call(api.getCart), { data: cartItems }]
      ])
      .put(actions.fetchCartSuccess(cartItems))
      .run();
  });

  test('placeOrder saga success', () => {
    const orderData = {
      items: [{ id: 1, productName: 'Test Product', quantity: 2 }],
      totalAmount: 20
    };

    return expectSaga(placeOrderSaga, { payload: orderData })
      .provide([
        [call(api.placeOrder, orderData), { data: { success: true } }],
        [call(api.clearCart), { data: { success: true } }]
      ])
      .put(actions.placeOrderSuccess())
      .put(actions.clearCart())
      .run();
  });

  test('handles API errors', () => {
    const error = new Error('API Error');

    return expectSaga(fetchProductsSaga)
      .provide([
        [matchers.call.fn(api.getProducts), throwError(error)]
      ])
      .run()
      .then(({ effects }) => {
        expect(effects.put).toBeUndefined();
      });
  });
});