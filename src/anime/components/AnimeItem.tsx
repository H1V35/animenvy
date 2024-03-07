import { Datum } from '../interfaces/animeList';

type AnimeItem = {
  anime: Datum;
};

export function AnimeItem({
  anime: {
    title_english,
    title,
    images: {
      webp: { image_url },
    },
    score,
  },
}: AnimeItem) {
  return (
    <div className="animeItem">
      <div className="animeItem__container">
        <div className="animeItem__cover">
          <img src={image_url} alt={`${title_english} cover`} className="animeItem__cover--image" />
          <p className="animeItem__score">{score}</p>
        </div>

        <h3 className="animeItem__title" title={title_english || title}>
          {title_english || title}
        </h3>
      </div>
    </div>
  );
}
