import React from 'react';
import NBAbetHub from '../../assets/images/NBAbetHub.png'
import FavSavs from '../../assets/images/FavSavs.png'
import QuestionBlock from '../../assets/images/questionBlock.png'
import Cliffhanger from '../../assets/images/cliffhanger.png'
import WeatherDashboard from '../../assets/images/wd-logo.png'
import JATE from '../../assets/images/jate-logo.jpg'
import WDScheduler from '../../assets/images/scheduler.png'

// Array to keep projects organized and render information to card
const cardData = [
  {
    title: "NBA betHub",
    imageSrc: NBAbetHub,
    altText: "NBA betHub",
    description: "Keep up with your favorite NBA teams and place quick bets!",
    link: "https://ohnoitsro.github.io/NBA-betHub/",
    github: "https://github.com/ohNOitsRO/NBA-betHub"
  },
  {
    title: "FavSavs",
    imageSrc: FavSavs,
    altText: "FavSavs",
    description: "Store and callback topics to explore at your convenience!",
    link: "https://fierce-everglades-98349.herokuapp.com/",
    github: "https://github.com/ohNOitsRO/Fav-Savs"
  },
  {
    title: "Cliffhanger",
    imageSrc: Cliffhanger,
    altText: "Cliffhanger",
    description: "Create stories or continue others creations through collaborative storytelling!",
    link: "https://github.com/ohNOitsRO",
    github: "https://github.com/ohNOitsRO/CliffhangerStory"
  },
  {
    title: "Weather Dashboard",
    imageSrc: WeatherDashboard,
    altText: "Weather Dashboard",
    description: "Look up the 5 day forecast for any city in North America!",
    link: "https://ohnoitsro.github.io/weather-dashboard/",
    github: "https://github.com/ohNOitsRO/weather-dashboard"
  },
  {
    title: "J.A.T.E",
    imageSrc: JATE,
    altText: "J.A.T.E",
    description: "Just Another Text Editor - Keep track of your notes!",
    link: "https://jate-rd.herokuapp.com/",
    github: "https://github.com/ohNOitsRO/just-another-text-editor"
  },
  {
    title: "Workday Scheduler",
    imageSrc: WDScheduler,
    altText: "Workday Scheduler",
    description: "Keep track of your busy 9 to 5 workday!",
    link: "https://ohnoitsro.github.io/work-day-scheduler/",
    github: "https://github.com/ohNOitsRO/work-day-scheduler"
  }
];

// Styles for card
const cardStyle = { 
                  width: "18rem"
                  }


// Card component to render multiple projects
const Card = ({ title, imageSrc, altText, description, link, github }) => (
  <div className="card" style={cardStyle}>
    <img src={imageSrc} className="card-img-top" alt={altText} />
    <div className="card-body">
      <h3 className="card-title">
        <u>{title}</u>
      </h3>
      <p className="card-text">{description}</p>
      <div className="buttonlinks">
      <a href={link} className="btn btn-dark">
        Visit Page
      </a>
      <a href={github} className="btn btn-dark">
        Github
      </a>
      </div>
    </div>
  </div>
);


// Renders entire Projects page
export default function Projects() {
  return (
    <div className="container-fluid">
    <section className="my-projects" id="projects">

    {cardData.map((card, index) => (
          <Card {...card} key={index} />
        ))}

    </section>
    </div>
  );
}
