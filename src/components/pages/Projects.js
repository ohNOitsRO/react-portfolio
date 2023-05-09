import React from 'react';
import NBAbetHub from '../../assets/images/NBAbetHub.png'
import FavSavs from '../../assets/images/FavSavs.png'
import QuestionBlock from '../../assets/images/questionBlock.png'


export default function Projects() {
  return (
    <section class="my-projects" id="projects">
    
    <div>
    <img src={NBAbetHub}
         alt="NBA betHub"
         id="projectName1"
         href="https://ohnoitsro.github.io/NBA-betHub/">
    </img></div>
    <div>
    <img src={FavSavs}
         alt="FavSavs"
         id="projectName2"
         href="https://fierce-everglades-98349.herokuapp.com/">
    </img></div>
    
    <div>
    Project 3
    <img src={QuestionBlock}
         alt="Work In Progress"
         id="projectName3"
         href="https://github.com/ohNOitsRO/">
    </img></div>

    <div>
     Project 4
    <img src={QuestionBlock}
         alt="Work In Progress"
         id="projectName4"
         href="https://github.com/ohNOitsRO/">
    </img></div>
    
    <div>
    Project 5
    <img src={QuestionBlock}
         alt="Work In Progress"
         id="projectName5"
         href="https://github.com/ohNOitsRO/">
    </img></div>

    </section>
  );
}
