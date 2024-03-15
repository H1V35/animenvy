import { Link } from 'react-router-dom';
import { roundFavorites } from '@/utils/roundFavorites';
import type { Data } from '../interfaces/anime';

type AnimeInfoProps = {
  anime: Data;
};

export function AnimeInfo({ anime }: AnimeInfoProps) {
  return (
    <div className="anime__info">
      <div className="anime__data">
        {anime.favorites.toString() && (
          <p className="anime__data--favorites">{roundFavorites(anime.favorites)} favorites</p>
        )}

        {anime.genres.length > 0 && (
          <p className="anime__data--genres">
            {anime.genres.map((genre) => genre.name).join(' • ')}
          </p>
        )}

        {anime.synopsis && <p className="anime__data--synopsis">{anime.synopsis}</p>}

        {anime.streaming.length > 0 ? (
          <div className="anime__data--streaming">
            <h3 className="anime__data--watch">{'Watch this anime on...'}</h3>

            <div className="anime__data--links">
              {anime.streaming.map((stream) => (
                <Link
                  key={stream.name}
                  to={stream.url}
                  target="_blank"
                  className="anime__data--link"
                >
                  {stream.name}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="anime__data--streaming">
            <h3 className="anime__data--watch">
              {'Sorry, the anime is not available on any platform at this moment :('}
            </h3>
          </div>
        )}
      </div>

      <div className="anime__image">
        <img
          src={anime.images.webp.large_image_url}
          alt={`${anime.title_english} cover`}
          className="anime__image--cover"
        />
        {anime.score && <p className="anime__score">{anime.score}</p>}
      </div>
    </div>
  );
}
