import { useWatchlistContext } from '@/anime/hooks/useWatchlistContext';
import { checkAnimeInWatchlist } from '@/utils/checkAnimeInWatchlist';
import { SaveIcon } from '@/assets/SaveIcon';
import { SaveFilledIcon } from '@/assets/SaveFilledIcon';
import type { Datum } from '@/anime/interfaces/animeList';
import type { Data } from '@/anime/interfaces/anime';

type Props = {
  anime: Datum | Data;
  item: 'AnimeItem' | 'SearchItem';
};

export function ToggleButton({ anime, item }: Props) {
  const { watchlist, toggleAnimeWatchlist } = useWatchlistContext();

  const isAnimeInWatchlist = checkAnimeInWatchlist({ anime, watchlist });
  const itemClasses = item === 'SearchItem' ? 'searchItem__toggle' : 'animeItem__toggle';

  const handleClick = () => {
    toggleAnimeWatchlist({ anime });
  };

  return (
    <button
      onClick={handleClick}
      title={isAnimeInWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
      className={`${itemClasses} ${
        isAnimeInWatchlist ? `${itemClasses}--saved` : `${itemClasses}--notSaved`
      }`}
    >
      {isAnimeInWatchlist ? <SaveFilledIcon /> : <SaveIcon />}
    </button>
  );
}
