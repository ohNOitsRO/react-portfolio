import React from 'react';
import ProfilePic from '../../assets/images/profilepic.jpg'

export default function About() {
    return (
        <section className="page-title">
        <img src={ProfilePic}
             alt="Roland's Profile"
             id ="about-me"></img>
    
            
            Miami based Fullstack web designer and developer, 
            fluent in HTML, CSS, JavaScript, mySQL, and MERN.    
            100% Computer Geek certified, show binger, and lover of all sports. 
            Simple, efficient, and elegant designs. 
            Proud student of the University of Miami Coding Bootcamp.
            Keep up with me and all my current and upcoming projects here!
            </section>
            
    )

}