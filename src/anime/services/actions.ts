import { animeApi } from '../api/animeApi';
import type { Season } from '../interfaces/season';

type Props = {
  page?: number;
};

export const getSeasonNow = async ({ page = 1 }: Props): Promise<Season> => {
  const params = new URLSearchParams();

  params.append('filter', 'tv');
  params.append('page', page.toString());

  const response = await animeApi.get<Season>({ endpoint: 'seasons/now', params });
  return response;
};
