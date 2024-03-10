import React from 'react';
import { checkAnimeInWatchlist } from '../utils/checkAnimeInWatchlist';
import type { Datum } from '../anime/interfaces/animeList';

type WatchlistProviderProps = {
  children: React.ReactNode;
};

type WatchlistItem = {
  anime: Datum;
};

type WatchlistContextType = {
  watchlist: Datum[];
  toggleAnimeWatchlist: ({ anime }: WatchlistItem) => void;
};

const defaultWatchlistContextValue: WatchlistContextType = {
  watchlist: [],
  toggleAnimeWatchlist: () => {},
};

export const WatchlistContext = React.createContext<WatchlistContextType>(
  defaultWatchlistContextValue
);

export function WatchlistProvider({ children }: WatchlistProviderProps) {
  const [watchlist, setWatchlist] = React.useState<Datum[]>([]);

  const toggleAnimeWatchlist = React.useCallback(
    ({ anime }: WatchlistItem) => {
      if (checkAnimeInWatchlist({ anime, watchlist })) {
        const newWatchlist = watchlist.filter(
          (watchlistAnime) => watchlistAnime.mal_id !== anime.mal_id
        );
        setWatchlist(newWatchlist);
        return;
      }

      setWatchlist([...watchlist, anime]);
    },
    [watchlist]
  );

  const contextValue = React.useMemo(
    () => ({
      watchlist,
      toggleAnimeWatchlist,
    }),
    [watchlist, toggleAnimeWatchlist]
  );

  return <WatchlistContext.Provider value={contextValue}>{children}</WatchlistContext.Provider>;
}
