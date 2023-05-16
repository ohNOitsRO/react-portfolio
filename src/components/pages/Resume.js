import React from 'react';
import Resumedownload from '../../assets/images/resume-download.png';


export default function Resume() {
  return (
      <>
      <div className="container-fluid">
      <div className="container row">

      <div className= "col-md-4">
      <a href={process.env.PUBLIC_URL + "/shell-resume.pdf"} download>
      <img src={Resumedownload}
           alt="Roland's Resume"
           className="d-block mx-lg-auto img-fluid"></img></a>
      </div>
      <div className= "col-md-4"></div>
      <div className= "col-md-4">
          <div className= "card">
          <div className="card-body h-100">
          <p className="lead">
            <u>Technical Skills</u>

            <li className="listspace">HTML</li>
            <li className="listspace">CSS</li>
            <li className="listspace">Javascript</li>
            <li className="listspace">mySQL</li>
            <li className="listspace">MongoDB</li>
            <li className="listspace">Express</li>
            <li className="listspace">React</li>
            <li className="listspace">Node</li>   
          
      </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </>
  );
}
