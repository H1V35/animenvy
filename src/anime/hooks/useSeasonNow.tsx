import React from 'react';
import { getSeasonNow } from '../services/actions';
import { AnimeList } from '../interfaces/animeList';

export function useSeasonNow() {
  const [season, setSeason] = React.useState<AnimeList>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await getSeasonNow({ page }).then(setSeason);
      setIsLoading(false);
    })();
  }, [page]);

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    if (season?.pagination.has_next_page === false) return;
    setPage(page + 1);
  };

  const firstPage = () => {
    if (page !== 1) setPage(1);
  };

  const lastPage = () => {
    if (!season) return null;

    const lastVisiblePage = season.pagination.last_visible_page;
    if (page !== lastVisiblePage) setPage(lastVisiblePage);
  };

  return {
    list: season,
    isLoading,
    page,
    prevPage,
    nextPage,
    firstPage,
    lastPage,
  };
}
