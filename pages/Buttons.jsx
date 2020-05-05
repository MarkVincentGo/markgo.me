/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React from 'react';

const style = `
.btn-portfolio {
  height: 50px;
  min-width: 50px;
  width: 150px;

  border-radius: 30px;
  color: white;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  color: white;
  fill: white;
  background-color: rgba(0,0,0,0.6);
  text-decoration: none;
  margin-left:not(:first-child) 20px;
}
.btn-portfolio:hover {
  background-color: rgba(225,225,225,0.8);
  color: black;
  fill: black;
}

.svg {
  height: 35px;
}

.btn-name {
  margin-left: 10px;
}
`;

const Buttons = ({ info }) => {
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window.innerWidth < 940;
  }

  return (
    <a className="btn-portfolio" href={info ? info.link : '#'} target="_blank">
      <svg className="svg hover" viewBox="0 0 24 24" aria-hidden="true"><path d={info ? info.logoPath : ''} /></svg>
      { isMobile ? null : <h4 className="btn-name hover">{info ? info.name : 'null'}</h4> }
      <style>{style}</style>
    </a>
  );
};

export default Buttons;
