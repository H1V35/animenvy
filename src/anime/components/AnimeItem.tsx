import { Datum } from '../interfaces/animeList';

type AnimeItem = {
  anime: Datum;
};

export function AnimeItem({
  anime: {
    title_english,
    images: {
      webp: { image_url },
    },
    score,
  },
}: AnimeItem) {
  return (
    <div>
      <img src={image_url} alt={`${title_english} cover`} />
      <p>{title_english}</p>
      <p>{score}</p>
    </div>
  );
}
