import React from 'react';
import NBAbetHub from '../../assets/images/NBAbetHub.png'
import FavSavs from '../../assets/images/FavSavs.png'
import QuestionBlock from '../../assets/images/questionBlock.png'
import Cliffhanger from '../../assets/images/cliffhanger.png'

const cardStyle = { width: "18rem"
                  }


export default function Projects() {
  return (
    <div className="container-fluid">
    <section className="my-projects" id="projects">


    <div className="card" style={cardStyle}>
  <img src={NBAbetHub} className="card-img-top" alt="NBA betHub"></img>
  <div className="card-body">
    <h3 className="card-title"><u>NBA betHub</u></h3>
    <p className="card-text">Keep up with your favorite NBA teams and place quick bets!</p>
    <a href="https://ohnoitsro.github.io/NBA-betHub/" className="btn btn-dark">Visit Page</a>
  </div>
      </div>

      <div className="card" style={cardStyle}>
  <img src={FavSavs} className="card-img-top" alt="FavSavs"></img>
  <div className="card-body">
    <h3 className="card-title"><u>FavSavs</u></h3>
    <p className="card-text">Store and callback topics to explore at your convenience!</p>
    <a href="https://fierce-everglades-98349.herokuapp.com/" className="btn btn-dark">Visit Page</a>
  </div>
      </div>

      <div className="card" style={cardStyle}>
  <img src={Cliffhanger} className="card-img-top" alt="FavSavs"></img>
  <div className="card-body">
    <h3 className="card-title"><u>Cliffhanger</u></h3>
    <p className="card-text">Create stories or continue others creations through collaborative storytelling!</p>
    <a href="https://github.com/ohNOitsRO" className="btn btn-dark">Visit Page</a>
  </div>
      </div>

      <div className="card" style={cardStyle}>
  <img src={QuestionBlock} className="card-img-top" alt="FavSavs"></img>
  <div className="card-body">
    <h3 className="card-title"><u>Project 4</u></h3>
    <p className="card-text">Coming Soon!</p>
    <a href="https://github.com/ohNOitsRO" className="btn btn-dark">Visit Page</a>
  </div>
      </div>

      <div className="card" style={cardStyle}>
  <img src={QuestionBlock} className="card-img-top" alt="FavSavs"></img>
  <div className="card-body">
    <h3 className="card-title"><u>Project 5</u></h3>
    <p className="card-text">Coming Soon!</p>
    <a href="https://github.com/ohNOitsRO" className="btn btn-dark">Visit Page</a>
  </div>
      </div>

      <div className="card" style={cardStyle}>
  <img src={QuestionBlock} class="card-img-top" alt="FavSavs"></img>
  <div className="card-body">
    <h3 className="card-title"><u>Project 6</u></h3>
    <p className="card-text">Coming Soon!</p>
    <a href="https://github.com/ohNOitsRO" className="btn btn-dark">Visit Page</a>
  </div>
      </div>

    </section>
    </div>
  );
}
