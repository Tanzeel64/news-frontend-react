import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-indigo-100">
      <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">{children}</div>
    </main>
  );
};

export default Layout;
