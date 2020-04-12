/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const layoutStyle = {
  border: '1px solid #DDD',
  backgroundColor: '#e1e1e1',
  fontFamily: 'Montserrat, sans-serif',
  textAlign: 'center',
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
