import React from 'react';
import { getSeasonNow } from '../services/actions';
import { Season } from '../interfaces/season';

export function useSeasonNow() {
  const [season, setSeason] = React.useState<Season>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await getSeasonNow({ page }).then(setSeason);
      setIsLoading(false);
    })();
  }, [page]);

  const nextPage = () => {
    if (season?.pagination.has_next_page === false) return;
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return {
    season: season,
    isLoading,
    page: isLoading ? 'Loading...' : page,
    nextPage,
    prevPage,
  };
}
