/* eslint-disable react/prop-types */
import React from 'react';
import TechnologiesCard from './TechnologiesCard';

const technologiesStyle = `
.technologies-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
}

.title {
  font-size: 40px;
  color: white;
  font-weight: bold;
}
`;

const desktopSpecificStyles = `
.technologies-container {
  height: 100vh;
  background:  
    url(triangle.svg) center,
    linear-gradient(9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), 
    linear-gradient(-9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px),
    linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),
    linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%),
    url(squares.jpg) center;
}

.tech-cards-container {
  margin-top: 40px;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
`;

const mobileSpecificStyles = `
.technologies-container {
  height: 1500px;
  background:  
    url(triangleMobile.svg) center,
    linear-gradient(9deg, rgb(225,225,225) 100px, rgba(0,0,0,0) 20px), 
    linear-gradient(-9deg, rgb(225,225,225) 100px, rgba(0,0,0,0) 20px),
    linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),
    linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%),
    url(squares.jpg) center;
  
}


.tech-cards-container {
  height: 75%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Technologies = ({ stacks }) => {
  let mobileView;
  if (typeof window !== 'undefined') {
    mobileView = window.innerWidth < 1080;
  }

  return (
    <div className="technologies-container">
      <div className="title">Technologies</div>
      <div className="tech-cards-container">
        {stacks ? stacks.map((card) => (
          <TechnologiesCard key={JSON.stringify(card)} cardInfo={card} />
        )) : null}
      </div>
      { mobileView
        ? <style>{mobileSpecificStyles}</style>
        : <style>{desktopSpecificStyles}</style>}
      <style>{technologiesStyle}</style>
    </div>
  );
};

export default Technologies;
