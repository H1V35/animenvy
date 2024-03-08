export interface PagesNavigation {
  page: number;
  hasPrevPage: boolean;
  hasNextPage?: boolean;
  prevPage: () => void;
  nextPage: () => void;
  firstPage: () => void;
  lastPage: () => void;
}
