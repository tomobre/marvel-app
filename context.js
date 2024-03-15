'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext({ favoritesState: [], searchState: [] });

export function AppWrapper({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <AppContext.Provider
      value={{
        favoritesState: [favorites, setFavorites],
        searchState: [search, setSearch],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
