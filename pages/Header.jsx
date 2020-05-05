/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Buttons';
import Background from './HeaderBackground';

const style = `
.header {
  height: 95vh;
  width: 100%;
  background:  
    linear-gradient(9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), 
    linear-gradient(-9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), 
    linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),
    linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%),
    url(header.gif) repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.name {
  font-size: 60px;
  font-weight: 900;
}

.info {
  color: white;
  margin: 0px;
}

.btn-container {
  display: flex;
  width: 50%;
  max-width: 600px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}

.video-overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background:  
    linear-gradient(9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), 
    linear-gradient(-9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), 
    linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),
    linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.video-box {
  position: relative;
  width: 100%;
  height: 95vh;
  overflow: hidden;
}

.video {
  height: 130%;
}
`;

const Header = ({ portfolioButtons }) => {
  // let mobileView;
  // if (typeof window !== 'undefined') {
  //   mobileView = window.innerWidth < 500;
  // }

  // thinking about removing this component to replace with css bubble animation
  // const videoComponent = (
  //   <video className="video" autoPlay loop muted playsInline>
  //     <source src="https://markgowebsite.s3-us-west-1.amazonaws.com/markgome/header.mp4" type="video/mp4" />
  //   </video>
  // );

  return (
    <div>
      <div className="video-box">
        {/* { mobileView ? <img height="100%" src="squares.jpg" alt="if-on-mobile" /> : videoComponent} */}
        <Background />
        <div className="video-overlay">
          <div className="name info">Mark Vincent Go</div>
          <h3 className="info">Full-Stack Software Engineer</h3>
          <div className="btn-container">
            {portfolioButtons ? portfolioButtons.map((info) => (
              <Button key={JSON.stringify(info)} info={info} />)) : null}
          </div>
        </div>
        <style>{style}</style>
      </div>
    </div>
  );
};


export default Header;
