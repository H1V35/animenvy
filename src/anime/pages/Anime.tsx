import { useParams } from 'react-router-dom';
import { useAnime } from '@/anime/hooks/useAnime';
import { AnimeDetails } from '@/anime/components/AnimeDetails';

export function AnimePage() {
  const { animeId } = useParams();
  const { anime, isLoading } = useAnime(animeId!);

  if (!anime) return null;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="page">
      <div className="page__container">
        <AnimeDetails anime={anime} />
      </div>
    </div>
  );
}
