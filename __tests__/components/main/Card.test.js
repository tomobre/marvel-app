import { render, screen } from '@testing-library/react';
import Card from '@/components/Card';
import React from 'react';
import '@testing-library/jest-dom';

describe('Card Component', () => {
  it('renders properly', () => {
    render(<Card />);
    const main = screen.getByRole('img');
    const p = screen.getByRole('paragraph');
    const div = screen.getByRole('fav');

    expect(main).toBeInTheDocument();
    expect(div).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
});
