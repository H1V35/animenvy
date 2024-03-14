import { animeApi } from './animeApi';
import type { Anime, Data } from '@/anime/interfaces/anime';
import type { AnimeList } from '@/anime/interfaces/animeList';

// TODO: Abstract page from searchParams

type Props = {
  searchParams: URLSearchParams;
  page?: number;
};

export const getSeasonsNow = async ({ searchParams, page = 1 }: Props): Promise<AnimeList> => {
  searchParams.append('filter', 'tv');
  searchParams.append('page', page.toString());
  searchParams.append('limit', '12');

  const response = await animeApi.get<AnimeList>(`/seasons/now?${searchParams.toString()}`);
  return response;
};

export const getSearch = async ({ searchParams, page = 1 }: Props): Promise<AnimeList> => {
  searchParams.append('filter', 'tv');
  searchParams.append('page', page.toString());
  searchParams.append('limit', '12');

  const response = await animeApi.get<AnimeList>(`/anime?${searchParams.toString()}`);
  return response;
};

export const getAnime = async (id: string): Promise<Data> => {
  const { data } = await animeApi.get<Anime>(`/anime/${id}/full`);
  return data;
};