import { useWatchlistContext } from '@/anime/hooks/useWatchlistContext';
import { AsideLink } from '@/anime/components/AsideLink';
import { AsideAnime } from '@/anime/components/AsideAnime';
import { HomeIcon } from '@/assets/HomeIcon';
import { HomeFilledIcon } from '@/assets/HomeFilledIcon';
import { WatchlistIcon } from '@/assets/WatchlistIcon';
import { WatchlistFilledIcon } from '@/assets/WatchlistFilledIcon';

const routes = [
  {
    to: '/',
    text: 'Home',
    icon: <HomeIcon />,
    iconFilled: <HomeFilledIcon />,
  },
  {
    to: '/watchlist',
    text: 'Watchlist',
    icon: <WatchlistIcon />,
    iconFilled: <WatchlistFilledIcon />,
  },
];

export function Aside() {
  const { watchlist } = useWatchlistContext();

  return (
    <div className="aside">
      <div className="aside__container">
        <div className="aside__items">
          <div className="aside__links">
            {routes.map((route) => (
              <AsideLink key={route.to} route={route} />
            ))}
          </div>

          {watchlist.length > 0 && (
            <div className="aside__watchlist">
              {watchlist.map((anime) => (
                <AsideAnime key={anime.mal_id} anime={anime} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
