import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 316px;
  overflow-x: scroll;
  ::-webkit-scrollbar-colorr: #ea1f23;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
`;

export default function ScrollComic({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
