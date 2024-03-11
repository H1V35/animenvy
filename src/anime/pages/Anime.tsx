import { useParams } from 'react-router-dom';
import { useAnime } from '../hooks/useAnime';

export function AnimePage() {
  const { animeId } = useParams();
  const { anime, isLoading } = useAnime(animeId!);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="page">
      <div className="page__container">
        <h2 className="page__title">Anime page: {anime?.title_english}</h2>
      </div>
    </div>
  );
}
