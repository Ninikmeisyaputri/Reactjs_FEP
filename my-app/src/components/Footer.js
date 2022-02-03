import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section class='social-media'>
        <div class='social-media-wrap'>
          <h2 class='website-rights'>Ninik Mei Syaputri</h2>
          <div class='social-icons'>
            <Link
              class='social-icon-link whatsapp'
              to='//wa.me/+6285725469964'
              target='_blank'
              aria-label='WhatsApp'
            >
              <i class='fab fa-whatsapp' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='//www.instagram.com/nmsnmsnms__/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Footer;
