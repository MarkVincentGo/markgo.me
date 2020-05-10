/* eslint-disable react/prop-types */
import React from 'react';
import TechnologiesCard from './TechnologiesCard';
import Background from './HeaderBackground';

const technologiesStyle = `
.outer-tech-container {
  position: relative;
  height: 120vh;
  overflow: hidden;
}

.technologies-container {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  height: 120vh;
  background:  
    url(triangle.svg) center/100% 100% no-repeat,
    linear-gradient(9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), 
    linear-gradient(-9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px),
    linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),
    linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%);
  overflow: hidden;
}

.title {
  font-size: 40px;
  color: white;
  font-weight: bold;
}

.tech-cards-container {
  margin-top: 40px;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

@media (max-width: 1080px) {
  .outer-tech-container {
    height: 1500px;
  }
  
  .technologies-container {
    height: 1500px;
    background:  
      url(triangle.svg) center/300% 124% no-repeat,
      linear-gradient(9deg, rgb(225,225,225) 100px, rgba(0,0,0,0) 20px), 
      linear-gradient(-9deg, rgb(225,225,225) 100px, rgba(0,0,0,0) 20px),
      linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),
      linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
      linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
      linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%);
  }
  
  
  .tech-cards-container {
    height: 75%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}
`;


const Technologies = ({ stacks }) => (
  <div className="outer-tech-container">
    <Background />
    <div className="technologies-container">
      <div className="title">Technologies</div>
      <div className="tech-cards-container">
        {stacks ? stacks.map((card) => (
          <TechnologiesCard key={JSON.stringify(card)} cardInfo={card} />
        )) : null}
      </div>
      <style>{technologiesStyle}</style>
    </div>
  </div>
);


export default Technologies;
