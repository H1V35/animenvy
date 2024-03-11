import { useHome } from '../hooks/useHome';
import { AnimeList } from '../components/AnimeList';
import { PagesNavigation } from '../components/PagesNavigation';

export function HomePage() {
  const { season, isLoading, pagination } = useHome();

  return (
    <div className="page">
      <div className="page__container">
        <h2 className="page__title">New episodes every week</h2>

        <div className="page__list">
          {season && <AnimeList list={season} isLoading={isLoading} />}

          {season?.data && season?.data.length > 0 && (
            <PagesNavigation isLoading={isLoading} pagination={pagination} />
          )}
        </div>
      </div>
    </div>
  );
}
