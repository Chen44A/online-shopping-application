import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';

beforeEach(() => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
});

describe('Navbar Component', () => {
  it('render the logo with correct text and link', () => {
    const logoLink = screen.getByRole('link', { name: /giftglow$/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('render the cart with correct icon and link', () => {
    const cartLink = screen.getByRole('link', { name: /shopping-cart$/i });
    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute('href', '/cart');
  });
});
