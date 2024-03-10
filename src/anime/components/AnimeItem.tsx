import React from 'react';
import { WatchlistContext } from '../../providers/WatchlistProvider';
import type { Datum } from '../interfaces/animeList';

type AnimeItemProps = {
  anime: Datum;
};

export function AnimeItem({ anime }: AnimeItemProps) {
  const { addAnimeToWatchlist } = React.useContext(WatchlistContext);

  const handleClick = () => {
    addAnimeToWatchlist({ anime });
  };

  return (
    <div className="animeItem">
      <div className="animeItem__container">
        <div className="animeItem__cover">
          <img
            src={anime.images.webp.image_url}
            alt={`${anime.title_english} cover`}
            className="animeItem__cover--image"
          />
          {anime.score && <p className="animeItem__score">{anime.score}</p>}
        </div>

        <h3 className="animeItem__title" title={anime.title_english || anime.title}>
          {anime.title_english || anime.title}
        </h3>

        <button onClick={handleClick}>ADD TO WATCHLIST</button>
      </div>
    </div>
  );
}
