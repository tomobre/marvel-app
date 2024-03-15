import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '@/pages/[id]';

/**
 * @param {function} Component
 * @param {*} props
 * @returns {Promise<()=>JSX.Element>}
 */
async function resolvedComponent(Component, props) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}

jest.mock('@/components/details/Hero', () => () => (
  <div data-testid='child1'></div>
));

jest.mock('@/components/details/ScrollComic', () => () => (
  <div data-testid='child2'></div>
));

describe('ID page', () => {
  it('it should render properly the components inside', async () => {
    const IdComp = await resolvedComponent(Page, { params: { id: '1009144' } });
    render(<IdComp />);
    const title = screen.getByRole('headingTitle');
    expect(title).toBeInTheDocument();
    expect(screen.queryByTestId('child1')).toBeInTheDocument();
    expect(screen.queryByTestId('child2')).toBeInTheDocument();
  });
});

afterAll((done) => {
  done();
});
