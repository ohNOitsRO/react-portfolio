import React from 'react';

const headerStyle = {listStyle: "none",
                     display: "flex",
                     alignContent: "right"}

function Header({ currentPage, handlePageChange }) {
  return (
    <ul className= "nav nav-tabs">
      <li className="nav-item" style={headerStyle}>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item" style={headerStyle}>
        <a
          href="#about-me"
          onClick={() => handlePageChange('About')}
          

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item" style={headerStyle}>
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          

          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item" style={headerStyle}>
        <a
          href="#contact"
          

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Header;
