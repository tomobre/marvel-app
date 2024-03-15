import styled from 'styled-components';
import Wrapper from './Wrapper';
import Image from 'next/image';
import { useAppContext } from '../../context';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);

  @media only screen and (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const GridCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  grid-column: 2/ 4;
  grid-row: 1;
  flex-direction: column;
`;

const Name = styled.h2`
  color: white;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

export default function Hero({ name, description, image, id }) {
  const { favorites, setFavorites } = useAppContext();
  const checkFav = favorites?.findIndex((character) => character.id === id);

  const toggleFavorite = (id) => {
    if (checkFav === -1) {
      setFavorites([...favorites, { name, description, image, id }]);
    } else {
      favorites.splice(checkFav, 1);
      setFavorites([...favorites]);
    }
  };

  return (
    <Wrapper color={'black'}>
      <Grid>
        {image ? (
          <Image
            priority={true}
            alt={name}
            width={320}
            height={320}
            src={image}
          />
        ) : (
          <Image
            priority={false}
            alt={'image hero not found'}
            width={320}
            height={320}
            src={'/assets/image_not_available.webp'}
          />
        )}
        <GridCol>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Name>{name}</Name>
            <div
              onClick={() => {
                toggleFavorite(id);
              }}
            >
              {checkFav === -1 ? (
                <Image
                  priority={false}
                  style={{ marginLeft: '10px' }}
                  width={30}
                  alt='white-heart'
                  height={30}
                  src={'/assets/Heart_icon_w.png'}
                />
              ) : (
                <Image
                  priority={false}
                  style={{ marginLeft: '10px' }}
                  alt='red-heart'
                  width={30}
                  height={30}
                  src={'/assets/Heart_icon_r.png'}
                />
              )}
            </div>
          </div>

          <p role='paragraph' style={{ color: 'white' }}>
            {description}
          </p>
        </GridCol>
      </Grid>
    </Wrapper>
  );
}
