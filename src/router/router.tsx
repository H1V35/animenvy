import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { lazyImport } from '../utils/lazyImport';

const { AnimeListPage } = lazyImport(() => import('../anime/pages/AnimeList'), 'AnimeListPage');

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <AnimeListPage />,
      },
      {
        path: '*',
        element: <Navigate to="." />,
      },
    ],
  },
  {},
]);
