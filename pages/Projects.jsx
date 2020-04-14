/* eslint-disable react/prop-types */
import React from 'react';
import Card from './ProjectsCard';

const projectStyle = `
.projects-container {
  margin-top: 100px;
}

.projects-title {
  font-size: 40px;
  font-weight: 700;
}

.cards-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 65%;
  margin: 30px auto;
}
`;

const Projects = ({ openProjectModal, projects }) => (
  <div className="projects-container">
    <div className="projects-title">Projects</div>
    <div className="cards-container">
      {projects ? projects.map((card) => (
        <Card
          key={JSON.stringify(card)}
          projectInfo={card}
          openProjectModal={openProjectModal}
        />
      )) : null}
      <style>{projectStyle}</style>
    </div>
  </div>
);

export default Projects;
