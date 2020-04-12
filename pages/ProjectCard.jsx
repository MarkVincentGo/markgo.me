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
  height: 450px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-140px);
  transition: transform 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  cursor: pointer;
}

.card > div{
  position: absolute;
  width: 320px;
  height: 450px;
  padding: 34px 21px;
  transition: all 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
}

.front{
  transform: rotateY(0deg) translateZ(160px); 
  border-radius: 34px 3px 0 0;
  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.66);
}

.right{ 
  background-image: linear-gradient(0deg, rgba(145,141,144,1) 0%, rgba(92,91,94,0) 100%);
  opacity: 0.08;
  transform: rotateY(90deg) translateZ(160px);
  border-radius: 0 0 3px 34px;
  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.66);
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

h1,h2{
  margin: 0;
  font-size: 32px;
  letter-spacing: -.25px;
  transform: translateX(-44px);
  font-weight: 700;
}

h2{
  font-size: 21px;
  transform: translateX(-34px);
}

p{
  margin: 0;
  font-weight: 300;
  font-size: 16px;
}

span{
  margin-left: 13px;
  opacity: .55;
}

img{
  transform-origin: top right;
  transition: transform 300ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  transition-delay: 100ms;
  transform: translateX(21%) rotateZ(13deg) skewX(3deg);
  pointer-events: none;
}

.img-wrapper{
  animation: float 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate;
  position: relative;
  top: -420px; right: -120px;
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
  transform: scale(0.9) translateX(-40%) translateY(170%) rotateZ(80deg);
}

ul{
  margin-left: 21px;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
  list-style: none;
}

li{
  padding-bottom: 8px;
  position: relative;
}

li:before{
  content: 'x';
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
  font-weight: 700;
  padding: 13px 34px;
  border-radius: 55px;
  background-image: linear-gradient(130deg, rgba(117,51,165,1)  50%, rgba(51,46,57,.89) 100%);
  background-size: 125% 100%;
  background-position: right;
  cursor: pointer;
  box-shadow: 8px 5px 13px rgba(34,34,34,.08);
  transform: scale(0) skewY(13deg);
  transition: all 150ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  transform-origin: right bottom;
}

.card:hover button{
  transform: scale(1) skewY(0);
}

.card:not(:hover) button{
  opacity: 0;
}

button:hover{
  background-position: left;
}

.price{
  position: absolute;
  bottom: 34px;
  left: 21px;
  font-size: 34px;
  opacity: .34;
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
  height: 200px;
`;

const ProjectCard = ({ projectInfo }) => {
  return (
    <div>
      <div className="card">
        <div className="front" style={{ backgroundImage: `linear-gradient(180deg, ${projectInfo.color} 0%, rgba(92,91,94,0) 100%)` }}>
          <h1>{projectInfo.name}</h1>
          <p>7.7 deck<span>2018</span></p>
          <p className="price">$ 89.00</p>
        </div>
        <div className="right" style={{ backgroundImage: `linear-gradient(180deg, rgba(225,225,225,1) 0%, ${projectInfo.color} 100%)` }}>
          <h1>{projectInfo.name}</h1>
          <ul>
            {projectInfo.technologies.map((technology) => (
              <li>{technology}</li>
            ))}
          </ul>
          <button type="button">Source Code</button>
        </div>
      </div>
      <div className="img-wrapper">
        <img src={projectInfo.longThing} alt={projectInfo.name} className="flip-image" />
      </div>
      <style>{cardStyle}</style>
    </div>
  );
};

export default ProjectCard;
