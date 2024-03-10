import React from 'react';
import { Link } from 'react-router-dom';
import { WatchlistContext } from '../../providers/WatchlistProvider';
import { checkAnimeInWatchlist } from '../../utils/checkAnimeInWatchlist';
import { roundFavorites } from '../../utils/roundFavorites';
import { SearchItemSynopsis } from './SearchItemSynopsis';
import type { Datum } from '../interfaces/animeList';
import { SaveIcon } from '../../assets/SaveIcon';
import { SaveFilledIcon } from '../../assets/SaveFilledIcon';

type SearchItemProps = {
  anime: Datum;
};

export function SearchItem({ anime }: SearchItemProps) {
  const { watchlist, toggleAnimeWatchlist } = React.useContext(WatchlistContext);

  const isAnimeInWatchlist = checkAnimeInWatchlist({ anime, watchlist });

  const handleClick = () => {
    toggleAnimeWatchlist({ anime });
  };

  return (
    <div className="searchItem--wrapper">
      <Link key={anime.mal_id} to={`/anime/${anime.mal_id}`}>
        <div className="searchItem">
          <div className="searchItem__container">
            <div className="searchItem__image">
              <img
                src={anime.images.webp.image_url}
                alt={`${anime.title_english} cover`}
                className="searchItem__image--cover"
              />
              {anime.score && <p className="searchItem__score">{anime.score}</p>}
            </div>

            <div className="searchItem__data">
              <h3 className="searchItem__data--title" title={anime.title_english || anime.title}>
                {anime.title_english || anime.title}
              </h3>

              {anime.favorites && (
                <p className="searchItem__data--favorites">
                  {roundFavorites(anime.favorites)} favorites
                </p>
              )}

              {anime.genres && (
                <p className="searchItem__data--genres">
                  {anime.genres.map((genre) => genre.name).join(' • ')}
                </p>
              )}

              {anime.synopsis && <SearchItemSynopsis synopsis={anime.synopsis} />}
            </div>
          </div>
        </div>
      </Link>

      <button
        onClick={handleClick}
        title={isAnimeInWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
        className={`searchItem__toggle ${
          isAnimeInWatchlist ? 'searchItem__toggle--saved' : 'searchItem__toggle--notSaved'
        }`}
      >
        {isAnimeInWatchlist ? <SaveFilledIcon /> : <SaveIcon />}
      </button>
    </div>
  );
}
