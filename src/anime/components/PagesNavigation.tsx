type PagesNavigationProps = {
  page: number;
  isLoading: boolean;
  prevPage: () => void;
  nextPage: () => void;
  firstPage: () => void;
  lastPage: () => void;
};

export function PagesNavigation({
  page,
  isLoading,
  prevPage,
  nextPage,
  firstPage,
  lastPage,
}: PagesNavigationProps) {
  return (
    <div>
      <button onClick={firstPage} disabled={isLoading} title="First page">
        {'<<'}
      </button>

      <button onClick={prevPage} disabled={isLoading} title="Previous page">
        {'<'}
      </button>

      <p>{page}</p>

      <button onClick={nextPage} disabled={isLoading} title="Next page">
        {'>'}
      </button>

      <button onClick={lastPage} disabled={isLoading} title="Last page">
        {'>>'}
      </button>
    </div>
  );
}
