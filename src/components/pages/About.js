import React from 'react';
import ProfilePic from '../../assets/images/profilepic.jpg'

export default function About() {
    return (
        <div className="container-fluid">
            <div className="container row">

        <div className= "col-md-4">
            <img src={ProfilePic}
                 alt="Roland's Profile"
                 id ="about-me"
                 className="d-block mx-lg-auto img-fluid"></img>
        </div>
        
        <div className= "col-md-4">            
        </div>
        
        <div className= "col-md-4">
            <div className="card">
                <div className="card-body h-100">
                    <div className="lead">
                    <ul>
                    <li className="listspace">Miami based Full-stack Web Developer.</li>
                    <li className="listspace">Fluent in HTML, CSS, JavaScript, mySQL, and MERN.</li>
                    <li className="listspace">Show binger and lover of all sports.</li>
                    <li className="listspace">Simple, efficient, and elegant designs.</li>
                    <li className="listspace">Proud graduate of the University of Miami Coding Bootcamp.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>

        </div>
        </div>
            
            
    )

}