import React from 'react';

const Header = ({ onViewChange, currentView }) => {
  return (
    <header className="header">
      <a href="#" className="header-logo" onClick={() => onViewChange('dashboard')}>
        <img src="/logo.png" alt="NAXA_WEB" style={{ width: '45px', height: '45px', borderRadius: '8px' }} />
        NAXA_WEB
      </a>

    </header>
  );
};

export default Header;
