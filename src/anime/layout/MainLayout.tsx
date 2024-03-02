import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <header>
        <h1>AnimEnvy</h1>
      </header>

      <main>{children}</main>
    </div>
  );
}
