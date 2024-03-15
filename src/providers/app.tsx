import React from 'react';
import { WatchlistProvider } from '@/providers/WatchlistProvider';
import { QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/lib/tanstack-query';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <WatchlistProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </WatchlistProvider>
    </React.Suspense>
  );
};
