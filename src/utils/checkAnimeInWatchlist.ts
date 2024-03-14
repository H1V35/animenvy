import type { Datum } from '@/anime/interfaces/animeList';

type CheckAnimeInWatchlistProps = {
  anime: Datum;
  watchlist: Datum[];
};

export const checkAnimeInWatchlist = ({ anime, watchlist }: CheckAnimeInWatchlistProps) => {
  return watchlist.some((watchlistAnime) => watchlistAnime.mal_id === anime.mal_id);
};
