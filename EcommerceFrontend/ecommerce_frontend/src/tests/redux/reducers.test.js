import reducer from '../../redux/reducers';
import * as actions from '../../redux/actions';

describe('Reducers', () => {
  const initialState = {
    products: [],
    cart: []
  };

  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('handles FETCH_PRODUCTS_SUCCESS', () => {
    const products = [
      { id: 1, name: 'Test Product' }
    ];

    const newState = reducer(initialState, {
      type: actions.FETCH_PRODUCTS_SUCCESS,
      payload: products
    });

    expect(newState.products).toEqual(products);
  });

  test('handles FETCH_CART_SUCCESS', () => {
    const cartItems = [
      { id: 1, productName: 'Test Product', quantity: 2 }
    ];

    const newState = reducer(initialState, {
      type: actions.FETCH_CART_SUCCESS,
      payload: cartItems
    });

    expect(newState.cart).toEqual(cartItems);
  });

  test('handles CLEAR_CART', () => {
    const stateWithCart = {
      ...initialState,
      cart: [{ id: 1, productName: 'Test Product', quantity: 2 }]
    };

    const newState = reducer(stateWithCart, {
      type: actions.CLEAR_CART
    });

    expect(newState.cart).toEqual([]);
  });
});
