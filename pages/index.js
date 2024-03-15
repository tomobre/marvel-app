import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import SearchBox from '../components/SearchBox';
import ResultCount from '../components/ResultCount';
import Layout from '../components/Layout';

async function fetchData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/data?search=`, {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function Home() {
  if (!process.env.NEXT_PUBLIC_URL) return null;
  //const data = await fetchData();
  //  const characterList = data?.data?.results;
  const characterList = [];
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
