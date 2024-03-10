import React from 'react';
import { WatchlistContext } from '../../providers/WatchlistProvider';
import { WatchList } from '../components/WatchList';

export function WatchlistPage() {
  const { watchlist } = React.useContext(WatchlistContext);

  return (
    <div className="page">
      <div className="page__container">
        <h2 className="page__title">Watchlist</h2>

        <div className="page__list">
          {watchlist.length > 0 ? (
            <WatchList list={watchlist} />
          ) : (
            <p className="page__noContent">Nothing to see yet here...</p>
          )}
        </div>
      </div>
    </div>
  );
}
