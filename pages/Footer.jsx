import React from 'react';

const footerStyle = `
.container {
  width: 100%;
  height: 250px;
  background: rgba(0,0,255, 1);
}
`;

const Footer = () => {
  return (
    <div className="container">
      Footer
      <style>{footerStyle}</style>
    </div>
  );
};

export default Footer;
