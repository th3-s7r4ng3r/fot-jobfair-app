import React from 'react';
import './css/Footer.css'

const Footer = () => {
    return(
        <div className='footer'>
        <img src='./images/footer-image.png' alt='footer logo' className='footer-image'/>
        <div className='contact-us'>
          <h3>Contact Us</h3>
          <div className='contacts'>
            <p><p>Chief Organizers</p>
              Nadeera : 071 708 5100<br/>
              Chathuranga : 077 431 2578
            </p>
            <p><p>Main Cordinators</p>
              Vinura :  076 688 5466<br/>
              Sanjeewa : 076 311 7308<br/>
              Shehan : 078 833 6181
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer;