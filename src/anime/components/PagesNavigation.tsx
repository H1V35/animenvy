import type { PagesNavigation } from '../interfaces/pagesNavigation';

type PagesNavigationProps = {
  isLoading: boolean;
  pagination: PagesNavigation;
};

// TODO: Componentization

export function PagesNavigation({
  isLoading,
  pagination: { page, hasPrevPage, hasNextPage, prevPage, nextPage, firstPage, lastPage },
}: PagesNavigationProps) {
  return (
    <div className="pagesNavigation">
      <button
        onClick={firstPage}
        disabled={isLoading || !hasPrevPage}
        title="First page"
        className="pagesNavigation--button"
      >
        <p>&#171;</p>
      </button>

      <button
        onClick={prevPage}
        disabled={isLoading || !hasPrevPage}
        title="Previous page"
        className="pagesNavigation--button"
      >
        <p>&#8249;</p>
      </button>

      <p className="pagesNavigation--currentPage">{page}</p>

      <button
        onClick={nextPage}
        disabled={isLoading || !hasNextPage}
        title="Next page"
        className="pagesNavigation--button"
      >
        <p>&#8250;</p>
      </button>

      <button
        onClick={lastPage}
        disabled={isLoading || !hasNextPage}
        title="Last page"
        className="pagesNavigation--button"
      >
        <p>&#187;</p>
      </button>
    </div>
  );
}
