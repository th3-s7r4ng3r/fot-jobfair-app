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
              <b>Nadeera</b> : 071 708 5100<br/>
              <b>Chathuranga</b> : 077 431 2578
            </p>
            <p><p>Main Cordinators</p>
              <b>Vinura</b> :  076 688 5466<br/>
              <b>Sanjeewa</b> : 076 311 7308<br/>
              <b>Shehan</b> : 078 833 6181
            </p>
            <p><p>For More Details</p>
              <b>Naveen</b> :  071 176 6662
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer;