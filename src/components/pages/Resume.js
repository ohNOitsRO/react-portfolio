import React from 'react';
import ResumeDL from '../../assets/images/resume-download.png';


export default function Resume() {
  return (
      <>
      <div className="container-fluid">
      <div className="container row">

      <div className= "col-md-4">
      <a href={process.env.PUBLIC_URL + "/shell-resume.pdf"} download>
      <img src={ResumeDL}
           alt="Roland's Resume"
           className="d-block mx-lg-auto img-fluid"></img></a>
      </div>
      
      <div className= "col-md-8">
          <div className="card">
          <div className="card-body h-100">
          <div className="lead">
            <u>Technical Skills</u>
            <ul>
            <li className="listspace">HTML</li>
              Handlebars for templates
            <li className="listspace">CSS</li>
              Bootstrap, Materialize, for different page designs
            <li className="listspace">Javascript</li>
            jQuery, RESTful API fetching for C.R.U.D
            <li className="listspace">mySQL</li>
            SQL Database Management
            <li className="listspace">MongoDB</li>
            Mongoose for object models
            <li className="listspace">Express</li>
             Sequelize to connect front-end and back-end
            <li className="listspace">React</li>
            Router for built in page routes, MUI for front-end component designs
            <li className="listspace">Node</li>
            Inquirer for CLI inputs, dotenv to hide credentials, bcrypt to hash user data for further security, babel for easy ES5-to-ES6 integration, 
            ESlint for more descriptive, stricter and customizable restrictions, Webpack for compressing and bundling applications, jest for testing code
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
