/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const layoutStyle = (mobileView) => ({
  padding: mobileView ? 5 : 30,
  border: '1px solid #DDD',
  backgroundColor: '#e1e1e1',
  fontFamily: 'Montserrat, sans-serif',
  textAlign: 'center',
});

const Layout = ({ children, portfolioButtons }) => {
  let mobileView = true;
  if (typeof window !== 'undefined') {
    mobileView = window.innerWidth < 500;
  }

  return (
    <div style={layoutStyle(mobileView)}>
      <Header portfolioButtons={portfolioButtons} />
      {children}
      <Footer portfolioButtons={portfolioButtons} />
    </div>
  );
};

export default Layout;
