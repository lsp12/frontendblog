import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }:ILayoutProps ) => (
  <>
    <header>
      <h1>This is header</h1>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <h1>this Footer</h1>
    </footer>
  </>

);

export default Layout;
