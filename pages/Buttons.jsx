/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React from 'react';

const style = `
.btn-portfolio {
  height: 50px;
  min-width: 50px;
  width: 150px;
  border: 1px solid white;
  border-radius: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  fill: white;
  background-color: rgba(0,0,0,0.6);
  text-decoration: none;
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
  return (
    <a className="btn-portfolio" href={info.link} target="_blank">
      <svg className="svg hover" viewBox="0 0 24 24" aria-hidden="true"><path d={info.logoPath} /></svg>
      <h4 className="btn-name hover">{info.name}</h4>
      <style>{style}</style>
    </a>
  );
};

export default Buttons;
