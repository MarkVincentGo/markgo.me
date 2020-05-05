/* eslint-disable react/prop-types */
import React from 'react';
import '../background.scss';

const HeaderBackground = ({ children }) => (
  <div className="header-background">
    {(new Array(50).fill(0)).map(() => (<span />))}
    { children }
  </div>
);

export default HeaderBackground;
