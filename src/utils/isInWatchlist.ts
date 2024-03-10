import { Datum } from '../anime/interfaces/animeList';

export const isInWatchlist = ({ anime, watchlist }: { anime: Datum; watchlist: Datum[] }) => {
  return watchlist.some((watchlistAnime) => watchlistAnime.mal_id === anime.mal_id);
};
