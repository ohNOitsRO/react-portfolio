import React from 'react';
import Github from '../../assets/images/githubLogo.jpg'
import Email from '../../assets/images/envelope.png'
import Linkedin from '../../assets/images/Linkedin.png'

// Styles for footer
const footerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px'
    }

// Renders entire footer for every page
export default function Footer() {
  return (
     <div style={footerStyle} className="form-group cover-container d-flex w-50 h-100 p-3 mx-auto">
        <a href="https://github.com/ohNOitsRO/"><img src={Github}
          id="contactImages"
          alt="Github Portfolio">
        </img></a>
            
        <a href="mailto:webdevrodel@gmail.com"><img src={Email}
          id="contactImages"
          alt="My Email">
        </img></a>

        <a href="https://www.linkedin.com/in/roland-delgado-794237271/"><img src={Linkedin} 
          id="contactImages"
          alt="LinkedIn Profile">
        </img></a>
     </div>
  );
}
