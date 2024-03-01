const API_URL = 'https://api.jikan.moe/v4';

const handleErrors = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const animeApi = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_URL}/${endpoint}`);
    handleErrors(response);
    return response.json();
  },
};

export { animeApi };
