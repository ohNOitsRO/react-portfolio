import React from 'react';
import ResumeDL from '../../assets/images/resume-download.png';
import Bootstraplogo from '../../assets/images/bootstrap.png';
import CSS3logo from '../../assets/images/css3.png';
import Expresslogo from '../../assets/images/express.png';
import GraphQLlogo from '../../assets/images/graphql.png';
import Handlebarslogo from '../../assets/images/handlebars.png';
import HTML5logo from '../../assets/images/html5.png';
import JQuerylogo from '../../assets/images/jquery.png';
import JSlogo from '../../assets/images/js.png';
import Materializelogo from '../../assets/images/materialize.png';
import Mongodblogo from '../../assets/images/mongodb.png';
import MUIlogo from '../../assets/images/mui.png';
import mySQLlogo from '../../assets/images/mysql.png';
import Nodelogo from '../../assets/images/node.png';
import Reactlogo from '../../assets/images/react.png';
import Sequelizelogo from '../../assets/images/sequelize.png';

const thumbNail = {
                  width: "15%"
                  }

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
           className="d-block mx-lg-auto img-fluid"></img></a>
      </div>
      
      <div className= "col-md-8">
          <div className="card">
          <div className="card-body h-100">
          <div className="lead">
            <u>Technical Skills</u>
            

          <img src={Bootstraplogo}
           alt="Bootstrap Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={CSS3logo}
           alt="CSS3 Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={Expresslogo}
           alt="Express Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={GraphQLlogo}
           alt="GraphQL Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={Handlebarslogo}
           alt="Handlebars Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={HTML5logo}
           alt="HTML5 Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={JQuerylogo}
           alt="JQuery Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={JSlogo}
           alt="Javascript Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={Materializelogo}
           alt="Materialize Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={Mongodblogo}
           alt="MongoDB Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={MUIlogo}
           alt="MUI Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={mySQLlogo}
           alt="mySQL Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={Nodelogo}
           alt="Node Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={Reactlogo}
           alt="React Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>

          <img src={Sequelizelogo}
           alt="Sequelize Logo"
           className="d-block mx-lg-auto img-fluid"
           style={thumbNail}></img>
            
            
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </>
  );
}
