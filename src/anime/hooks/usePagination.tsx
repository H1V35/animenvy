import { AnimeList } from '@/anime/interfaces/animeList';

type usePaginationProps = {
  list: AnimeList | undefined;
  page: number;
  updatePage: (value: number) => void;
};

export function usePagination({ list, page, updatePage }: usePaginationProps) {
  const hasPrevPage = page !== 1;
  const hasNextPage = list?.pagination.has_next_page;

  const prevPage = () => {
    if (page > 1) updatePage(page - 1);
  };

  const nextPage = () => {
    if (hasNextPage === false) return;
    updatePage(page + 1);
  };

  const firstPage = () => {
    if (hasPrevPage) updatePage(1);
  };

  const lastPage = () => {
    if (!list) return null;

    const lastVisiblePage = list.pagination.last_visible_page;
    if (page !== lastVisiblePage) updatePage(lastVisiblePage);
  };

  return {
    pagination: {
      page,
      hasPrevPage,
      hasNextPage,
      prevPage,
      nextPage,
      firstPage,
      lastPage,
    },
  };
}
