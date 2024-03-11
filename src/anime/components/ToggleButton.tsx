import React from 'react';
import { WatchlistContext } from '../../providers/WatchlistProvider';
import { checkAnimeInWatchlist } from '../../utils/checkAnimeInWatchlist';
import { SaveIcon } from '../../assets/SaveIcon';
import { SaveFilledIcon } from '../../assets/SaveFilledIcon';
import type { Datum } from '../interfaces/animeList';

type Props = {
  anime: Datum;
  item: 'AnimeItem' | 'SearchItem';
};

export function ToggleButton({ anime, item }: Props) {
  const { watchlist, toggleAnimeWatchlist } = React.useContext(WatchlistContext);

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
