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
    <div className="pagesNavigation">
      <button
        onClick={firstPage}
        disabled={isLoading}
        title="First page"
        className="pagesNavigation--button"
      >
        <p>&#171;</p>
      </button>

      <button
        onClick={prevPage}
        disabled={isLoading}
        title="Previous page"
        className="pagesNavigation--button"
      >
        <p>&#8249;</p>
      </button>

      <p className="pagesNavigation--currentPage">{page}</p>

      <button
        onClick={nextPage}
        disabled={isLoading}
        title="Next page"
        className="pagesNavigation--button"
      >
        <p>&#8250;</p>
      </button>

      <button
        onClick={lastPage}
        disabled={isLoading}
        title="Last page"
        className="pagesNavigation--button"
      >
        <p>&#187;</p>
      </button>
    </div>
  );
}
