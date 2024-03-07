import { AnimeList } from '../components/AnimeList';
import { PagesNavigation } from '../components/PagesNavigation';
import { useSeasonNow } from '../hooks/useSeasonNow';

export function HomePage() {
  const { list, isLoading, pagination } = useSeasonNow();

  return (
    <div className="page">
      <div className="page__container">
        <h2 className="page__title">New episodes every week</h2>

        <div className="page__list">
          {list && <AnimeList list={list} isLoading={isLoading} />}

          <PagesNavigation isLoading={isLoading} pagination={pagination} />
        </div>
      </div>
    </div>
  );
}
