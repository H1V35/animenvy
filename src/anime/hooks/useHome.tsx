import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSeasonsNow } from '@/anime/api/actions';
import { usePagination } from '@/anime/hooks/usePagination';

export function useHome() {
  const [page, setPage] = React.useState(1);

  const updatePage = (value: number) => {
    setPage(value);
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const {
    data: season,
    error,
    isError,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['home', { page }],
    queryFn: () => getSeasonsNow({ searchParams, page }),
  });

  const { pagination } = usePagination({ list: season, page, updatePage });

  return { season, error, isError, isFetching, isLoading, pagination };
}
