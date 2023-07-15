import React from 'react';
import '../assets/css/all.min.css';
import logo from '../assets/images/logo-image.png';

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container'>
          <a className='navbar-brand logo-Text' href='website-design-and-development-services.html' rel='follow'>
            <img className='img-fluid' src={logo} alt='Logo' width='70px' />
          </a>

          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon text-light'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarNav'>
            <div className='navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center'>
              <ul className='navbar-nav'>
                <li className='nav-item me-4 ms-4'>
                  <a className='nav-link' aria-current='page' href='website-design-and-development-services.html'>
                    Home
                  </a>
                </li>
                <li className='nav-item dropdown me-4 ms-4'>
                  <button className='nav-link dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
                    Portfolio
                  </button>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='email-design-portfolio.html'>
                        HTML Emails
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='email-design-portfolio.html'>
                        Website/Landing Page Portfolio
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item me-4 ms-4'>
                  <a className='nav-link' href='send-us-a-message.html'>
                    Contact
                  </a>
                </li>
                <li className='nav-item me-4 ms-4'>
                  <a className='nav-link' href='Blogs/blog-home.html'>
                    Blog
                  </a>
                </li>
              </ul>

              <div className='navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end'>
                <div className='navbar-nav socials'>
                  <ul className='list-unstyled d-flex justify-content-center'>
                    <li className='me-4 ms-4'>
                      <a style={{ color: 'aliceblue' }} href='https://www.twitter.com/HazaelAudi' rel='noreferrer' target='_blank'>
                        <i className='fab fa-twitter fa-lg'></i>
                      </a>
                    </li>
                    <li className='me-4 ms-4'>
                      <a style={{ color: 'aliceblue' }} href='https://www.linkedin.com/in/hazael-audi-24b02b167/' rel='noreferrer' target='_blank'>
                        <i className='fab fa-linkedin fa-lg'></i>
                      </a>
                    </li>
                    <li className='me-4 ms-4'>
                      <a style={{ color: 'aliceblue' }} href='https://github.com/AudiHazael/' rel='noreferrer' target='_blank'>
                        <i className='fab fa-github fa-lg'></i>
                      </a>
                    </li>
                    <li className='me-4 ms-4'>
                      <a style={{ color: 'aliceblue' }} href='https://wa.link/7bpg6f' rel='noreferrer' target='_blank'>
                        <i class='fab fa-whatsapp fa-lg'></i>
                      </a>
                    </li>
                    <li className='me-4 ms-4'>
                      <a style={{ color: 'aliceblue' }} href='https://www.behance.net/hazaelaudi' rel='noreferrer' target='_blank'>
                        <i className='fab fa-behance fa-lg'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
