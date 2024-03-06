const API_URL = 'https://api.jikan.moe/v4';

const handleErrors = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

type Props = {
  endpoint: string;
  params?: URLSearchParams;
};

const animeApi = {
  get: async <T>({ endpoint, params }: Props): Promise<T> => {
    const response = await fetch(`${API_URL}/${endpoint}?${params}`);
    handleErrors(response);
    return response.json();
  },
};

export { animeApi };
