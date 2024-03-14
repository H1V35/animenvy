import { useParams } from 'react-router-dom';
import { useAnime } from '@/anime/hooks/useAnime';
import { AnimeDetails } from '@/anime/components/AnimeDetails';

export function AnimePage() {
  const { animeId } = useParams();
  const { anime, isLoading } = useAnime(animeId!);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="page">
      <div className="page__container">
        {anime ? (
          <AnimeDetails anime={anime} />
        ) : (
          <h2 className="page__title">{'Anime not found :('}</h2>
        )}
      </div>
    </div>
  );
}
