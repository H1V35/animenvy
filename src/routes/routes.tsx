import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MainLayout } from '../anime/layout/MainLayout';
import { lazyImport } from '../utils/lazyImport';

const { HomePage } = lazyImport(() => import('../anime/pages/Home'), 'HomePage');

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
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
