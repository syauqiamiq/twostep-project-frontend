import React from 'react';
import { FooterComponent, NavbarComponent } from '../..';

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export default Layout;
