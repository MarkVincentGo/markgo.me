/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

const cardStyle = `
*,
*:before,
*:after{
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  outline: 1px solid transparent;
}

.card{
  width: 320px;
  height: 350px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-140px);
  transition: transform 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  cursor: pointer;
  margin: 0 auto;
  flex: 0 0 34%;
}

.card > div{
  position: absolute;
  width: 320px;
  height: 350px;
  padding: 34px 21px;
  transition: all 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
}

.front{
  transform: rotateY(0deg) translateZ(160px); 
  border-radius: 3px;
  box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.4);
  text-align: center;
}

.right{ 
  opacity: 0.08;
  transform: rotateY(90deg) translateZ(160px);
  border-radius: 3px;
  box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.4);
}

.card:hover{
  transform: translateZ(-160px) rotateY( -90deg);
}

.card:hover .front{
  opacity: 0; 
}

.card:hover .right{
  opacity: 1; 
}

.right > .project-card-title{
  margin: 0;
  font-size: 25px;
  letter-spacing: -.25px;
  font-weight: 700;
}

.front > .project-card-title {
  margin-top: 110px;
  font-size: 40px;
  letter-spacing: -.25px;
  font-weight: 700;
}

span{
  margin-left: 13px;
  opacity: .55;
}

.img-wrapper{
  animation: float 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate;
  position: relative;
  top: -340px; right: -120px;
  pointer-events: none;
  backface-visibility: hidden;
}

@keyframes float{
  0%{
    transform: translateZ(20px);
  }
  100%{
    transform: translateY(-21px) translateX(-13px) translateZ(30px);
  }
}

.card:hover ~ .img-wrapper img{
  transform: scale(0.9) translateX(-170px) translateY(320px) rotateZ(80deg);
}

ul{
  margin-left: 21px;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
  list-style: none;
}

li{
  font-size: 20px;
  padding-bottom: 8px;
  position: relative;
}

li:before{
  position: absolute;
  left: -21px;
  opacity: .55;
}


button{
  position: absolute;
  right: 21px; 
  bottom: 34px;
  border: none;
  box-shadow: none;
  background: none;
  color: inherit;
  font-weight: 300;
  font-size: 15px;  
  letter-spacing: -.25px;
  padding: 13px 34px;
  border-radius: 55px;
  background-size: 125% 100%;
  background-position: right;
  cursor: pointer;
  box-shadow: 8px 5px 13px rgba(34,34,34,.08);
  transform: scale(0) skewY(13deg);
  transition: all 150ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  transform-origin: right bottom;
  box-shadow: 0px 0px 2px 1px rgba(20,20,20,0.4);
}

.card:hover button{
  transform: scale(1) skewY(0);
}

.card:not(:hover) button{
  opacity: 0;
}

button:hover{
  background-position: left;
  box-shadow: 0px 0px 3px 2px rgba(20,20,20,0.4);
}

.description{
  width: 250px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 10px;
  font-size: 18px;
}

@keyframes fadeIn{
  0%{
    opacity: 0.33;
    transform: scale(.89);
  }
}

@media only screen and (max-width: 600px){
  body{
    transform: scale(.67);
  }
}

.flip-image {
  height: 150px;
  transform-origin: top right;
  transition: transform 300ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  transition-delay: 100ms;
  transform: translateX(21%) rotateZ(13deg) skewX(3deg);
  pointer-events: none;
}

.card-outer-div {
  margin: 30px auto;
  height: 370px;
}
`;

const ProjectsCard = ({ projectInfo, openProjectModal }) => {
  if (projectInfo) {
    return (
      <div className="card-outer-div">
        <div className="card">
          <div className="front" style={{ backgroundImage: `linear-gradient(180deg, rgba(92,91,94,0) 0%, ${projectInfo.color} 100%)` }}>
            <h1 className="project-card-title">{projectInfo.name}</h1>
            <div className="description">{projectInfo.description}</div>
          </div>
          <div
            className="right"
            onClick={() => openProjectModal(projectInfo)}
            style={{ backgroundImage: `linear-gradient(180deg, ${projectInfo.color} 0%, rgba(225,225,225,1) 100%)` }}
          >
            <h1 className="project-card-title">{projectInfo.name}</h1>
            <ul>
              {projectInfo.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <a href={projectInfo.githubLink} target="_blank" rel="noreferrer noopener" onClick={(e) => e.stopPropagation()}>
              <button type="button" style={{ backgroundColor: `${projectInfo.color}`, color: 'black' }}>Source Code</button>
            </a>
          </div>
        </div>
        <div className="img-wrapper">
          <img src={projectInfo.longThing} alt={projectInfo.name} className="flip-image" />
        </div>
        <style>{cardStyle}</style>
      </div>
    );
  }
  return null;
};

export default ProjectsCard;
