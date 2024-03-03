import { Suspense } from 'react';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <Suspense fallback={<h2>Loading...</h2>}>{children}</Suspense>;
};
