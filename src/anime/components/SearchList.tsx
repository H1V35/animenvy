import { SearchItem } from '@/anime/components/SearchItem';
import type { AnimeList } from '@/anime/interfaces/animeList';

type SearchListProps = {
  list: AnimeList;
  isLoading: boolean;
};

export function SearchList({ list, isLoading }: SearchListProps) {
  if (!list) return null;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="searchList">
      <div className="searchList__container">
        {list.data.map((anime) => (
          <SearchItem key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
