import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Router>{children}</Router>
    </Suspense>
  );
};
