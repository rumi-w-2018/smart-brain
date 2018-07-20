import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './Logo.png';

const Logo = () => {
  return (
    <div className="w-100 db dt-l dt-m pa3 ph5-l ma3 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 110, width: 110 }}>
        <div className="Tilt-inner">
          <img src={brain} className="pa3" alt="brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
