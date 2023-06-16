import React from 'react';
import ResumeDL from '../../assets/images/resume-download.png';

// Renders entire Resume page
export default function Resume() {
  return (
      <>
      <div className="container-fluid">
      <div className="container row">

      <div className= "col-md-4">
      <a href={process.env.PUBLIC_URL + "/RD_Resume.docx"} download>
      <img src={ResumeDL}
           alt="Roland's Resume"
           className="d-block mx-lg-auto img-fluid pointer"></img></a>
      </div>
      
      <div className= "col-md-8">
          <div className="card">
          <div className="card-body h-100">
          <div className="lead">
            <u>Technical Skills</u>
            <ul>
            <li className="listspace">HTML</li>
              <strong>Handlebars</strong> for templates
            <li className="listspace">CSS</li>
              <strong>Bootstrap</strong>, <strong>Materialize</strong> for different page designs
            <li className="listspace">Javascript</li>
              <strong>jQuery</strong>, <strong>RESTful API</strong> fetching for C.R.U.D
            <li className="listspace">mySQL</li>
              <strong>SQL</strong> Database Management
            <li className="listspace">MongoDB</li>
              <strong>Mongoose</strong> for object models, <strong>NoSQL</strong> Database Management
            <li className="listspace">Express</li>
              <strong>Sequelize</strong> to connect front-end and back-end
            <li className="listspace">React</li>
              <strong>Router</strong> for built in page routes, <strong>MUI</strong> for front-end component designs
            <li className="listspace">Node</li>
              <strong>Inquirer</strong> for CLI inputs, <strong>dotenv</strong> to hide credentials, <strong>bcrypt</strong> to hash user data for further security, <strong>babel</strong> for easy ES5-to-ES6 integration, <strong>ESlint</strong> for more descriptive, stricter and customizable restrictions, <strong>Webpack</strong> for compressing and bundling applications, <strong>jest</strong> for testing code
            <li className="listspace">Insomnia/GraphQL</li>
              Testing databases and routes
            </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </>
  );
}
