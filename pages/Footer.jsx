/* eslint-disable react/prop-types */
import React from 'react';

const footerStyle = `
.footer-container {
  width: 100%;
  height: 150px;
  background:     
    linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.5)),
    linear-gradient(217deg, rgba(255,0,0,.7), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.7), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.7), rgba(0,0,255,0) 70.71%);
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 30px;
}

.links {
  width: 40%;
  padding-top: 30px;
  display: flex;
  justify-content: space-evenly;
}

.footer-link {
  color: white;
  text-decoration: none;
}

.footer-svg {
  height: 50px;
  fill: rgba(255,255,255,0.7);
}

.footer-svg:hover {
  fill: rgba(0,0,0,0.7);
  transform: scale(1.3);
}
`;

const Footer = ({ portfolioButtons }) => {
  if (portfolioButtons) {
    return (
      <div className="footer-container">
        <div className="links left">
          {portfolioButtons.map((site) => (
            <a className="footer-link" target="_blank" rel="noreferrer noopener" href={site.link}>
              <svg className="footer-svg" viewBox="0 0 24 24" aria-hidden="true"><path d={site.logoPath} /> </svg>
              </a>))}
        </div>
        <div className="links">
          <div>Site by MARK VINCENT GO</div>
        </div>
        <style>{footerStyle}</style>
      </div>
    );
  }
  return null;
};

export default Footer;
