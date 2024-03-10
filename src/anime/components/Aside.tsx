import { AsideLink } from './AsideLink';
import { HomeIcon } from '../../assets/HomeIcon';
import { HomeFilledIcon } from '../../assets/HomeFilledIcon';
import { WatchlistIcon } from '../../assets/WatchlistIcon';
import { WatchlistFilledIcon } from '../../assets/WatchlistFilledIcon';
import { WatchlistContext } from '../../providers/app';
import React from 'react';
import { AsideItem } from './AsideItem';

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
  const { watchlist } = React.useContext(WatchlistContext);

  return (
    <div className="aside">
      <div className="aside__container">
        <div className="aside__items">
          {routes.map((route) => (
            <AsideLink key={route.to} route={route} />
          ))}

          {watchlist.map((anime) => (
            <AsideItem key={anime.mal_id} anime={anime} />
          ))}
        </div>
      </div>
    </div>
  );
}
