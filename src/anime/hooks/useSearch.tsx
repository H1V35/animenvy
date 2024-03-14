import React from 'react';
import { useLocation } from 'react-router-dom';
import { getSearch } from '@/anime/api/actions';
import { usePagination } from '@/anime/hooks/usePagination';
import type { AnimeList } from '@/anime/interfaces/animeList';

export function useSearch() {
  const [search, setSearch] = React.useState<AnimeList>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const updatePage = (value: number) => {
    setPage(value);
  };

  const { pagination } = usePagination({ list: search, page, updatePage });
  const location = useLocation();

  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    (async () => {
      setIsLoading(true);
      await getSearch({ searchParams, page }).then(setSearch);
      setIsLoading(false);
    })();
  }, [location.search, page]);

  return {
    list: search,
    isLoading,
    pagination,
  };
}
