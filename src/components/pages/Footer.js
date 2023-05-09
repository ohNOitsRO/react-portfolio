import React from 'react';
import Github from '../../assets/images/githubLogo.jpg'
import Email from '../../assets/images/envelope.png'
import Linkedin from '../../assets/images/Linkedin.png'

const footerStyle = {display: 'flex',
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     gap: '150px'}

export default function Footer() {
  return (
     <div style={footerStyle}>
        <img src={Github}
          id="contactImages"
          alt="Github Portfolio"
          href="https://github.com/ohNOitsRO/"></img>
            
        <img src={Email}
          id="contactImages"
          alt="My Email"
          href="mailto:fake.email@gmail.com"></img>

        <img src={Linkedin} 
          id="contactImages"
          alt="LinkedIn Profile"
          href="http://www.linkedin.com"></img>
     </div>
  );
}
