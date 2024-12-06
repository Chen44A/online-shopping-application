import { beforeEach, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

beforeEach(() => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
});

describe('Footer Component', () => {
  it('render the footer with correct content', () => {
    screen.getByText(/Copyright/i);
  });
});
