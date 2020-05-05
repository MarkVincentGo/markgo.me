/* eslint-disable react/prop-types */
import React from 'react';
import '../background.scss';

const HeaderBackground = ({ children, style }) => (
  <div className="header-background">
    {(new Array(50).fill(0)).map(() => (<span />))}
    { children }
    <style>{style}</style>
  </div>
);

export default HeaderBackground;
