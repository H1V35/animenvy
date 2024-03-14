import React from 'react';
import { useLocation } from 'react-router-dom';
import { getSearch } from '@/anime/api/actions';
import type { AnimeList } from '@/anime/interfaces/animeList';

export function useSearch() {
  const [search, setSearch] = React.useState<AnimeList>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const location = useLocation();

  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    (async () => {
      setIsLoading(true);
      await getSearch({ searchParams, page }).then(setSearch);
      setIsLoading(false);
    })();
  }, [location.search, page]);

  const hasPrevPage = page !== 1;
  const hasNextPage = search?.pagination.has_next_page;

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    if (hasNextPage === false) return;
    setPage(page + 1);
  };

  const firstPage = () => {
    if (hasPrevPage) setPage(1);
  };

  const lastPage = () => {
    if (!search) return null;

    const lastVisiblePage = search.pagination.last_visible_page;
    if (page !== lastVisiblePage) setPage(lastVisiblePage);
  };

  return {
    list: search,
    isLoading,
    pagination: { page, hasPrevPage, hasNextPage, prevPage, nextPage, firstPage, lastPage },
  };
}
