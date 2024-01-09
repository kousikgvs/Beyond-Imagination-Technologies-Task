import React, { useState } from 'react';
import "./NavBar.css"
function ResponsiveTopNav() {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleToggle = () => {
    setIsResponsive(prevState => !prevState);
  };

  return (
    <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      <a className="active">Logo Here</a>
      <div>
        
      </div>
      <a onClick={handleToggle}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default ResponsiveTopNav;
