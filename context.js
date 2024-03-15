'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext({ hello: 'world' });

export function AppWrapper({ children }) {
  const [favorites, setFavorites] = useState([]);

  return (
    <AppContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
