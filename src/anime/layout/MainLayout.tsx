import React from 'react';
import { NavBar } from '../../shared/components/Navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="layout">
      <NavBar />

      <main className="main">
        <div className="main__container">{children}</div>
      </main>

      <div className="background__gradient"></div>
    </div>
  );
}
