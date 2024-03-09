import { roundFavorites } from '../../utils/roundFavorites';
import { sliceSynopsis } from '../../utils/sliceSynopsis';
import type { Datum } from '../interfaces/animeList';

type SearchItemProps = {
  anime: Datum;
};

export function SearchItem({
  anime: {
    title_english,
    title,
    images: {
      webp: { image_url },
    },
    score,
    favorites,
    genres,
    synopsis,
  },
}: SearchItemProps) {
  return (
    <div className="searchItem">
      <div className="searchItem__container">
        <div className="searchItem__cover">
          <img
            src={image_url}
            alt={`${title_english} cover`}
            className="searchItem__cover--image"
          />
          {score && <p className="searchItem__score">{score}</p>}
        </div>

        <div className="searchItem__data">
          <h3 className="searchItem__data--title" title={title_english || title}>
            {title_english || title}
          </h3>

          <p className="searchItem__data--favorites">
            {favorites && roundFavorites(favorites)} favorites
          </p>

          <p className="searchItem__data--genres">
            {genres && genres.map((genre) => genre.name).join(' • ')}
          </p>

          <p className="searchItem__data--synopsis">{synopsis && sliceSynopsis(synopsis)}</p>
        </div>
      </div>
    </div>
  );
}
