import React from 'react';
import { NavBar } from '../../shared/components/Navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="layout__container">
      <NavBar />

      <main className="main__container">{children}</main>
    </div>
  );
}
