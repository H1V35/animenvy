import { AnimeList } from '../interfaces/animeList';
import { AnimeItem } from './AnimeItem';

type AnimeListProps = {
  list: AnimeList;
  isLoading: boolean;
};

export function AnimeList({ list, isLoading }: AnimeListProps) {
  if (!list) return null;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {list.data.map((anime) => {
        return <AnimeItem key={anime.mal_id} anime={anime} />;
      })}
    </div>
  );
}
