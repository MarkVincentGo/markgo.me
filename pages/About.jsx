import React from 'react';

const aboutStyle = `
.about-container {
  margin-top: 100px;
}

.title {
  font-size: 40px;
  font-weight: 700;
}
`;

const About = () => {
  return (
    <div>
      <div className="title">About Me</div>
      <style>{aboutStyle}</style>
    </div>
  );
};

export default About;
