import { render, screen } from '@testing-library/react';
import SearchBox from '@/components/SearchBox';
import React from 'react';
import '@testing-library/jest-dom';

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: () => null,
      prefetch: () => null,
    };
  },
}));

describe('SearchBox Component', () => {
  it('renders properly', () => {
    render(<SearchBox />);
    const input = screen.getByRole('search');
    expect(input).toBeInTheDocument();
  });
});
