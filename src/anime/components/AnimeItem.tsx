import React from 'react';
import { NavLink } from 'react-router-dom';
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
    <NavLink key={anime.mal_id} to={`/anime/${anime.mal_id}`}>
      <div className="animeItem">
        <div className="animeItem__container">
          <div className="animeItem__image">
            <img
              src={anime.images.webp.image_url}
              alt={`${anime.title_english} cover`}
              className="animeItem__image--cover"
            />
            {anime.score && <p className="animeItem__score">{anime.score}</p>}
          </div>

          <h3 className="animeItem__title" title={anime.title_english || anime.title}>
            {anime.title_english || anime.title}
          </h3>

          <button onClick={handleClick}>ADD TO WATCHLIST</button>
        </div>
      </div>
    </NavLink>
  );
}
