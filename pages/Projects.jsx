import React from 'react';
import Card from './ProjectCard';

const aboutStyle = `
.about-container {
  margin-top: 100px;
}

.title {
  font-size: 40px;
  font-weight: 700;
}

.cards-container {
  display: flex;
  justify-content: space-evenly;
}
`;

const projects = [
  
];

const Projects = () => {
  return (
    <div className="about-container">
      <div className="title">About Me</div>
      <div className="cards-container">
        {[1,2,3].map((card) => (
          <Card/>))}
        <style>{aboutStyle}</style>
      </div>
    </div>
        
  );
};

export default Projects;
