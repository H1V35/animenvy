import React from 'react';
import { WatchlistProvider } from '@/providers/WatchlistProvider';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <WatchlistProvider>{children}</WatchlistProvider>
    </React.Suspense>
  );
};
