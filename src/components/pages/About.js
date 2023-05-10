import React from 'react';
import ProfilePic from '../../assets/images/profilepic.jpg'

// export default function About() {
//     return (
//         // <section className="page-title">
//         <div class="container col-xxl-8 px-4 py-5">
//     <div class="row align-items-center g-5 py-5">
//       <div class="col-10 col-sm-8 col-lg-6">
//         <img src={ProfilePic}
//              alt="Roland's Profile"
//              id ="about-me"
//              class="d-block mx-lg-auto img-fluid"></img>
    
//             <div>
//             Miami based Fullstack web designer and developer, 
//             fluent in HTML, CSS, JavaScript, mySQL, and MERN.    
//             100% Computer Geek certified, show binger, and lover of all sports. 
//             Simple, efficient, and elegant designs. 
//             Proud student of the University of Miami Coding Bootcamp.
//             Keep up with me and all my current and upcoming projects here!
//             </div>
//             {/* </section> */}
//             </div></div></div>
            
            
//     )

// }



// TEMPLATE CODE
    //          <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
    //   <header class="masthead mb-auto">
    //     <div class="inner">
    //       <h3 class="masthead-brand">Cover</h3>
    //       <nav class="nav nav-masthead justify-content-center">
    //         <a class="nav-link active" href="#">Home</a>
    //         <a class="nav-link" href="#">Features</a>
    //         <a class="nav-link" href="#">Contact</a>
    //       </nav>
    //     </div>
    //   </header>

    //   <main role="main" class="inner cover">
    //     <h1 class="cover-heading"><img src={ProfilePic}
    //          alt="Roland's Profile"
    //          id ="about-me"
    //          class="d-block mx-lg-auto img-fluid"></img></h1>
    //     <p class="lead">Miami based Fullstack web designer and developer, 
    //         fluent in HTML, CSS, JavaScript, mySQL, and MERN.    
    //         100% Computer Geek certified, show binger, and lover of all sports. 
    //         Simple, efficient, and elegant designs. 
    //         Proud student of the University of Miami Coding Bootcamp.
    //         Keep up with me and all my current and upcoming projects here!</p>
    //     <p class="lead">
    //       <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
    //     </p>
    //   </main>

    //   <footer class="mastfoot mt-auto">
    //     <div class="inner">
    //       <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
    //     </div>
    //   </footer>
    // </div>



export default function About() {
    return (
        // <section className="page-title">
        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        
        {/* <main role="main" class="inner cover"> */}
        <img src={ProfilePic}
             alt="Roland's Profile"
             id ="about-me"
             class="d-block mx-lg-auto img-fluid"></img>
        <p class="lead">Miami based Fullstack web designer and developer, 
            fluent in HTML, CSS, JavaScript, mySQL, and MERN.    
            100% Computer Geek certified, show binger, and lover of all sports. 
            Simple, efficient, and elegant designs. 
            Proud student of the University of Miami Coding Bootcamp.
            Keep up with me and all my current and upcoming projects here!</p>
        <p class="lead">
        </p>
      {/* </main> */}
            {/* </section> */}
            </div>
            
            
    )

}