import React from 'react';

const headerStyle = { listStyle: "none",
                      display: "flex"
                    }

function Header({ currentPage, handlePageChange }) {
  return (
    
    <div className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand">Roland Delgado</h3>
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item" style={headerStyle}>
              <a href="#about-me"
                 onClick={() => handlePageChange('About')}
                 className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li className="nav-item" style={headerStyle}>
              <a href="#projects"
                 onClick={() => handlePageChange('Projects')}
                 className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </a>
            </li>
            <li className="nav-item" style={headerStyle}>
              <a href="#resume"
                 onClick={() => handlePageChange('Resume')}
                 className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
            <li className="nav-item" style={headerStyle}>
              <a href="#contact"       
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