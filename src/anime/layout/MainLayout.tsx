import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <div>
        <h1>AnimEnvy</h1>
      </div>
      <div>{children}</div>
    </div>
  );
}
