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
  setWatchlist: React.Dispatch<React.SetStateAction<WatchlistItem[]>>;
};

const defaultWatchlistContextValue: WatchlistContextType = {
  watchlist: [],
  setWatchlist: () => {},
};

const WatchlistContext = React.createContext<WatchlistContextType>(defaultWatchlistContextValue);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [watchlist, setWatchlist] = React.useState<WatchlistItem[]>([]);

  const contextValue = React.useMemo(
    () => ({
      watchlist,
      setWatchlist,
    }),
    [watchlist, setWatchlist]
  );

  console.log('Watchlist: ', watchlist);

  return (
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <WatchlistContext.Provider value={contextValue}>{children}</WatchlistContext.Provider>
    </React.Suspense>
  );
};
