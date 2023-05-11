import React from 'react';
import NBAbetHub from '../../assets/images/NBAbetHub.png'
import FavSavs from '../../assets/images/FavSavs.png'
import QuestionBlock from '../../assets/images/questionBlock.png'


export default function Projects() {
  return (
    <section className="my-projects" id="projects">
    
    <div>
    <img src={NBAbetHub}
         alt="NBA betHub"
         id="projectName"
         href="https://ohnoitsro.github.io/NBA-betHub/">
    </img></div>
    <div>
    <img src={FavSavs}
         alt="FavSavs"
         id="projectName"
         href="https://fierce-everglades-98349.herokuapp.com/">
    </img></div>
    
    <div>
    <div>Project 3</div>
    <img src={QuestionBlock}
         alt="Work In Progress"
         id="projectName"
         href="https://github.com/ohNOitsRO/">
    </img></div>

    <div>
     <div>Project 4</div>
    <img src={QuestionBlock}
         alt="Work In Progress"
         id="projectName"
         href="https://github.com/ohNOitsRO/">
    </img></div>
    
    <div>
    <div>Project 5</div>
    <img src={QuestionBlock}
         alt="Work In Progress"
         id="projectName"
         href="https://github.com/ohNOitsRO/">
    </img></div>

    <div> 
    <div>Project 6</div>
    <img src={QuestionBlock}
         alt="Work In Progress"
         id="projectName"
         href="https://github.com/ohNOitsRO/">
    </img></div>

    </section>
  );
}
