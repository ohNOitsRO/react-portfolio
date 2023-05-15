import React from 'react';
import ProfilePic from '../../assets/images/profilepic.jpg'


export default function About() {
    return (
        
        <div className="container-fluid">
        <div className="container row">
        
        <div className= "col-md-3"></div>

        <div className= "col-md-3">
        <img src={ProfilePic}
             alt="Roland's Profile"
             id ="about-me"
             className="d-block mx-lg-auto img-fluid"></img>
        </div>
        <div className= "col-md-3">
            <div className= "card">
            <div className="card-body h-100">
            <p className="lead">
                <ul>
                <li>Miami based Full-stack Web Developer.</li>
                <li>Fluent in HTML, CSS, JavaScript, mySQL, and MERN.</li>
                <li>Show binger and lover of all sports.</li>
                <li>Simple, efficient, and elegant designs.</li>
                <li>Proud graduate of the University of Miami Coding Bootcamp.</li>
                </ul>
        </p>
        </div>
        </div>
        </div>

        <div className= "col-md-3"></div>


        </div>
        </div>
            
            
    )

}