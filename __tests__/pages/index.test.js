import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

/**
 * @param {function} Component
 * @param {*} props
 * @returns {Promise<()=>JSX.Element>}
 */
async function resolvedComponent(Component, props) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}

jest.mock('@/components/SearchBox', () => () => (
  <div data-testid='child1'></div>
));

jest.mock('@/components/ResultCount', () => () => (
  <div data-testid='child2'></div>
));

describe('home page', () => {
  it('it should render properly the components inside', async () => {
    const HomeComp = await resolvedComponent(Home, {});
    render(<HomeComp />);
    expect(screen.queryByTestId('child1')).toBeInTheDocument();
    expect(screen.queryByTestId('child2')).toBeInTheDocument();
  });
});

afterAll((done) => {
  done();
});
