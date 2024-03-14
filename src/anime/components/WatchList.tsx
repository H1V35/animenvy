import { AnimeItem } from '@/anime/components/AnimeItem';
import type { Datum } from '@/anime/interfaces/animeList';

type WatchListProps = {
  list: Datum[];
};

export function WatchList({ list }: WatchListProps) {
  if (!list) return null;

  return (
    <div className="animeList">
      <div className="animeList__container">
        {list.map((anime) => (
          <AnimeItem key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
