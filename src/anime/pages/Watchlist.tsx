import { useWatchlistContext } from '@/anime/hooks/useWatchlistContext';
import { WatchList } from '@/anime/components/WatchList';

export function WatchlistPage() {
  const { watchlist } = useWatchlistContext();

  return (
    <div className="page">
      <div className="page__container">
        <h2 className="page__title">Watchlist</h2>

        <div className="page__list">
          {watchlist.length > 0 ? (
            <WatchList list={watchlist} />
          ) : (
            <p className="page__noContent">Nothing to see here yet...</p>
          )}
        </div>
      </div>
    </div>
  );
}
