import { render, screen } from '@testing-library/react';
import ResultCount from '@/components/ResultCount';
import React from 'react';
import '@testing-library/jest-dom';

describe('ResultCount Component', () => {
  it('renders properly', () => {
    const count = render(<ResultCount />);
    expect(count.baseElement).toBeInTheDocument();
  });
});
