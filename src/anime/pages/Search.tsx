import { useSearch } from '../hooks/useSearch';
import { SearchList } from '../components/SearchList';
import { PagesNavigation } from '../components/PagesNavigation';

export function SearchPage() {
  const { list, isLoading, pagination } = useSearch();

  return (
    <div className="page">
      <div className="page__container">
        <div className="page__list">
          {list && <SearchList list={list} isLoading={isLoading} />}

          <PagesNavigation isLoading={isLoading} pagination={pagination} />
        </div>
      </div>
    </div>
  );
}
