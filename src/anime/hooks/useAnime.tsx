import React from 'react';
import { getAnime } from '../services/actions';
import type { Data } from '../interfaces/anime';

export function useAnime(animeId: string) {
  const [anime, setAnime] = React.useState<Data>();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await getAnime(animeId).then(setAnime);
      setIsLoading(false);
    })();
  }, [animeId]);

  return { anime, isLoading };
}
