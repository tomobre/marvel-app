import { render, screen } from '@testing-library/react';
import NavBar from '@/components/navbar/NavBar';
import React from 'react';
import '@testing-library/jest-dom';

describe('Navbar Component', () => {
  it('renders properly', () => {
    render(<NavBar />);
    const image = screen.getByAltText('marvel-logo');

    expect(image).toBeInTheDocument();
  });
});
