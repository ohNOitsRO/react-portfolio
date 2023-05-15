import React from 'react';
import Resumedownload from '../../assets/images/resume-download.png';


export default function Resume() {
  return (
      <>
      <div className="container-fluid">
      <div className="container row">
      
      <div className= "col-md-3"></div>

      <div className= "col-md-3">
      <a href="" download>
      <img src={Resumedownload}
           alt="Roland's Resume"
           className="d-block mx-lg-auto img-fluid"></img></a>
      </div>
      <div className= "col-md-3">
          <div className= "card">
          <div className="card-body h-100">
          <p className="lead">Technical Skills
      
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>mySQL</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>React</li>
          <li>Node</li>   
          
      </p>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className= "col-md-3"></div>
      </>
  );
}
