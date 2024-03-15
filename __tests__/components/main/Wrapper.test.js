import { render, screen } from '@testing-library/react';
import Wrapper from '@/components/Wrapper';
import React from 'react';
import '@testing-library/jest-dom';

describe('Wrapper Component', () => {
  it('renders Child component', () => {
    const wrapper = render(<Wrapper />);
    expect(wrapper.baseElement).toBeInTheDocument();
  });
});
