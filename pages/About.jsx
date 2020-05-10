/* eslint-disable react/no-unescaped-entities */
/* eslint-disable quotes */
import React from 'react';

const aboutStyle = `
.about-container {
  margin-top: 75px;
  height: auto;
}

.about-title {
  font-size: 40px;
  font-weight: 700;
}

.my-summary {
  font-size: 20px;
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

.image-container {
  width: 30%;
}

#my-image {
  width: 70%;
  height: auto;
  margin: 0 auto;
}

@media (max-width: 1080px) {
  .about-container {
    margin-bottom: 100px;
  }
  
  .summary-container {
    text-align: left;
    padding: 0 10px;
    width: 100%;
    height: 60%;
  }
  
  .image-container {
    width: 70%;
    height: 40%;
    margin: 0 auto;
  }
  
  #my-image {
    max-width: 50%;
    margin: 0 auto;
  }
}
`;

const About = () => {
  let mobileView;
  if (typeof window !== 'undefined') {
    mobileView = window.innerWidth < 1080;
  }


  return (
    <div className="about-container">
      <div className="about-title">About Me</div>
      <div className="content">
        <div className="summary-container">
          <p className="my-summary">{'Hi Everyone, my name is Mark Go! I\'m happy you found my website and are curious about what I am up to and interested in!'}</p>
          <p className="my-summary">
            {`A little about myself: I am from Fairfield, California, I have been here for about 13 years and moved houses about 4 times but never really left the town until college. 
            Before that, I lived in Roseville, Michigan until I was 9, which definitely explains the place in my heart for the Detroit Pistons and Tigers. But don't call me a Warriors and Giants 
            bandwagon because they are my favorite teams FOR SURE (I have the trivia to back it up). Before Michigan, I was in Davao, Philippines, where I was born. I moved away 
            when I was 4, so I never had too much memory of enjoying the beaches there, but you can bet I am going to spend much of my retired time there when the time comes! I am 
            still deeply involved in my culture though, being involved in my university's Filipinx cultural orgnaization, Kababayan, check out my performances in our annual Pilipinx-American 
            Curltural Night (PACN) `}
            <a href="https://www.youtube.com/watch?v=h0mNeh5kY54" target="_blank" rel="noreferrer noopener">here</a>
            !
          </p>
          <p className="my-summary">
            {`I graduated with honors in Biomedical Engineering from the University of California, Irvine in 2019. I've had some really cool 
              engineering projects while in college, including building a fingertip pulse oximeter and 3-lead electrocardiogram (ECG) using LABVIEW and MATLAB. 
              Since then, I was intrigued with different kinds of software that could be applied to biotech. This got me into programming; I started with a 
              little Python and Java, and then my interest shifted in making web applications, so the main language I use right now is JavaScript. `}
            {`The areas of technology that I am really interested in include machine learning, web development, and medical devices. I graduated in Hack Reactor to help me 
              tune my programming skills, and it has really helped me to become an independent, autonomous engineer. Feel free to check out my projects below! This site 
              was also made with React and Next.js, feel free to check out the code for it `}
            <a href="https://github.com/MarkVincentGo/markgo.me" target="_blank" rel="noreferrer noopener">here</a>
            .
          </p>
          <p className="my-summary">
            Thanks for taking the time to check out my site and don't hesitate to reach out to me!
          </p>
        </div>
        <div className="image-container">
          <img src="./Me.jpg" alt="it-me" id="my-image" />
        </div>
      </div>
      <style>{aboutStyle}</style>
    </div>
  );
};

export default About;
