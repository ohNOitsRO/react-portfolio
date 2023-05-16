import React from 'react';
import NBAbetHub from '../../assets/images/NBAbetHub.png'
import FavSavs from '../../assets/images/FavSavs.png'
import QuestionBlock from '../../assets/images/questionBlock.png'


export default function Projects() {
  return (
    <div className="container-fluid">
    <section className="my-projects" id="projects">
    
    <div>
          <a href="https://ohnoitsro.github.io/NBA-betHub/">
          <img src={NBAbetHub}
               alt="NBA betHub"
               id="projectName">
    </img></a>
    </div>

    <div>
          <a href="https://fierce-everglades-98349.herokuapp.com/">
          <img src={FavSavs}
               alt="FavSavs"
               id="projectName">
    </img></a>
    </div>
    
    <div>
    <div>Project 3</div>
          <a href="https://github.com/ohNOitsRO/">
          <img src={QuestionBlock}
               alt="Work In Progress"
               id="projectName">
    </img></a>
    </div>

    <div>
    <div>Project 4</div>
          <a href="https://github.com/ohNOitsRO/">
          <img src={QuestionBlock}
               alt="Work In Progress"
               id="projectName">
    </img></a>
    </div>
    
    <div>
    <div>Project 5</div>
          <a href="https://github.com/ohNOitsRO/">
          <img src={QuestionBlock}
               alt="Work In Progress"
               id="projectName">
    </img></a>
    </div>

    <div> 
    <div>Project 6</div>
          <a href="https://github.com/ohNOitsRO/">
          <img src={QuestionBlock}
               alt="Work In Progress"
               id="projectName">
    </img></a>
    </div>

    </section>
    </div>
  );
}
