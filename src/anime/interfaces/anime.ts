/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Anime {
  data: Data;
}

export interface Data {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string | null;
  year: number;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: any[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: any[];
  themes: any[];
  demographics: Demographic[];
  relations: Relation[];
  theme: Theme;
  external: External[];
  streaming: External[];
}

export interface Aired {
  from: string;
  to: string;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: From;
}

export interface From {
  day: number;
  month: number;
  year: number;
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface Demographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface External {
  name: string;
  url: string;
}

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Relation {
  relation: string;
  entry: Demographic[];
}

export interface Theme {
  openings: string[];
  endings: string[];
}

export interface Title {
  type: string;
  title: string;
}

export interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Images;
}

export interface Images {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
}

/* eslint-enable @typescript-eslint/no-explicit-any */
