/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

const modalStyle = `
.modal-container {
  display: flex;
  font-family: "Montserrat", sans-serif;
}

.modal-button {
  width: 200px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 55px;
  text-decoration: none;
  margin-top: 20px;
  text-align: center;
  background: 
  linear-gradient(rgba(150,150,150,.4), rgba(150,150,150,.4)),
  linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
  linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
  linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%);
  color: black;
  box-shadow: 0px 0px 3px 2px rgba(20,20,20,0.4);
}

.modal-button:hover {
  background: 
    linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),
    linear-gradient(127deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
    linear-gradient(217deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%);
  box-shadow: 0px 0px 4px 3px rgba(20,20,20,0.5);
}

.project-image {
  width: 70%;
}

.modal-right {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

const ProjectModal = ({ selectedProject, closeProjectModal }) => {
  if (selectedProject) {
    return (
      <div className="modal-container">
        <img className="modal-left project-image" alt="project-demo" src={selectedProject.demo.length ? selectedProject.demo : 'app-under-construction.jpg'} />
        <div className="modal-right">
          <div>This is my project</div>
          <a className="modal-button" href={selectedProject.githubLink} target="_blank" rel="noreferrer noopener">Source Code</a>
          <div className="modal-button" onClick={closeProjectModal}>Exit</div>
        </div>
        <style>{modalStyle}</style>
      </div>
    );
  }
  return null;
};

export default ProjectModal;
