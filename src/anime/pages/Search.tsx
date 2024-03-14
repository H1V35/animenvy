import { useSearch } from '@/anime/hooks/useSearch';
import { SearchList } from '@/anime/components/SearchList';
import { PagesNavigation } from '@/components/PagesNavigation';

export function SearchPage() {
  const { list, isLoading, pagination } = useSearch();

  return (
    <div className="page">
      <div className="page__container">
        <div className="page__list">
          {list && <SearchList list={list} isLoading={isLoading} />}

          {list?.data && list?.data.length > 0 && (
            <PagesNavigation isLoading={isLoading} pagination={pagination} />
          )}
        </div>
      </div>
    </div>
  );
}
