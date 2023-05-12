import React from 'react';
import ProfilePic from '../../assets/images/profilepic.jpg'


export default function About() {
    return (
        
        // <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <div className="container-fluid">
        <div className="container row">
        <div className= "col-md-3">
        <img src={ProfilePic}
             alt="Roland's Profile"
             id ="about-me"
             className="d-block mx-lg-auto img-fluid"></img>
        </div>
        <div className= "col-md-9">
            <p className="lead">Miami based Fullstack web designer and developer, 
            fluent in HTML, CSS, JavaScript, mySQL, and MERN.    
            100% Computer Geek certified, show binger, and lover of all sports. 
            Simple, efficient, and elegant designs. 
            Proud student of the University of Miami Coding Bootcamp.
            Keep up with me and all my current and upcoming projects here!
        </p></div></div>
        
        
        </div>
            
            
    )

}