/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const layoutStyle = {
  padding: 20,
  border: '1px solid #DDD',
  backgroundColor: '#e1e1e1',
  fontFamily: 'Montserrat, sans-serif',
  textAlign: 'center',
};


const Layout = ({ children, portfolioButtons }) => (
  <div style={layoutStyle}>
    <Header portfolioButtons={portfolioButtons} />
    {children}
    <Footer portfolioButtons={portfolioButtons} />
  </div>
);

export default Layout;
