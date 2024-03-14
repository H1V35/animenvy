const API_URL = 'https://api.jikan.moe/v4';

export const animeApi = {
  get: async <T>(searchUrl: string): Promise<T> => {
    const response = await fetch(`${API_URL}${searchUrl}`);
    return response.json();
  },
};
