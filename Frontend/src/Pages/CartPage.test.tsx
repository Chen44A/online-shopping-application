import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CartPage from './CartPage';

beforeEach(() => {
  render(
    <MemoryRouter>
      <CartPage />
    </MemoryRouter>
  );
});

describe('Cart page Component', () => {
  it('should have a heading with the text Our products', () => {
    const title = screen.getByRole('heading', { name: /kassa$/i });
    expect(title).toBeInTheDocument();
  });

  describe('Cart page REST API call', () => {
    it('It should have a total price', async () => {
      const totalPrice = await screen.findByText(/Summa/i);
      expect(totalPrice).toBeInTheDocument();
    });
  });
});
