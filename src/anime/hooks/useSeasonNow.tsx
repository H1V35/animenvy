import React from 'react';
import { useLocation } from 'react-router-dom';
import { getSeasonsNow } from '../services/actions';
import type { AnimeList } from '../interfaces/animeList';

export function useSeasonNow() {
  const [season, setSeason] = React.useState<AnimeList>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const location = useLocation();

  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    (async () => {
      setIsLoading(true);
      await getSeasonsNow({ searchParams, page }).then(setSeason);
      setIsLoading(false);
    })();
  }, [location.search, page]);

  const hasPrevPage = page !== 1;
  const hasNextPage = season?.pagination.has_next_page;

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
    if (!season) return null;

    const lastVisiblePage = season.pagination.last_visible_page;
    if (page !== lastVisiblePage) setPage(lastVisiblePage);
  };

  return {
    list: season,
    isLoading,
    pagination: { page, hasPrevPage, hasNextPage, prevPage, nextPage, firstPage, lastPage },
  };
}
