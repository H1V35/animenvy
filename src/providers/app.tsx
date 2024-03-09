import React from 'react';
import type { Datum } from '../anime/interfaces/animeList';

type AppProviderProps = {
  children: React.ReactNode;
};

type WatchlistItem = {
  anime: Datum;
};

type WatchlistContextType = {
  watchlist: WatchlistItem[];
  addAnimeToWatchlist: ({ anime }: { anime: WatchlistItem }) => void;
};

const defaultWatchlistContextValue: WatchlistContextType = {
  watchlist: [],
  addAnimeToWatchlist: () => {},
};

const WatchlistContext = React.createContext<WatchlistContextType>(defaultWatchlistContextValue);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [watchlist, setWatchlist] = React.useState<WatchlistItem[]>([]);

  const addAnimeToWatchlist = React.useCallback(
    ({ anime }: { anime: WatchlistItem }) => {
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

  console.log('Watchlist: ', watchlist);

  return (
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <WatchlistContext.Provider value={contextValue}>{children}</WatchlistContext.Provider>
    </React.Suspense>
  );
};
