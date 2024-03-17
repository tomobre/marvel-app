import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px black solid;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const Input = styled.input`
  margin: auto;
  width: 96%;
  font-size: 1.2rem;
  background-color: transparent;
  padding: 1rem;
  padding-left: 0rem;
  outline: none;
  border: none;
  &::placeholder {
    color: gray;
  }

  @media only screen and (max-width: 768px) {
    margin-left: 1rem;
    font-size: 0.9rem;
    padding: 0.7rem;
  }
`;

export default function SearchBox() {
  const { searchState } = useAppContext();
  const [search, setSearch] = searchState;

  return (
    <Container>
      <span>🔍</span>
      <Input
        value={search}
        role='search'
        placeholder=' SEARCH A CHARACTER...'
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type='text'
      />
    </Container>
  );
}
