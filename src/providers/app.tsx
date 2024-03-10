import React from 'react';
import type { Datum } from '../anime/interfaces/animeList';

type AppProviderProps = {
  children: React.ReactNode;
};

type WatchlistItem = {
  anime: Datum;
};

type WatchlistContextType = {
  watchlist: Datum[];
  addAnimeToWatchlist: ({ anime }: WatchlistItem) => void;
};

const defaultWatchlistContextValue: WatchlistContextType = {
  watchlist: [],
  addAnimeToWatchlist: () => {},
};

export const WatchlistContext = React.createContext<WatchlistContextType>(
  defaultWatchlistContextValue
);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [watchlist, setWatchlist] = React.useState<Datum[]>([]);

  const addAnimeToWatchlist = React.useCallback(
    ({ anime }: WatchlistItem) => {
      setWatchlist([...watchlist, anime]);
    },
    [watchlist]
  );

  const contextValue = React.useMemo(
    () => ({
      watchlist,
      addAnimeToWatchlist,
    }),
    [watchlist, addAnimeToWatchlist]
  );

  return (
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <WatchlistContext.Provider value={contextValue}>{children}</WatchlistContext.Provider>
    </React.Suspense>
  );
};
