import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FavoritesResult } from '@/pages/favorites';

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: () => null,
      prefetch: () => null,
    };
  },
}));

jest.mock('@/components/SearchBox', () => () => (
  <div data-testid='child1'></div>
));

jest.mock('@/components/ResultCount', () => () => (
  <div data-testid='child2'></div>
));

describe('Favorites page', () => {
  it('it should render properly the components inside', () => {
    render(<FavoritesResult />);
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
    expect(screen.queryByTestId('child1')).toBeInTheDocument();
    expect(screen.queryByTestId('child2')).toBeInTheDocument();
  });
});
