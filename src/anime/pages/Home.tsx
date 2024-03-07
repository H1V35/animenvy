import { AnimeList } from '../components/AnimeList';
import { PagesNavigation } from '../components/PagesNavigation';
import { useSeasonNow } from '../hooks/useSeasonNow';

export function HomePage() {
  const { list, isLoading, page, nextPage, prevPage, firstPage, lastPage } = useSeasonNow();

  return (
    <>
      <h2>Season</h2>

      <br />
      <PagesNavigation
        page={page}
        isLoading={isLoading}
        prevPage={prevPage}
        nextPage={nextPage}
        firstPage={firstPage}
        lastPage={lastPage}
      />
      <br />

      {list && <AnimeList list={list} isLoading={isLoading} />}
    </>
  );
}
