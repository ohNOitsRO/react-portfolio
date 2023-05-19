import React from 'react';
import NBAbetHub from '../../assets/images/NBAbetHub.png'
import FavSavs from '../../assets/images/FavSavs.png'
import QuestionBlock from '../../assets/images/questionBlock.png'
import Cliffhanger from '../../assets/images/cliffhanger.png'
import WeatherDashboard from '../../assets/images/wd-logo.png'
import JATE from '../../assets/images/jate-logo.jpg'
import WDScheduler from '../../assets/images/scheduler.png'

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
  <img src={Cliffhanger} className="card-img-top" alt="Cliffhanger"></img>
  <div className="card-body">
    <h3 className="card-title"><u>Cliffhanger</u></h3>
    <p className="card-text">Create stories or continue others creations through collaborative storytelling!</p>
    <a href="https://github.com/ohNOitsRO" className="btn btn-dark">Visit Page</a>
  </div>
      </div>

      <div className="card" style={cardStyle}>
  <img src={WeatherDashboard} className="card-img-top" alt="Weather Dashboard"></img>
  <div className="card-body">
    <h3 className="card-title"><u>Weather Dashboard</u></h3>
    <p className="card-text">Look up the 5 day forecast for any city in North America!</p>
    <a href="https://ohnoitsro.github.io/weather-dashboard/" className="btn btn-dark">Visit Page</a>
  </div>
      </div>

      <div className="card" style={cardStyle}>
  <img src={JATE} className="card-img-top" alt="J.A.T.E"></img>
  <div className="card-body">
    <h3 className="card-title"><u>J.A.T.E</u></h3>
    <p className="card-text">Just Another Text Editor - Keep track of your notes!</p>
    <a href="https://jate-rd.herokuapp.com/" className="btn btn-dark">Visit Page</a>
  </div>
      </div>

      <div className="card" style={cardStyle}>
  <img src={WDScheduler} className="card-img-top" alt="FavSavs"></img>
  <div className="card-body">
    <h3 className="card-title"><u>Work Day Scheduler</u></h3>
    <p className="card-text">Keep track of your busy 9 to 5 workday!</p>
    <a href="https://ohnoitsro.github.io/work-day-scheduler/" className="btn btn-dark">Visit Page</a>
  </div>
      </div>

    </section>
    </div>
  );
}
