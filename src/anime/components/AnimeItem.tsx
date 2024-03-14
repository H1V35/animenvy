import { Link } from 'react-router-dom';
import { ToggleButton } from '@/anime/components/ToggleButton';
import type { Datum } from '@/anime/interfaces/animeList';

type AnimeItemProps = {
  anime: Datum;
};

export function AnimeItem({ anime }: AnimeItemProps) {
  return (
    <div className="animeItem--wrapper">
      <Link key={anime.mal_id} to={`/anime/${anime.mal_id}`}>
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
          </div>
        </div>
      </Link>

      <ToggleButton anime={anime} item="AnimeItem" />
    </div>
  );
}
