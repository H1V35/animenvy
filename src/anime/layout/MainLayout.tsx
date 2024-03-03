import React from 'react';
import { NavBar } from '../../shared/components/Navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <NavBar />

      <main>{children}</main>
    </div>
  );
}
