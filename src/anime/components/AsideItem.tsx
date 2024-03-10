import { NavLink } from 'react-router-dom';
import { Datum } from '../interfaces/animeList';

type AsideItemProps = {
  anime: Datum;
};

export function AsideItem({ anime }: AsideItemProps) {
  return (
    <NavLink key={anime.mal_id} to={`/anime/${anime.mal_id}`}>
      {({ isActive }) => (
        <div className={`asideItem ${isActive ? 'asideItem--active' : ''}`}>
          <div className="asideItem__image">
            <img
              src={anime.images.webp.small_image_url}
              alt={`${anime.title} cover`}
              className="asideItem__image--cover"
            />
          </div>
          <p className="asideItem__title">{anime.title_english || anime.title}</p>
        </div>
      )}
    </NavLink>
  );
}
