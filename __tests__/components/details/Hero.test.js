import { render, screen } from '@testing-library/react';
import Hero from '@/components/details/Hero';
import React from 'react';
import '@testing-library/jest-dom';

describe('Hero Component', () => {
  it('renders properly', () => {
    render(<Hero />);
    const h2 = screen.getByRole('heading');
    const p = screen.getByRole('paragraph');
    expect(h2).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
});
