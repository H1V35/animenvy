import axios from 'axios';

const API_URL = 'https://api.jikan.moe/v4';

export const animeApi = axios.create({
  baseURL: API_URL,
});
