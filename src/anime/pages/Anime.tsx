import { Link, useParams } from 'react-router-dom';
import { useAnime } from '@/anime/hooks/useAnime';
import { roundFavorites } from '@/utils/roundFavorites';
import { ToggleButton } from '@/anime/components/ToggleButton';

// TODO: Componentization

export function AnimePage() {
  const { animeId } = useParams();
  const { anime, isLoading } = useAnime(animeId!);

  if (!anime) return null;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="page">
      <div className="page__container">
        <div className="anime">
          <div className="anime__container">
            <ToggleButton anime={anime} item="AnimeItem" />

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

            <h2 className="anime__title">{anime.title_english}</h2>

            <div className="anime__info">
              <div className="anime__data">
                {anime.favorites && (
                  <p className="anime__data--favorites">
                    {roundFavorites(anime.favorites)} favorites
                  </p>
                )}

                {anime.genres && (
                  <p className="anime__data--genres">
                    {anime.genres.map((genre) => genre.name).join(' • ')}
                  </p>
                )}

                {anime.synopsis && <p className="anime__data--synopsis">{anime.synopsis}</p>}

                {/* TODO: Make links seem like buttons for links */}
                {anime.streaming && (
                  <div className="anime__data--streaming">
                    {anime.streaming.map((stream) => (
                      <Link to={stream.url} target="_blank" className="anime__data--link">
                        {stream.name}
                      </Link>
                    ))}
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
          </div>
        </div>
      </div>
    </div>
  );
}
