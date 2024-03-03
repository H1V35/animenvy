import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MainLayout } from '../anime/layout/MainLayout';
import { lazyImport } from '../utils/lazyImport';

const { HomePage } = lazyImport(() => import('../anime/pages/Home'), 'HomePage');
const { SearchPage } = lazyImport(() => import('../anime/pages/Search'), 'SearchPage');
const { WatchlistPage } = lazyImport(() => import('../anime/pages/Watchlist'), 'WatchlistPage');

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/search', element: <SearchPage /> },
      { path: '/watchlist', element: <WatchlistPage /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
