import { NavLink } from 'react-router-dom';
import { Datum } from '../interfaces/animeList';

type AsideItemProps = {
  anime: Datum;
};

export function AsideItem({ anime }: AsideItemProps) {
  return (
    <NavLink key={anime.mal_id} to={`/anime/${anime.mal_id}`}>
      {({ isActive }) => (
        <div className={`aside__item ${isActive ? 'aside__item--active' : ''}`}>
          <p>{anime.title}</p>
        </div>
      )}
    </NavLink>
  );
}
