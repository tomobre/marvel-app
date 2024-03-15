import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
  grid-auto-rows: minmax(100px, auto);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function Wrapper({ children }) {
  return <Container>{children}</Container>;
}
