import React from 'react';
import ProfilePic from '../../assets/images/profilepic.jpg'

// Renders entire About Me page
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
        
        <div className= "col-md-8">
            <div className="card">
                <div className="card-body h-100">
                    <div className="lead">
                    <ul>
                    <li className="listspace">Fluent in HTML, CSS, JavaScript, mySQL, MongoDB, Express, React, and Node, I am a versatile Full-stack Web Developer based in the vibrant city of Miami.  I strive to create simple, efficient, and elegant designs that engage users and bring their visions to life.
                    </li>
                    <li className="listspace">In addition to my love for coding, I am also a huge sports lover.  Whether it's cheering for my favorite teams (Go Heat! Go Dolphins! Go Panthers! Go Marlins!) or engaging in friendly debates, I find pure joy and camaraderie in the world of sports.  From the thrill of live games to the strategy behind each play, I am fascinated by the way sports can unite people and ignite a sense of shared passion and excitement.</li>
                    <li className="listspace">When I'm not immersed in the world of coding, you'll often find me indulging in my love for binge-watching shows.  I find great satisfaction in the art of storytelling and enjoy exploring a diverse range of narratives, from gripping dramas, psychological thrillers, and fast paced action flicks to exciting sci-fi adventures, wacky comedies, and surreal slow-burners - I will completely dive in and lose myself in any genre.  I appreciate the power of well-crafted stories and the visual techniques used, which often inspire my own creative approach in web development.</li>
                    <li className="listspace">Proud graduate of the <span className="um">University of Miami</span> Coding Bootcamp.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>

        </div>
        </div>
            
            
    )

}