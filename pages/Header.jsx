import React from 'react';
import Button from './Buttons';

const style = `
.header {
  height: 95vh;
  width: 100%;
  background:  
    linear-gradient(9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), 
    linear-gradient(-9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), 
    linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%),
    url(https://media.giphy.com/media/ZcdJJvDqTgdGZK8Xd3/giphy.gif) repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.name {
  font-size: 60px;
  font-weight: 700;
}

.info {
  color: white;
  margin: 0px;
}

.btn-container {
  display: flex;
  width: 60%;
  max-width: 600px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}
`;

const portfolioButtons = [
  {
    name: 'LinkedIn',
    logoPath: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
    link: 'https://www.linkedin.com/in/mark-vincent-go/',
  },
  {
    name: 'GitHub',
    logoPath: 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3',
    link: 'https://github.com/MarkVincentGo',
  },
  {
    name: 'Resume',
    logoPath: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
    link: '/MG_SE_Resume.pdf',
  },
];

const Header = () => {
  return (
    <div className="header">
      <style>{style}</style>
      <div className="name info">Mark Vincent Go</div>
      <h3 className="info">Full-Stack Software Engineer</h3>
      <div className="btn-container">
        {portfolioButtons.map((info) => (
          <Button info={info} />))}
      </div>
    </div>
  );
};

export default Header;
