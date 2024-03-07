import { animeApi } from '../api/animeApi';
import type { AnimeList } from '../interfaces/animeList';

type Props = {
  page?: number;
};

export const getSeasonNow = async ({ page = 1 }: Props): Promise<AnimeList> => {
  const params = new URLSearchParams();

  params.append('filter', 'tv');
  params.append('page', page.toString());
  params.append('limit', '12');

  const response = await animeApi.get<AnimeList>({ endpoint: 'seasons/now', params });
  return response;
};
