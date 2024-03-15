import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  width: 70%;
  padding: 10px;

  @media only screen and (max-width: 425px) {
    width: 90%;
  }
`;

export default function Wrapper({ children, color }) {
  return (
    <div style={{ backgroundColor: color }}>
      <Container>{children}</Container>;
    </div>
  );
}
