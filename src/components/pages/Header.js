import React from 'react';

const headerStyle = {listStyle: "none",
                     display: "flex"
                    }

function Header({ currentPage, handlePageChange }) {
  return (
    
    <div class="masthead mb-auto">
      <div class="inner">
      <h3 class="masthead-brand">Roland<p>Delgado</p></h3>
    <ul className="nav nav-tabs justify-content-center">
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
    </div>
    </div>
  );
}

export default Header;

/* <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">Cover</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header> */