import { useSearch } from '../hooks/useSearch';
import { AnimeList } from '../components/AnimeList';
import { PagesNavigation } from '../components/PagesNavigation';

export function SearchPage() {
  const { list, isLoading, pagination } = useSearch();

  return (
    <div className="page">
      <div className="page__container">
        <div className="page__list">
          {list && <AnimeList list={list} isLoading={isLoading} />}

          <PagesNavigation isLoading={isLoading} pagination={pagination} />
        </div>
      </div>
    </div>
  );
}
