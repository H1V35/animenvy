import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayout } from '../src/anime/layout/MainLayout';

function App() {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div>
            <h2>Loading...</h2>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
}

export default App;
