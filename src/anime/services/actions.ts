import { animeApi } from '../api/animeApi';
import type { AnimeList } from '../interfaces/animeList';

type GetSeasonNowProps = {
  page?: number;
};

export const getSeasonNow = async ({ page = 1 }: GetSeasonNowProps): Promise<AnimeList> => {
  const params = new URLSearchParams();

  params.append('filter', 'tv');
  params.append('page', page.toString());
  params.append('limit', '12');

  const response = await animeApi.get<AnimeList>({ endpoint: 'seasons/now', params });
  return response;
};

type GetSearchProps = {
  searchParams: URLSearchParams;
  page?: number;
};

export const getSearch = async ({ searchParams, page = 1 }: GetSearchProps): Promise<AnimeList> => {
  const params = searchParams;

  params.append('filter', 'tv');
  params.append('page', page.toString());
  params.append('limit', '12');

  const response = await animeApi.get<AnimeList>({ endpoint: 'anime', params });
  return response;
};
