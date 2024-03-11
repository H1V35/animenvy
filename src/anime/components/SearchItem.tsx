import { Link } from 'react-router-dom';
import { roundFavorites } from '../../utils/roundFavorites';
import { SearchItemSynopsis } from './SearchItemSynopsis';
import { ToggleButton } from './ToggleButton';
import type { Datum } from '../interfaces/animeList';

type SearchItemProps = {
  anime: Datum;
};

export function SearchItem({ anime }: SearchItemProps) {
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

      <ToggleButton anime={anime} item="SearchItem" />
    </div>
  );
}
