import { AsideItem } from './AsideItem';
import { HomeIcon } from '../../assets/HomeIcon';
import { HomeFilledIcon } from '../../assets/HomeFilledIcon';
import { WatchlistIcon } from '../../assets/WatchlistIcon';
import { WatchlistFilledIcon } from '../../assets/WatchlistFilledIcon';

const routes = [
  { to: '/', text: 'Home', icon: <HomeIcon />, iconFilled: <HomeFilledIcon /> },
  {
    to: '/watchlist',
    text: 'Watchlist',
    icon: <WatchlistIcon />,
    iconFilled: <WatchlistFilledIcon />,
  },
];

export function Aside() {
  return (
    <div className="aside">
      <div className="aside__container">
        <div className="aside__items">
          {routes.map((route) => (
            <AsideItem key={route.to} route={route} />
          ))}
        </div>
      </div>
    </div>
  );
}
