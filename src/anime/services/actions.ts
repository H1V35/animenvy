import { animeApi } from '../api/animeApi';
import type { Anime, Data } from '../interfaces/anime';
import type { AnimeList } from '../interfaces/animeList';

type Props = {
  searchParams: URLSearchParams;
  page?: number;
};

export const getSeasonsNow = async ({ searchParams, page = 1 }: Props): Promise<AnimeList> => {
  searchParams.append('filter', 'tv');
  searchParams.append('page', page.toString());
  searchParams.append('limit', '12');

  const response = await animeApi.get<AnimeList>({
    searchUrl: `/seasons/now?${searchParams.toString()}`,
  });
  return response;
};

export const getSearch = async ({ searchParams, page = 1 }: Props): Promise<AnimeList> => {
  searchParams.append('filter', 'tv');
  searchParams.append('page', page.toString());
  searchParams.append('limit', '12');

  const response = await animeApi.get<AnimeList>({
    searchUrl: `/anime?${searchParams.toString()}`,
  });
  return response;
};

export const getAnime = async (id: string): Promise<Data> => {
  const { data } = await animeApi.get<Anime>({ searchUrl: `/anime/${id}/full` });
  return data;
};
