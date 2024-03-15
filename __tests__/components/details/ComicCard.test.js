import { render, screen } from '@testing-library/react';
import ComicCard from '@/components/details/ComicCard';
import React from 'react';
import '@testing-library/jest-dom';

describe('ComicCard Component', () => {
  it('renders properly', () => {
    render(<ComicCard />);

    const main = screen.getByRole('img');
    const h3 = screen.getByRole('heading');
    const p = screen.getByRole('paragraph');

    expect(main).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
});
