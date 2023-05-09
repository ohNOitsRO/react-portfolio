import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>     
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />   
      {renderPage()}
    </div>
  );

}
