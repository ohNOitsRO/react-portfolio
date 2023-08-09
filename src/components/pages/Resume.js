import React from 'react';
import Fullstackbadge from '../../assets/images/fullstackbadge.png';
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


// Renders entire Resume page
export default function Resume() {
  return (
      <>
      <div className="container-fluid">
      <div className="container row badgecenter">

      <div className= "col-md-4 w-75">
      <a href={process.env.PUBLIC_URL + "/RD_Resume.pdf"} download className="badgecenter">
      <img src={Fullstackbadge}
           alt="Roland's Resume"
           className="img-fluid"></img></a>
           <h3><center>Click the badge to download my Resume!</center></h3>
      </div>


<div className="col-md-8">
  <div className="card">
    <div className="card-body h-100">
      <center className="font"><u>Technical Skills</u></center>
      <div className="lead row justify-content-center">
        <div className="row justify-content-center align-items-center">
          <div className="col">
            <img src={HTML5logo} alt="HTML5 Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
          <div className="col">
            <img src={CSS3logo} alt="CSS3 Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
          <div className="col">
            <img src={JSlogo} alt="Javascript Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
          <div className="col">
            <img src={JQuerylogo} alt="JQuery Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
          <div className="col">
            <img src={Handlebarslogo} alt="Handlebars Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col">
            <img src={Mongodblogo} alt="MongoDB Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
          <div className="col">
            <img src={Expresslogo} alt="Express Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
          <div className="col">
            <img src={Reactlogo} alt="React Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
          <div className="col">
            <img src={Nodelogo} alt="Node Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
          <div className="col">
            <img src={mySQLlogo} alt="mySQL Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col">
            <img src={Bootstraplogo} alt="Bootstrap Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
          <div className="col">
            <img src={Materializelogo} alt="Materialize Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
          <div className="col">
            <img src={MUIlogo} alt="MUI Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
          <div className="col">
            <img src={Sequelizelogo} alt="Sequelize Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
          <div className="col">
            <img src={GraphQLlogo} alt="GraphQL Logo" className="d-block mx-auto img-fluid hvr-bob"></img>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>







      </div>
      </div>
      </>
  );
}
