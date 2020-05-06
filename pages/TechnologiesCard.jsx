/* eslint-disable react/prop-types */
import React from 'react';

const techCardStyle = `
.tech-card {
  width: 220px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: rgba(225,225,225, 0.85);
  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.66);
  padding: 30px;
  height: 270px;
}

.grow { 
  transition: all .2s ease-in-out; 
}

.grow:hover { 
  transform: scale(1.1); 
}

.tech-card-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}

.tech-list-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 18px;
}

@media (max-width: 1080px) {
  .tech-card {
    height: 210px;
  }
}
`;


const TechnologiesCard = ({ cardInfo }) => {
  if (cardInfo) {
    return (
      <div className="tech-card grow">
        <div className="tech-card-title">{cardInfo.stack}</div>
        <div className="tech-list-container">
          {cardInfo.technologies.map((technology) => (
            <div key={technology}>{technology}</div>
          ))}
        </div>
        <style>{techCardStyle}</style>
      </div>
    );
  }
  return null;
};

export default TechnologiesCard;
