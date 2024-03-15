import { useQuery } from '@tanstack/react-query';
import { getAnime } from '@/anime/api/actions';

export function useAnime(animeId: string) {
  const {
    data: anime,
    error,
    isError,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['anime', animeId],
    queryFn: () => getAnime(animeId),
  });

  return { anime, error, isError, isFetching, isLoading };
}
