import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSearch } from '@/anime/api/actions';
import { usePagination } from '@/anime/hooks/usePagination';

export function useSearch() {
  const [page, setPage] = React.useState(1);

  const updatePage = (value: number) => {
    setPage(value);
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const {
    data: search,
    error,
    isError,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['search', { searchParams: searchParams.toString(), page }],
    queryFn: () => getSearch({ searchParams, page }),
  });

  const { pagination } = usePagination({ list: search, page, updatePage });

  return { list: search, error, isError, isFetching, isLoading, pagination };
}
