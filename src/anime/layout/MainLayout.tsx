import React from 'react';
import { NavBar } from '@/components/Navbar';
import { Aside } from '@/anime/components/Aside';

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="layout">
      <div className="layout__container">
        <NavBar />

        <Aside />

        <main className="main">
          <div className="main__container">
            {children}
            <div className="background__gradient"></div>
          </div>
        </main>
      </div>
    </div>
  );
}
