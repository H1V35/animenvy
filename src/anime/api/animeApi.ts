const API_URL = 'https://api.jikan.moe/v4';

const handleErrors = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

type Props = {
  searchUrl: string;
};

const animeApi = {
  get: async <T>({ searchUrl }: Props): Promise<T> => {
    const response = await fetch(`${API_URL}${searchUrl}`);
    handleErrors(response);
    return response.json();
  },
};

export { animeApi };
