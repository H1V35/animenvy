import { useSearch } from '@/anime/hooks/useSearch';
import { SearchList } from '@/anime/components/SearchList';
import { PagesNavigation } from '@/components/PagesNavigation';

export function SearchPage() {
  const { list, isLoading, pagination } = useSearch();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="page">
      <div className="page__container">
        <div className="page__list">
          {list?.data && list?.data.length > 0 ? (
            <SearchList list={list} isLoading={isLoading} />
          ) : (
            <h2 className="page__title">{'Search not found :('}</h2>
          )}

          {list?.data && list?.data.length > 0 && (
            <PagesNavigation isLoading={isLoading} pagination={pagination} />
          )}
        </div>
      </div>
    </div>
  );
}
