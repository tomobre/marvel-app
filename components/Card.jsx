import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useAppContext } from '../context';
import { useEffect } from 'react';

const Container = styled.div`
  height: 260px;

  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Footer = styled.div`
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 20px solid #d8dcdd;
    border-left: 20px solid transparent;
    width: 0;
  }
  position: relative;
  background-color: black;
  padding: 1rem;
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Card({ image, name, id, description }) {
  const { favoritesState } = useAppContext();
  const [favorites, setFavorites] = favoritesState;

  const checkFav = favorites?.findIndex((character) => character.id === id);

  name = name?.length > 30 ? name.slice(0, 28) + '...' : name;

  useEffect(() => {}, [favorites]);

  const toggleFavorite = (id) => {
    if (checkFav === -1) {
      setFavorites([...favorites, { name, description, image, id }]);
    } else {
      favorites?.splice(checkFav, 1);
      setFavorites([...favorites]);
    }
  };

  return (
    <Container>
      {id && (
        <Link href={id}>
          <Image
            priority={false}
            alt={name}
            width={180}
            height={180}
            src={image}
          />
        </Link>
      )}
      <Footer>
        <p role='paragraph' style={{ color: 'white' }}>
          {name}
        </p>
        <div role='fav' onClick={() => toggleFavorite(id)}>
          {checkFav === -1 ? (
            <Image
              priority={false}
              alt='white-heart'
              width={10}
              height={10}
              src={'/assets/Heart_icon_w.png'}
            />
          ) : (
            <Image
              priority={false}
              alt='red-heart'
              width={10}
              height={10}
              src={'/assets/Heart_icon_r.png'}
            />
          )}
        </div>
      </Footer>
    </Container>
  );
}
