import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import ProductList from '../../components/ProductList';

const mockStore = configureStore([]);

describe('ProductList Component', () => {
  let store;

  const initialState = {
    products: [
      { id: 1, name: 'Test Product', price: 10, description: 'Test Description', quantityInStock: 5 },
      { id: 2, name: 'Another Product', price: 20, description: 'Another Description', quantityInStock: 3 }
    ]
  };

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  test('renders product list correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Another Product')).toBeInTheDocument();
  });

  test('handles adding product to cart', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      </Provider>
    );

    const addToCartButtons = screen.getAllByText('Add to Cart');
    fireEvent.click(addToCartButtons[0]);

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'ADD_TO_CART',
        payload: expect.objectContaining({
          productId: 1,
          productName: 'Test Product',
          price: 10,
          quantity: 1
        })
      })
    );
  });

  test('shows success message after adding to cart', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      </Provider>
    );

    const addToCartButtons = screen.getAllByText('Add to Cart');
    fireEvent.click(addToCartButtons[0]);

    expect(screen.getByText('Test Product added to cart successfully!')).toBeInTheDocument();
  });
});