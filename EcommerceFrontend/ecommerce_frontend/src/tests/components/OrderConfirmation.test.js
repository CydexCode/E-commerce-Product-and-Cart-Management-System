import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import OrderConfirmation from '../../components/OrderConfirmation';

const mockStore = configureStore([]);
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('OrderConfirmation Component', () => {
  let store;

  const initialState = {
    cart: [
      { id: 1, productName: 'Test Product', price: 10, quantity: 2 }
    ]
  };

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders order details correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <OrderConfirmation />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Total Amount: $20')).toBeInTheDocument();
  });

  test('handles order placement', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <OrderConfirmation />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('Place Order'));

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'PLACE_ORDER',
        payload: expect.objectContaining({
          items: initialState.cart,
          totalAmount: 20
        })
      })
    );
  });

  test('shows success message and redirects after order placement', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <OrderConfirmation />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('Place Order'));

    expect(screen.getByText('Order Placed Successfully!')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});