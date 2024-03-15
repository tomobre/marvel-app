import md5 from 'md5';
import { redirect } from 'next/navigation';

const TS = 1;
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;
const apiKey = process.env.API_KEY;

export async function getData() {
  const hash = md5(TS + privateKey + publicKey);
  const res = await fetch(
    `https://gateway.marvel.com/v1/public/characters?limit=50&ts=${TS}&apikey=${apiKey}&hash=${hash}`
  );

  if (!res.ok) {
    console.log(res);
    // This will activate the closest `error.js` Error Boundary

    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getCharacter(id) {
  const hash = md5(TS + privateKey + publicKey);
  const res = await fetch(
    `https://gateway.marvel.com/v1/public/characters/${id}?&ts=${TS}&apikey=${apiKey}&hash=${hash}`
  );

  if (!res.ok) {
    redirect('/404');
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getCharacterComics(id) {
  const hash = md5(TS + privateKey + publicKey);
  const res = await fetch(
    `https://gateway.marvel.com/v1/public/characters/${id}/comics?&ts=${TS}&apikey=${apiKey}&hash=${hash}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getSearchResult(input) {
  const hash = md5(TS + privateKey + publicKey);
  const res = await fetch(
    `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${input}&ts=${TS}&apikey=${apiKey}&hash=${hash}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
