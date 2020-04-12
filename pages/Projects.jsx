import React from 'react';
import Card from './ProjectCard';

const projectStyle = `
.projects-container {
  margin-top: 100px;
}

.title {
  font-size: 40px;
  font-weight: 700;
}

.cards-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
`;

const projects = [
  {
    name: 'Big Tuna',
    description: 'House Tour Scheduling Application',
    color: '#42f5ef',
    githubLink: '',
    longThing: '/house-key.png',
    technologies: ['React', 'Styled-Components', 'Docker', 'Express | NodeJS, MySQL'],
  },
  {
    name: 'Bon-App-Etit',
    description: 'Restaurant Reservation Service',
    color: '#915ce6',
    githubLink: '',
    longThing: '/utensil.png',
    technologies: ['AWS EC2', 'NGINX', 'Express | NodeJS', 'Docker', 'PostgreSQL'],
  },
  {
    name: 'What2Cook',
    description: 'Recipe Generator Application',
    color: '#3bd950',
    githubLink: '',
    longThing: '/spatula.png',
    technologies: ['Vue', 'CSS', 'Express | NodeJS', 'MongoDB'],
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="title">Projects</div>
      <div className="cards-container">
        {projects.map((card) => (
          <Card projectInfo={card} />))}
        <style>{projectStyle}</style>
      </div>
    </div>
  );
};

export default Projects;
