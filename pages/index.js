import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import SearchBox from '../components/SearchBox';
import ResultCount from '../components/ResultCount';
import Layout from '../components/Layout';
import { getData, getSearchResult } from '../fetch/fetch';
import { useAppContext } from '../context';
import { useDebounce } from 'use-debounce';
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  const data = await getData();
  return { props: { data } };
}

export default function Home({ data }) {
  const [characterList, setCharacterList] = useState(data?.data?.results);
  const { searchState } = useAppContext();
  const [search] = searchState;
  const [query] = useDebounce(search, 500);

  useEffect(() => {
    if (query !== '' && query !== undefined) {
      const newCharacters = async () => {
        const characters = await getSearchResult(query);
        setCharacterList(characters?.data.results);
      };
      newCharacters();
    } else if (characterList !== data?.data?.results && query === '') {
      setCharacterList(data?.data?.results);
    }
  }, [query]);

  return (
    <Layout>
      <SearchBox />
      <ResultCount count={characterList?.length} />
      {characterList?.length > 0 ? (
        <Wrapper>
          {characterList?.map((character) => {
            return (
              <Card
                key={character.id}
                id={character.id.toString()}
                description={character.description}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                name={character.name}
              />
            );
          })}
        </Wrapper>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem',
            fontSize: '20px',
          }}
        >
          No heroes found
        </div>
      )}
    </Layout>
  );
}
