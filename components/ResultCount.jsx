import React from 'react';
import styled from 'styled-components';

const SpanContainer = styled.div`
  font-size: 16px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
`;

export default function ResultCount({ count }) {
  return (
    <SpanContainer>
      {count > 0 && (
        <span>
          {count} Result{count > 1 && 's'}
        </span>
      )}
    </SpanContainer>
  );
}
