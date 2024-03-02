import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MainLayout } from '../anime/layout/MainLayout';
import { lazyImport } from '../utils/lazyImport';

const { AnimeListPage } = lazyImport(() => import('../anime/pages/AnimeList'), 'AnimeListPage');

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
      { path: '', element: <AnimeListPage /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
