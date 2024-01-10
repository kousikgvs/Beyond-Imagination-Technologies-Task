import React, { useState } from 'react';
import "./NavBar.css"
import { useData } from '../DataContext';
import { useNavigate } from 'react-router-dom'; 

function ResponsiveTopNav() {
  const { data } = useData();
  const [isResponsive, setIsResponsive] = useState(false);
const navigate = useNavigate();
  const handleToggle = () => {
    setIsResponsive(prevState => !prevState);
  };

  return (
    <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      <a className="active">Logo Here</a>
      <div className='user-credentials'>
        <div className='username'>{data ? data.username : <>Username</>}</div>
        <button className='logout' onClick={() => navigate("/")}>LOGOUT</button>
      </div>
      {isResponsive && (
        <a onClick={handleToggle}>
          <i className="fa fa-bars"></i>
        </a>
      )}
    </div>
  );
}

export default ResponsiveTopNav;
