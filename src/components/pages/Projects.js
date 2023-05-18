import React from 'react';
import NBAbetHub from '../../assets/images/NBAbetHub.png'
import FavSavs from '../../assets/images/FavSavs.png'
import QuestionBlock from '../../assets/images/questionBlock.png'

const cardStyle = { width: "18rem"
                  }


export default function Projects() {
  return (
    <div className="container-fluid">
    <section className="my-projects" id="projects">


    <div class="card" style={cardStyle}>
  <img src={NBAbetHub} class="card-img-top" alt="NBA betHub"></img>
  <div class="card-body">
    <h3 class="card-title"><u>NBA betHub</u></h3>
    <p class="card-text">Keep up with your favorite NBA teams and place quick bets!</p>
    <a href="https://ohnoitsro.github.io/NBA-betHub/" class="btn btn-dark">Visit Page</a>
  </div>
      </div>

      <div class="card" style={cardStyle}>
  <img src={FavSavs} class="card-img-top" alt="FavSavs"></img>
  <div class="card-body">
    <h3 class="card-title"><u>FavSavs</u></h3>
    <p class="card-text">Store and callback topics to explore at your convenience!</p>
    <a href="https://fierce-everglades-98349.herokuapp.com/" class="btn btn-dark">Visit Page</a>
  </div>
      </div>

      <div class="card" style={cardStyle}>
  <img src={QuestionBlock} class="card-img-top" alt="FavSavs"></img>
  <div class="card-body">
    <h3 class="card-title"><u>Cliffhanger</u></h3>
    <p class="card-text">Create stories or continue others creations through collaborative storytelling!</p>
    <a href="https://github.com/ohNOitsRO" class="btn btn-dark">Visit Page</a>
  </div>
      </div>

      <div class="card" style={cardStyle}>
  <img src={QuestionBlock} class="card-img-top" alt="FavSavs"></img>
  <div class="card-body">
    <h3 class="card-title"><u>Project 4</u></h3>
    <p class="card-text">Coming Soon!</p>
    <a href="https://github.com/ohNOitsRO" class="btn btn-dark">Visit Page</a>
  </div>
      </div>

      <div class="card" style={cardStyle}>
  <img src={QuestionBlock} class="card-img-top" alt="FavSavs"></img>
  <div class="card-body">
    <h3 class="card-title"><u>Project 5</u></h3>
    <p class="card-text">Coming Soon!</p>
    <a href="https://github.com/ohNOitsRO" class="btn btn-dark">Visit Page</a>
  </div>
      </div>

      <div class="card" style={cardStyle}>
  <img src={QuestionBlock} class="card-img-top" alt="FavSavs"></img>
  <div class="card-body">
    <h3 class="card-title"><u>Project 6</u></h3>
    <p class="card-text">Coming Soon!</p>
    <a href="https://github.com/ohNOitsRO" class="btn btn-dark">Visit Page</a>
  </div>
      </div>

    </section>
    </div>
  );
}
