import React from 'react';
import { useLocation } from 'react-router-dom';
import { getSeasonsNow } from '@/anime/api/actions';
import { usePagination } from '@/anime/hooks/usePagination';
import type { AnimeList } from '@/anime/interfaces/animeList';

export function useHome() {
  const [season, setSeason] = React.useState<AnimeList>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const updatePage = (value: number) => {
    setPage(value);
  };

  const { pagination } = usePagination({ list: season, page, updatePage });
  const location = useLocation();

  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    (async () => {
      setIsLoading(true);
      await getSeasonsNow({ searchParams, page }).then(setSeason);
      setIsLoading(false);
    })();
  }, [location.search, page]);

  return {
    season,
    isLoading,
    pagination,
  };
}
