import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import SearchBox from '../components/SearchBox';
import ResultCount from '../components/ResultCount';
import Layout from '../components/Layout';
import { getData, getSearchResult } from '../fetch/fetch';

export async function getStaticProps() {
  const data = await getData();
  return { props: { data } };
}

export default function Home({ data }) {
  if (!process.env.NEXT_PUBLIC_URL) return null;

  const characterList = data?.data?.results;

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
