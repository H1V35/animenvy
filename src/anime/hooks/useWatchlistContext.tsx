import React from 'react';
import { WatchlistContext } from '@/providers/WatchlistProvider';

export function useWatchlistContext() {
  return React.useContext(WatchlistContext);
}
