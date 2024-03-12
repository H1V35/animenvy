import { Link, useParams } from 'react-router-dom';
import { useAnime } from '../hooks/useAnime';
import { roundFavorites } from '../../utils/roundFavorites';

export function AnimePage() {
  const { animeId } = useParams();
  const { anime, isLoading } = useAnime(animeId!);

  if (!anime) return null;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="page">
      <div className="page__container">
        <div className="anime__above">
          {anime.trailer.embed_url && (
            <iframe
              width="100%"
              height="auto"
              style={{ borderRadius: '8px', aspectRatio: '16/9' }}
              src={`${anime.trailer.embed_url}&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              frameBorder={0}
              className="anime__iframe"
            ></iframe>
          )}
        </div>

        <div className="anime__name">
          <h2 className="anime__name--title">{anime.title_english}</h2>
        </div>

        <div className="anime__image">
          <img
            src={anime.images.webp.image_url}
            alt={`${anime.title_english} cover`}
            className="anime__image--cover"
          />
          {anime.score && <p className="anime__score">{anime.score}</p>}
        </div>

        {anime.favorites && (
          <p className="anime__data--favorites">{roundFavorites(anime.favorites)} favorites</p>
        )}

        {anime.genres && (
          <p className="anime__data--genres">
            {anime.genres.map((genre) => genre.name).join(' • ')}
          </p>
        )}

        {anime.synopsis && <p className="anime__data--synopsis">{anime.synopsis}</p>}

        {anime.streaming && (
          <div className="anime__streaming">
            {anime.streaming.map((stream) => (
              <Link to={stream.url} className="anime__streaming--link">
                {stream.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
