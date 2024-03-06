import { useSeasonNow } from '../hooks/useSeasonNow';

export function HomePage() {
  const { season, isLoading, page, nextPage, prevPage } = useSeasonNow();

  if (isLoading) return <p>Loading...</p>;

  if (!season) return null;

  return (
    <>
      <h2>Season</h2>
      <br />
      <button onClick={prevPage}>Prev</button>
      <p>{page}</p>
      <button onClick={nextPage}>Next</button>
      <br />
      <div>
        {season.data.map((anime) => {
          return <img key={anime.mal_id} src={anime.images.webp.image_url} alt="" />;
        })}
      </div>
    </>
  );
}
