import { getData, getCharacter, getCharacterComics } from '../fetch/fetch';
import Wrapper from '../components/details/Wrapper';
import Hero from '../components/details/Hero';
import ComicCard from '../components/details/ComicCard';
import ScrollComic from '../components/details/ScrollComic';
import Layout from '../components/Layout';

export async function getStaticPaths() {
  const data = await getData();
  const characterList = data.data.results;

  const characterPaths = characterList.map((character) => {
    return {
      params: {
        id: character.id.toString(),
      },
    };
  });

  return {
    paths: [...characterPaths],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const id = String(context.params?.id);

  try {
    const fetchData = await getCharacter(id);
    const fetchCharacterComics = await getCharacterComics(id);
    const { results: characterResults } = fetchData.data;
    const { results: comicsResults } = fetchCharacterComics.data;
    return {
      props: { characterResults, comicsResults },
      revalidate: 1000,
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true,
      revalidate: 10000,
    };
  }
}

export default function Page({ characterResults, comicsResults }) {
  return (
    <Layout>
      <Hero
        id={characterResults && characterResults[0].id.toString()}
        name={characterResults && characterResults[0].name}
        description={characterResults && characterResults[0].description}
        image={
          characterResults &&
          `${characterResults[0].thumbnail.path}.${characterResults[0].thumbnail.extension}`
        }
      />

      <Wrapper color={'white'}>
        <h3
          role='headingTitle'
          style={{
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
            fontSize: '23px',
          }}
        >
          COMICS
        </h3>
        <ScrollComic>
          {comicsResults?.slice(0, 20).map((comic) => {
            const date = comic.dates[0].date.slice(0, 4);
            return (
              <ComicCard
                key={comic.title}
                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                title={comic.title}
                date={date}
              />
            );
          })}
        </ScrollComic>
      </Wrapper>
    </Layout>
  );
}
