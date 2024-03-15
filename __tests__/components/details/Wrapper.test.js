import { render } from '@testing-library/react';
import Wrapper from '@/components/details/Wrapper';
import React from 'react';
import '@testing-library/jest-dom';

describe('Wrapper Component', () => {
  it('renders Child component', () => {
    const wrapper = render(<Wrapper />);
    expect(wrapper.baseElement).toBeInTheDocument();
  });
});
