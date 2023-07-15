import React from 'react';
import '../assets/css/all.min.css';
import logo from '../assets/images/logo-image.png';

const Footer = () => {
  return (
    <footer>
      <div className='container text-center animate__animated animate__zoomIn animate__slower'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className=''>
              <a className='' href='website-design-and-development-services.html'>
                <img src={logo} width='70px' alt='logo' />
              </a>
            </div>
            <br />
            <div>
              <a href='read-our-privacy-policy.html'>Privacy Policy</a>
              <br />
              <a href='read-our-terms-and-conditions.html'>Terms & Conditions</a>
            </div>
            <br />
            <div className='socials'>
              <ul className='list-unstyled d-flex justify-content-center'>
                <li className='me-4 ms-4'>
                  <a style={{ color: 'aliceblue' }} href='https://www.twitter.com/HazaelAudi' rel='noreferrer' target='_blank'>
                    <i class='fab fa-twitter fa-lg'></i>
                  </a>
                </li>
                <li className='me-4 ms-4'>
                  <a style={{ color: 'aliceblue' }} href='https://www.linkedin.com/in/hazael-audi-24b02b167/' rel='noreferrer' target='_blank'>
                    <i class='fab fa-linkedin fa-lg'></i>
                  </a>
                </li>
                <li className='me-4 ms-4'>
                  <a style={{ color: 'aliceblue' }} href='https://github.com/AudiHazael/' rel='noreferrer' target='_blank'>
                    <i class='fab fa-github fa-lg'></i>
                  </a>
                </li>
                <li className='me-4 ms-4'>
                  <a style={{ color: 'aliceblue' }} href='https://wa.link/7bpg6f' rel='noreferrer' target='_blank'>
                    <i class='fab fa-whatsapp fa-lg'></i>
                  </a>
                </li>
                <li className='me-4 ms-4'>
                  <a style={{ color: 'aliceblue' }} href='https://www.behance.net/hazaelaudi' rel='noreferrer' target='_blank'>
                    <i class='fab fa-behance fa-lg'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='copyright'>
        <div className='container animate__animated animate__zoomIn animate__slower'>
          <div className='row'>
            <div className='col-lg-12'>
              <p className='text-center'>Copyright © Haza'El Devs</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
