import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Cart from '../../components/Cart';

const mockStore = configureStore([]);

describe('Cart Component', () => {
  let store;

  const initialState = {
    cart: [
      { id: 1, productName: 'Test Product', price: 10, quantity: 2 },
      { id: 2, productName: 'Another Product', price: 20, quantity: 1 }
    ]
  };

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  test('renders cart items correctly', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Another Product')).toBeInTheDocument();
    expect(screen.getByText('Total Amount: $40')).toBeInTheDocument();
  });

  test('handles quantity updates', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const increaseButtons = screen.getAllByText('+');
    fireEvent.click(increaseButtons[0]);

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'UPDATE_CART_QUANTITY',
        payload: { cartItemId: 1, newQuantity: 3 }
      })
    );
  });

  test('shows empty cart message when no items', () => {
    store = mockStore({ cart: [] });
    
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
  });

  test('handles item removal confirmation', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const removeButtons = screen.getAllByText('Remove');
    fireEvent.click(removeButtons[0]);

    expect(screen.getByText('Are you sure you want to remove Test Product?')).toBeInTheDocument();

    const confirmButton = screen.getByText('Yes');
    fireEvent.click(confirmButton);

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'REMOVE_FROM_CART',
        payload: 1
      })
    );
  });
});