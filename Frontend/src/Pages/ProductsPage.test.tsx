import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductsPage } from './ProductsPage';
import { MemoryRouter } from 'react-router-dom';

beforeEach(() => {
  render(
    <MemoryRouter>
      <ProductsPage />
    </MemoryRouter>
  );
});

describe('Products page Component', () => {
  it('should have a heading with the text Our products', () => {
    const title = screen.getByRole('heading', { name: /Products$/i });
    expect(title).toBeInTheDocument();
  });

  it('ad banner should have a image', () => {
    const adBannerImage = screen.getByRole('img', { name: /ad banner/i });
    expect(adBannerImage).toBeInTheDocument();
  });

  describe('Products REST API call', () => {
    it('should dispaly image for each products', async () => {
      const images = await screen.findAllByAltText(/advent calendar/i);

      expect(images).toHaveLength(3);

      // @ts-expect-error: ignore alt problem...
      const altTitles = images.map((elem) => elem.alt);
      expect(altTitles).toEqual([
        'Classic Advent Calendar',
        'Advent Calendar',
        'The Wonder Express Advent Calendar',
      ]);
    });

    it('should display title for each products', async () => {
      const productTitles = await screen.findAllByRole('heading', { level: 5 });
      expect(productTitles).toHaveLength(3);
    });

    it('should display price for each products', async () => {
      const prices = await screen.findAllByText(/kr/i);
      expect(prices).toHaveLength(3);
    });
  });
});
