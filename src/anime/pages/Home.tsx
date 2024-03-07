import { AnimeList } from '../components/AnimeList';
import { PagesNavigation } from '../components/PagesNavigation';
import { useSeasonNow } from '../hooks/useSeasonNow';

export function HomePage() {
  const { list, isLoading, page, nextPage, prevPage, firstPage, lastPage } = useSeasonNow();

  return (
    <div className="page">
      <div className="page__container">
        <h2 className="page__title">New episodes every week</h2>

        <div className="page__list">
          {list && <AnimeList list={list} isLoading={isLoading} />}

          <PagesNavigation
            page={page}
            isLoading={isLoading}
            prevPage={prevPage}
            nextPage={nextPage}
            firstPage={firstPage}
            lastPage={lastPage}
          />
        </div>
      </div>
    </div>
  );
}
