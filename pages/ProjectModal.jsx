/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

const modalStyle = `
.modal-container {
  font-family: "Montserrat", sans-serif;
}

.modal-button {
  width: 180px;
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

.video {
  width: 100%;
  height: 500px
}
`;

const desktopSpecificStyles = `
.modal-container {
  display: flex;
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
  height: 100%;
}

.modal-right {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal-project-description {
  text-align: justify;
  text-justify: inter-word;
  width: 85%;

}
`;

const mobileSpecificStyles = `
.modal-container: {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-image {
  width: 100%;
}

.modal-right {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

const ProjectModal = ({ selectedProject, closeProjectModal }) => {
  let mobileView;
  if (typeof window !== 'undefined') {
    mobileView = window.innerWidth < 1080;
  }

  if (selectedProject) {
    return (
      <div className="modal-container">
        { selectedProject.demo.search(/\.mp4$/) > 0
          ? (
            <div className="modal-left project-image">
              <video className="video" autoPlay loop muted playsinline><source src={selectedProject.demo} type="video/mp4" /></video>
            </div>
          )
          : <img className="modal-left project-image" alt="project-demo" src={selectedProject.demo.length ? selectedProject.demo : 'app-under-construction.jpg'} /> }
        <div className="modal-right">
          <div className="modal-project-description">{selectedProject.modalDescription}</div>
          <a className="modal-button" href={selectedProject.githubLink} target="_blank" rel="noreferrer noopener">Source Code</a>
          <div className="modal-button" onClick={closeProjectModal}>Exit</div>
        </div>
        {mobileView
          ? <style>{mobileSpecificStyles}</style>
          : <style>{desktopSpecificStyles}</style>}
        <style>{modalStyle}</style>
      </div>
    );
  }
  return null;
};

export default ProjectModal;
