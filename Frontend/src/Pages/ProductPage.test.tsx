import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductPage from './ProductPage';

beforeEach(() => {
  render(
    <MemoryRouter>
      <ProductPage />
    </MemoryRouter>
  );
});

describe('Product page API Call', () => {
  it('should have product name as a heading', async () => {
    const heading = await screen.findByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
  });

  it('should have an image', async () => {
    const image = await screen.findByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('should have a description', async () => {
    const description = await screen.findByText(/description/i);
    expect(description).toBeInTheDocument();
  });

  it('should display price', async () => {
    const price = await screen.findByText(/kr/i);
    expect(price).toBeInTheDocument();
  });
});
