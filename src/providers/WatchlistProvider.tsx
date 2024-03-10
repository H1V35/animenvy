import React from 'react';
import type { Datum } from '../anime/interfaces/animeList';

type WatchlistProviderProps = {
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

export function WatchlistProvider({ children }: WatchlistProviderProps) {
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

  return <WatchlistContext.Provider value={contextValue}>{children}</WatchlistContext.Provider>;
}
