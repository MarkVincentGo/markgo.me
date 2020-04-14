import React from 'react';

const aboutStyle = `
.about-container {
  margin-top: 100px;
  height: 60vh;
}

.about-title {
  font-size: 40px;
  font-weight: 700;
}

.content {
  display: flex;
  flex-wrap: wrap;
}

.summary-container {
  text-align: left;
  padding-left: 20px;
  width: 70%;
}

.my-summary {
  font-size: 20px;
}

#my-image {
  max-width: 300px;
  margin: 0 auto;
}
`;

const About = () => (
  <div className="about-container">
    <div className="about-title">About Me</div>
    <div className="content">
      <div className="summary-container">
        <p className="my-summary">{'Hi Everyone! My name is Mark Go! I\'m happy you found my website and are curious about what I am up to and interested in!'}</p>
        <p className="my-summary">
          {`I am a Biomedical Engineer turned Software Engineer, and I am deeply interested in both fields. I graduated with honors from the University of California, Irvine
                  in 2019, and I have been sharpening my programming skills ever since. When I'm not programming, you can find me playing my favorite games, Rocket League and Call of Duty.
                  I'm also an avid guitarist, I've been playing since I was 10!`}
        </p>
        <p className="my-summary">
          {`The areas of technology that I am really interested in include machine learning, web development, and medical devices. I've had some really cool 
                  biotech projects while in college, including building a fingertip pulse oximeter and 3-lead electrocardiogram (ECG). `}
        </p>
      </div>
      <img src="./Me.jpg" alt="it-me" id="my-image" />
    </div>
    <style>{aboutStyle}</style>
  </div>
);

export default About;
