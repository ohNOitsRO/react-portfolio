import React from 'react';
import ProfilePic from '../../assets/images/profilepic.jpg'

export default function About() {
    return (
        // <section className="page-title">
        <div class="container col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={ProfilePic}
             alt="Roland's Profile"
             id ="about-me"
             class="d-block mx-lg-auto img-fluid"></img>
    
            <div>
            Miami based Fullstack web designer and developer, 
            fluent in HTML, CSS, JavaScript, mySQL, and MERN.    
            100% Computer Geek certified, show binger, and lover of all sports. 
            Simple, efficient, and elegant designs. 
            Proud student of the University of Miami Coding Bootcamp.
            Keep up with me and all my current and upcoming projects here!
            </div>
            {/* </section> */}
            </div></div></div>
            
    )

}